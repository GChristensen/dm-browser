(ns lenegro.scrape
  (:import java.util.regex.Pattern)
  (:require [lenegro.api :as api]
            [lenegro.default-settings :as defsettings]
            [clojure.string :as str])
  (:use net.cgrand.enlive-html))

;; May automatically scrape some wakaba/kusaba variations,
;; [semi]automatic scrapping is confirmed for:

;; 4chan.org
;; 7chan.org (limited support)
;; gurochan.net
;; wakachan.org
;; iichan.net
;; ichan.org (limited support)
;; iichan.ru
;; 2chan.su
;; 0chan.ru
;; 2ch.so
;; 410chan.ru
;; 5channel.net
;; dobrochan.ru (limited support)
;; nowere.net

;; Custom scrappers:

;; krautchan.net
;; 2channel.ru (doesn't work)

;; utilities ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def ^:const alt-exts {"dobrochan.ru" "xhtml", "2--ch.ru" "memhtml"})

(defn trade-dispatch [_ resource] (:trade resource))

(defn get-ext [resource]
  (or (alt-exts (:trade resource)) "html"))

(defn sanitize [content]
  (when content
    (str/replace content #"<([^ ]+)[^>]*onload[^>]*>"
                 (fn [match] (str "<" (get match 1) ">")))))

(defn proxify-url [url resource]
  (when url
    (if api/+restricted+
      url
      (let [file-name (re-find #"[^/]+$" url)]
        (str "/proxify/" file-name "?url=" (api/base64enc url)
             "&referer=" (api/base64enc (:target resource)))))))

(defn fix-url [url resource]
  (when url
    (cond
      (= (get url 0) \/) (if (= (get url 1) \/)
                           (str "http:" url)
                           (str (:scheme resource) (:domain resource) url))
      (.startsWith url "http") url
      :default (str (:target resource) "/" url))))

(defn fix-image [url resource]
  (if (:prox resource)
    (proxify-url (fix-url url resource) resource)
    (fix-url url resource)))

(def ^:dynamic *crossref-map* nil)

(defn check-reflinks [post-id content resource]
  (str/replace content #"<a[^>]+(href=[\"'][^'\"]+[\"'])[^>]*>&gt;&gt;(\d+)</a>"
               (fn [match]
                 (let [reply-no (get match 2)
                       refs (when *crossref-map* (@*crossref-map* reply-no))]
                   (when *crossref-map*
                     (dosync (alter *crossref-map* assoc! reply-no (conj refs post-id))))
                   (str "<a target=\"_blank\" "
                        (if (:fourchan resource)
                          (str/replace (get match 1) #"href=\"(\d+)"
                                       (fn [match]
                                         (str "href=\"http://" (:forum resource) "/res/" (get match 1))))
                          (get match 1))
                        " "
                        "onclick=\"return browser.inline_view_reflink(this)\" "
                        "onmouseover=\"browser.show_popup(event, '" reply-no  "', true)\" "
                        "onmouseout=\"browser.show_popup(event, '" reply-no "', false)\""
                        ">&gt;&gt;" reply-no "</a>")))))

(defn fix-links [content resource]
  (str/replace content (re-pattern (str "href=[\"'](/?(?:" (:board resource) ")?/?res/[^\"']+)[\"']"))
               (fn [match]
                 (str "href=\"" (fix-url (get match 1) resource) "\" target=\"_blank\""))))

(defn get-post-content [elt]
  (-> (apply str (emit* elt))
      (str/replace #"^<[^>]+>" "")
      (str/replace #"<[^>]+>$" "")))
  
;; pagination ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti paginate trade-dispatch)

(defmethod paginate "4chan.org" [n resource]
  (str (:scheme resource) "boards.4chan.org/" (:board resource) "/"
       (when (not (zero? n)) n)))         

(defmethod paginate "iichan.ru" [n resource]
  (str (:target resource) "/"
       (if (zero? n)
         (str "index." (get-ext resource))
         (str n "." (get-ext resource)))))

(defmethod paginate "dobrochan.ru" [n resource]
  (str (:target resource) "/"
       (if (zero? n)
         (str "index." (get-ext resource))
         (str n "." (get-ext resource)))))

(defmethod paginate "2--ch.ru" [n resource]
  (str (:target resource) "/"
       (str n "." (get-ext resource))))

(defmethod paginate :default [n resource]
  (str (:target resource) "/"
       (when (not (zero? n))
         (str n "." (get-ext resource)))))

(defmulti thread-url trade-dispatch)

(defmethod thread-url "krautchan.net" [thread-id resource]
  (str (:scheme resource) (:forum resource) "/thread-" thread-id "." (get-ext resource)))

(defmethod thread-url "4chan.org" [thread-id resource]
  (str "http://boards.4chan.org/" (:board resource) "/res/" thread-id))

(defmethod thread-url "iichan.net" [thread-id resource]
  (str "http://kei.iichan.net/" (:board resource) "/res/" thread-id ".html"))

(defmethod thread-url "2--ch.ru" [thread-id resource]
  (str (:scheme resource) (:forum resource) "/res/" thread-id ".html"))

(defmethod thread-url :default [thread-id resource]
  (str (:scheme resource) (:forum resource) "/res/" thread-id "." (get-ext resource)))

;; page fetching ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti fetch-page trade-dispatch)

(defmethod fetch-page "krautchan.net" [page resource]
  (let [content (api/fetch-url page :headers {"User-Agent" (or api/*user-agent* (:user-agent resource))})
        page-text (-> (slurp
                       (java.io.InputStreamReader.
                        (java.io.ByteArrayInputStream. (:content content)) "UTF-8"))
                      (str/replace 
                       "<table>"
                       "<table><tr>")
                      (str/replace 
                       "</table>"
                       "</tr><table>"))]    
    (html-resource
     (java.io.StringReader. page-text))))

(defmethod fetch-page "ichan.org" [page resource]
  (let [content (api/fetch-url page :headers {"User-Agent" (or api/*user-agent* (:user-agent resource))})
        page-text (slurp (java.io.InputStreamReader.
                          (java.io.ByteArrayInputStream. (:content content)) "UTF-8"))]
    (html-resource
     (java.io.StringReader.
      (if (> (.indexOf page "/res/") 0)
        (->
         page-text
         (str/replace 
          "<form id=\"delform\" action=\"http://ichan.org/board.php\" method=\"post\">"
          "<form id=\"delform\" action=\"http://ichan.org/board.php\" method=\"post\"><div id=\"thread1\">")
         (str/replace 
          #"</form>\n<script"
          "</div></form>\n<script"))
        page-text)))))

(defmethod fetch-page :default [page resource]
  (let [content (api/fetch-url page :headers {"User-Agent" (or api/*user-agent* (:user-agent resource))})]
    (api/make-enlive-resource content)))

(defn fetch-for-archive [thread-id resource]
  (let [page (thread-url thread-id resource)
        content (api/fetch-url page)]
    (if (= (:response-code content) 200)
      (let [pattern
            (condp = (:trade resource)
              "krautchan.net" #"<(img|a)([^>]*)(src|href)=\"?(/((?:files|thumbnails)/\d+\.\w+))\"?([^>]*)>"
              #"<(img|a)([^>]*)(src|href)=[\"']([^>]*((?<!misc/)(?:src|thumb)[^>]*/[^/\"']+))[\"']([^>]*)>")
            images (ref (transient {}))
            page-text (-> (slurp (java.io.InputStreamReader.
                                  (java.io.ByteArrayInputStream. (:content content)) "UTF-8"))
                          (str/replace "$" "&#36;")
                          (str/replace #"<div[^>]+theader[^>]+>.*?</div>" "")
                          (str/replace #"<div[^>]+postarea[^>]+>.*?</form></div>" "")
                          (str/replace
                           #"(?s)<head>(.*?)</head>"
                           (fn [match]
                             (str "<head>"
                                  (str/replace
                                   (get match 1)
                                   #"(src|href)=[\"']([^\"']+)[\"']"
                                   (fn [match]
                                     (str (get match 1) "=\"" (fix-url (get match 2) resource) "\"")))
                                  "</head>")))
                          (str/replace
                           pattern
                           (fn [match]
                             (let [file (str/replace (get match 5) "/" "-")
                                   image-url (str (get match 3) "=\"/archive/" (:prefix resource) thread-id "/"
                                                  file "\"")]
                               (dosync (alter images assoc! file (fix-url (get match 4) resource)))
                               (str "<" (get match 1) (get match 2) image-url (get match 6) ">")))))]
        {:response-code 200 :page-text page-text :images (persistent! @images)})
        {:response-code (:response-code content)})))

;; headline struct ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti get-thread-id trade-dispatch)

(defmethod get-thread-id "4chan.org" [root-node resource]
  (let [elt (first (select root-node [[:input (attr= :type "checkbox")]]))]
    (:name (:attrs elt))))

(defmethod get-thread-id "dobrochan.ru" [root-node resource]
  (let [elt (first (select root-node [[:input (attr= :type "checkbox")]]))]
    (:name (:attrs elt))))

(defmethod get-thread-id "krautchan.net" [root-node resource]
  (let [elt (first (select root-node [root :> :.postheader :> :input]))]
    (re-find #"\d+" (:name (:attrs elt)))))

(defmethod get-thread-id :default [root-node resource]
  (let [elt (first (select root-node [[:input (attr= :type "checkbox")]]))]
    (:value (:attrs elt))))

(defn get-omitted [omitted-elt]
  (let [omitted-text (first (:content omitted-elt))
        omitted-text (when (string? omitted-text) omitted-text)
        omitted-posts (when omitted-text (re-find #"\d+" omitted-text))]
    (when omitted-posts (inc (Integer/parseInt omitted-posts)))))

(defstruct headline :id :internal-id :omitted :date :title :link :thumb :image :image-size :text :children
           :num :last-id :refs)

(defn make-headline [post-id parent-id num date-elts title-elt thumb-img image-link image-size post-text resource]
  (let [width-height (when image-size (re-find #"(\d+)[x\u00d7](\d+)" (api/render image-size)))]
    (struct-map headline
      :id post-id
      :internal-id (str (:prefix resource) post-id)
      :num num
      :date (api/sanitize (str/trim (apply str date-elts)))
      :title (sanitize (first (:content title-elt)))
      :link (thread-url (or parent-id post-id) resource)
      :thumb (fix-image (:src (:attrs thumb-img)) resource)
      :image (fix-image (:href (:attrs image-link)) resource)
      :image-size (if image-size [(get width-height 1) (get width-height 2)] [0 0])
      :text (check-reflinks post-id (fix-links (sanitize (get-post-content post-text)) resource) resource))))

(defn make-image-headline [thread-id thumb-img image-link image-size resource]
  (let [width-height (when image-size (re-find #"(\d+)[x\u00d7](\d+)" (api/render image-size)))
        image-link (fix-image (:href (:attrs image-link)) resource)]
    (struct-map headline
      :id thread-id
      :internal-id image-link
      :link (thread-url thread-id resource)
      :thumb (fix-image (:src (:attrs thumb-img)) resource)
      :image image-link
      :image-size (if image-size [(get width-height 1) (get width-height 2)] [0 0]))))

(defn make-error-headline [message n resource]
  (struct-map headline
    :id "error"
    :internal-id (str (:prefix resource) n "-error")
    :title "Error"
    :text message))
    
;; tree scrapper ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn scrape-post-wkb [root-node parent-id num resource]
  (let [thread-id (get-thread-id root-node resource)
        date-elts (select root-node #{[:.posttime :> text-node] [root :> :label :> text-node]})
        title-elt (first (select root-node [[:span (attr-contains :class "title")]]))
        thumb-img (first (select root-node #{[root :> :* :> [:img (attr-contains :src "thumb/")]]
                                             [root :> :* :> :* :> [:img (attr-contains :src "thumb/")]]
                                             [:.threadimg :img]}))
        image-link (first (select root-node #{[root :> :* :> [:a (attr-contains :href "src/")]]
                                              [:.threadimg :img]}))
        filesize (first (select root-node [#{:.filesize :.fileinfo}]))
        post-text (first (select root-node #{[root :> :blockquote]
                                             [root :> :div.postbody :> :div.message]}))]
    (make-headline thread-id parent-id num date-elts title-elt thumb-img image-link filesize post-text resource)))

(defn scrape-post-ksb [root-node parent-id num resource]
  (let [thread-id (get-thread-id root-node resource)
        date-elts (select root-node [root :> :.post :> text-node])
        title-elt (first (select root-node [root :> :.post :> :.subject]))
        thumb-img (first (select root-node #{[root :> :.post_thumb :> :a :> :img]
                                             [root :> :.post :> :.post_thumb :> :a :> :img]
                                             [root :> :.post :> [:div (attr= :style "float:left")]
                                              :> :a :img]}))
        image-link (first (select root-node #{[root :> :.post_thumb :> :a]
                                              [root :> :.post :> :.post_thumb :> :a]
                                              [root :> :.post :> [:div (attr= :style "float:left")]
                                               :> :a]}))
        filesize (first (select root-node #{[root :> :.file_size]
                                            [root :> :.post :> :.file_size]
                                            [:.post :.multithumbfirst :> :a]}))
        post-text (first (select root-node [root :> :.post :> :.message]))]
    (make-headline thread-id parent-id num date-elts title-elt thumb-img image-link filesize post-text resource)))

(defn scrape-structured
  ([threads scrape-post-f reply-sel resource]
     (let [parse-thread
           (fn [root-node oppost]
             (let [all-replies (select root-node reply-sel)
                   omitted (+ (count all-replies)
                              (or (get-omitted (first (select root-node #{[:.omittedposts] [:.omittedinfo]
                                                                          [:div.abbrev :> :span]
                                                                          [:span.summary]})))
                                  1))
                   last-id (if (seq all-replies)
                             (get-thread-id (last all-replies) resource)
                             (:id oppost))
                   take-replies (:replies resource)
                   parent-id (:id oppost)]
               (if (= 0 take-replies)
                 (assoc oppost :last-id last-id :omitted omitted)
                 (binding [*crossref-map* (ref (transient {}))]
                   (let [replies
                         (when (seq all-replies)
                           (let [first-taken (- (count all-replies) take-replies)
                                 taken-replies (if (> take-replies 0)
                                                 (seq (second (split-at first-taken all-replies)))
                                                 all-replies)]
                             (loop [replies taken-replies num (- omitted (count taken-replies) -1)
                                    out (transient [])]
                               (let [reply (first replies)]
                                 (if reply
                                   (recur (next replies)
                                          (inc num)
                                          (conj! out (scrape-post-f reply parent-id num resource)))
                                   (persistent! out))))))
                         replies (doall (map #(assoc % :refs (reverse (@*crossref-map* (:id %)))) replies))
                         oppost (assoc oppost :children replies :last-id last-id :omitted omitted)]
                     (assoc oppost :refs (reverse (@*crossref-map* (:id oppost)))))))))
           
           filter-matches?
           (fn [post resource]
             (or (and (:title post) (re-find (:pattern resource) (:title post)))
                 (and (:text post) (re-find (:pattern resource) (:text post)))))]
       (filter
        (complement nil?)
        (for [root-node threads]
          (when-let [oppost-node (cond
                                  (seq (select root-node [root :> [:div first-of-type] :>
                                                          #{:blockquote :div.postbody :.mobile}]))
                                  (first (select root-node [root :> [:div first-of-type]]))

                                  (seq (select root-node [root :> :.op :> :.post]))
                                  (first (select root-node [root :> :.op]))

                                  (seq (select root-node [:.maincontentdiv :> :form#delform :> :blockquote]))
                                  (first (select root-node [:.maincontentdiv :> :form#delform]))
                                  
                                  :default root-node)]
            (let [oppost (scrape-post-f oppost-node nil 1 resource)]
              (if (:filter resource)
                (let [resource (assoc resource
                                 :pattern (re-pattern (str "(?iu)(?:^|>)[^<]*"
                                                           (Pattern/quote (:filter resource))
                                                           "[^<]*(?:$|<)")))]
                  (if (:deep resource)
                    (let [thread (parse-thread root-node oppost)]
                      (when (or (filter-matches? oppost resource)
                                (loop [posts (:children thread)]
                                  (when-let [post (first posts)]
                                    (if (filter-matches? post resource)
                                      true
                                      (recur (next posts))))))
                        thread))
                    (when (filter-matches? oppost resource)
                      (parse-thread root-node oppost))))
                (parse-thread root-node oppost))))))))
  ([threads resource]
     (scrape-structured threads scrape-post-wkb [:table :.reply] resource)))

;; flat scrappper ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn scrape-flat [doc-tree resource]
  (let [elts (select doc-tree #{[:form :> [:input (attr= :type "checkbox")]]
                                [:form :> :label :> [:input (attr= :type "checkbox")]]
                                [:form :> :.omittedposts]
                                [:form :> :.posttime]
                                [:form :> :span.filetitle]
                                [:form :> :label :> :span.filetitle]
                                [:form :> [:a (attr-contains :href "src/")]]
                                [:form :> :.filesize]
                                [:form :> :blockquote]
                                [:body :> :form :> :table]})
        ctr (ref 0)
        threads (partition-by #(do (when (and (= (:tag %) :span)
                                              (= (:class (:attrs %)) "filesize"))
                                     (dosync (alter ctr inc)))
                                   @ctr)
                              elts)]
    (scrape-structured (map (fn [th] {:tag :root :content th}) threads) resource)))

;; forum specific scrappers ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti scrape-threads trade-dispatch)

(defn scrape-post-4chan [root-node parent-id num resource]
  (let [thread-id (get-thread-id root-node resource)
        title-elt (first (select root-node [root :> :.post :> :.subject]))
        date (str/trim (first (:content (first (select root-node [:.dateTime])))))
        image-link (first (select root-node [:a.fileThumb]))
        thumb-img  (first (select image-link [:img]))
        filesize (first (select root-node [:.fileText]))
        post-text (first (select root-node [root :> :.post :> :blockquote]))]
    (make-headline thread-id parent-id num date title-elt thumb-img image-link filesize post-text
                          resource)))

(defmethod scrape-threads "4chan.org" [doc-tree resource]
  (scrape-structured (select doc-tree [:div.board :> :div.thread])
                     scrape-post-4chan
                     [:.replyContainer]
                     resource))

(defn scrape-post-kraut [root-node parent-id num resource]
  (let [thread-id (get-thread-id root-node resource)
        ball-elt (first (select root-node [root :> :.postheader :> [:img (attr-contains :src "ball")]]))
        ball [(fix-url (:src (:attrs ball-elt)) resource)
              (get (re-find #"'([^']+)'" (:onmouseover (:attrs ball-elt))) 1)]
        title-elt (first (select root-node [root :> :.postheader :> :span.postsubject]))
        date (str/trim (first (:content (first (select root-node [:.postdate])))))
        image-link (first (select root-node [root :> #{:.file_thread :.file_reply} :>
                                             [:a (attr= :target "_blank")]]))
        thumb-img  (first (select image-link [:img]))
        filesize (first (select root-node [root :> #{:.file_thread :.file_reply} :> :.fileinfo]))
        post-text (first (select root-node [root :> :* :> :blockquote]))]
    (assoc (make-headline thread-id parent-id num date title-elt thumb-img image-link filesize post-text
                          resource)
      :ball ball)))

(defmethod scrape-threads "krautchan.net" [doc-tree resource]
  (scrape-structured (select doc-tree [:form :> :div.thread :> :.thread_body])
                     scrape-post-kraut
                     [:.postreply]
                     resource))

(defmethod scrape-threads "2--ch.ru" [doc-tree resource]
  (scrape-structured (select doc-tree [root :> :body :> :form :>
                                       [:div (attr-starts :id "t") (but (attr? :style))]])
                     scrape-post-wkb
                     [:table :.reply]
                     resource))

;; (kareha) doesn't work now, invalid selectors
(defn scrape-post-2channel [root-node parent-id resource]
  (let [thread-id (second (re-find #"/(\d+)/"
                                   (:href (:attrs (first (select root-node [root :> :h2 :> :a]))))))
        omitted-elt (when (not parent-id) (first (select root-node [root :> :h2 :> :a :> :small])))
        title-elt {:content (select root-node [root :> :h2 :> :a :> text-node])}
        post-text (first (select root-node [root :> :div.replies :> :div.firstreply :>
                                            :div.reply :> :div.replytext]))]
    (make-headline thread-id parent-id title-elt nil nil nil post-text resource)))

#_(defmethod scrape-threads "2channel.ru" [doc-tree resource] 
  (let [thread (scrape-structured (select doc-tree [root :> :body :> :div#posts :> :div.thread])
                                   scrape-post-2channel
                                  [:.finalreplies :> :.reply]
                                  resource)]
    thread))

(defmethod scrape-threads "7chan.org" [doc-tree resource]
  (scrape-structured (select doc-tree [:form :> [:div (attr-starts :id "thread")]])
                     scrape-post-ksb
                     [:.reply]
                     resource))

(defmethod scrape-threads :default [doc-tree resource]
  (if (seq (select doc-tree [root :> :body :> :form :> :blockquote]))
    (scrape-flat doc-tree resource)
    (let [kusaba? nil #_(seq (select doc-tree [root :> :head :> [:script (attr-contains :src "kusaba.js")]]))]
      (scrape-structured (select doc-tree [:form :> [:div (attr-starts :id "thread")]])
                         (if kusaba? scrape-post-ksb scrape-post-wkb)
                         (if kusaba? [:.reply] [:table :.reply])
                         resource))))

;; image scrappers ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti scrape-thread-images trade-dispatch)

(defmethod scrape-thread-images "dobrochan.ru" [doc-tree resource]
  (let [images (select doc-tree {[:.fileinfo] [:.file]})]
    (for [filesz images]
      (make-image-headline nil (first (select filesz [:img])) (first (select filesz [:a])) filesz resource))))
  
(defmethod scrape-thread-images :default [doc-tree resource]
  (let [images (select doc-tree #{[#{:.filesize :.fileinfo :.fileInfo}]
                                  [[:* (but :.filesize) (but :.fileinfo) (but :.fileText)] :>
                                   [:a (attr? :target) (attr-contains :href "src/")]]})]
    (for [[filesz link] (partition 2 images)]
      (make-image-headline nil (first (select link [:img])) link filesz resource))))

(defn scrape-images-struct [doc-tree oppost resource]
  (let [threads (select doc-tree oppost)]
    (apply concat
           (for [root-node threads]
             (let [thread-id-elt (first (select root-node [[:input (attr= :type "checkbox")]]))
                   thread-id (get-thread-id thread-id-elt resource)
                   images (select root-node #{[#{:.filesize :.fileinfo :.fileInfo}]
                                              [[:* (but :.filesize) (but :.fileinfo) (but :.fileText)] :>
                                               [:a (attr? :target) (attr-contains :href "src/")]]})]
               (for [[filesz link] (partition 2 images)]
                 (make-image-headline thread-id (first (select link [:img])) link filesz resource)))))))

(defn scrape-images-flat [doc-tree resource]
  (let [nodes (select doc-tree #{#{[:form :> [:input (attr= :type "checkbox")]]
                                   [:form :> :label :> [:input (attr= :type "checkbox")]]}
                                 [:.filesize]
                                 [[:* (but :.filesize)] :> [:a (attr? :target) (attr-contains :href "src/")]]})
        groups (partition-by #(= (:tag %) :input) nodes)
        images (loop [prev (first groups) sep (second groups) rest (nnext groups) out []]
                 (if rest
                   (let [following (first rest)
                         [h t] (split-at (- (count following) 2) following)]
                       (recur t (fnext rest) (nnext rest) (concat out sep prev h)))
                   (concat out sep prev)))
        images (partition-by #(= (:tag %) :input) images)]      
    (loop [th (first images) th-images (second images) rest (nnext images) out []]
      (if th-images
        (let [id-elt (first th)
              thread-id (get-thread-id id-elt resource)]
          (recur (first rest) (second rest) (nnext rest)
                 (concat out (for [[filesz link] (partition 2 th-images)]
                               (make-image-headline thread-id (first (select link [:img])) link filesz
                                                    resource)))))
       out))))

(defmulti scrape-images trade-dispatch)

(defmethod scrape-images "krautchan.net" [doc-tree resource]
  [])

(defmethod scrape-images :default [doc-tree resource]
  (if (seq (select doc-tree [root :> :body :> :form :> :blockquote]))
    (scrape-images-flat doc-tree resource)
    (scrape-images-struct doc-tree #{[:.board :> :.thread]
                                     [:form#delform :> [:div (attr-starts :id "thread")]]
                                     [root :> :body :> :form :> [:div (attr-starts :id "thread")]]}
                          resource)))

;; science ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-science-video []
  (let [;content (api/fetch-url "http://symphonyofscience.com/videos.html")
        ;doc-tree (api/make-enlive-resource content)
        link (or #_(rand-nth (try
                             (map #(or (:src (:attrs %))
                                       (:value (:attrs %)))
                                  (select doc-tree #{[:.video :> :iframe]
                                                     [:.video :> :object :> [:param (attr= :name "movie")]]}))
                             (catch Throwable e nil)))
                 (rand-nth defsettings/science-videos))]
    (if (and link (> (.indexOf link "?") 0))
      (str link "&autoplay=1")
      (str link "?autoplay=1"))))