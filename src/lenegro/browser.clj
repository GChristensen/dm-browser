(ns lenegro.browser
  (:import java.util.logging.Logger)
  (:require [lenegro.api :as api]
            [lenegro.scrape :as scrape]
            [lenegro.default-settings :as defsettings]
            [clojure.string :as str]
            [appengine-magic.core :as gae]
            [appengine-magic.services.datastore :as ds]
            [appengine-magic.services.blobstore :as bs])
  (:use net.cgrand.enlive-html))

(def ^:const max-history 20)
(def ^:const watch-page "self.ref/watch")
(def ^:const archive-page "self.ref/archive")
(def ^:const science-page "self.ref/sing")

(def ^:const all-commands #{"archive" "watch" "stop" "sing!"})

(ds/defentity Scrap [task-id n ^:clj threads timestamp])
(ds/defentity Settings [^:key user-token ^:clj settings])
(ds/defentity ForgottenThread [id prefix user-token timestamp])
(ds/defentity WatchItem [^:key item-id prefix board user-token ^:clj oppost delta-count last-id timestamp])
(ds/defentity ArcItem [^:key item-id board user-token ^:clj oppost page ^:clj images
                       rate last-modified timestamp])

(ds/defentity Visitor [identity referer timestamp])

;; utils ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-settings [user-token]
  (or (:settings (ds/retrieve Settings user-token))
      (defsettings/get-default)))

(defn make-resp [status body]
  (pr-str {:status status :body body}))

;; templates and transformations ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn html-content-if [content]
  (fn [node]
    (if content
      ((html-content content) node)
      node)))

(defn browser-template [open]
  (let [user-token (api/get-user-token)
        settings (get-settings user-token)]
    (at (html-resource (api/get-resource-as-stream "browser.html"))
        [:.uncompiled-script]
        #(when (not api/+production+) %)
        [:#settings-btn]
        #(when (not open) %)
        [:#init-script]
        (content (str "browser.main('"
                      (pr-str {:favorites (:favorites-parsed  settings)
                               :fav-start (:fav-start settings)
                               :start-page (:start-page settings)
                               :keepalive (:keepalive settings)
                               :local api/+standalone+
                               :restricted api/+restricted+
                               :open open
                               })
                      "')")))))

(defn tab-template [url open]
  (let [user-token (api/get-user-token)
        settings (get-settings user-token)]
    (at (html-resource (api/get-resource-as-stream "tab.html"))
        [:.uncompiled-script]
        #(when (not api/+production+) %)
        [:base]
        (do->
         (set-attr :href api/*app-host*)
         (set-attr :url api/*app-host*))
        [:#init-script]
        (content (str "browser.main('"
                      (pr-str {:local api/+standalone+
                               :restricted api/+restricted+
                               :start-page "favorite"
                               :fav-start [(str url ":tab")]
                               :open open
                               :tab true
                               })
                      "')")))))

(defn snapin-template [&{:keys [simple action message static tab]}]
  (at (html-resource (api/get-resource-as-stream "thread-snapin.html"))
      [:#forget-btn]
      #(when (not simple)
         (when action ((content action) %)))
      [:#expand-btn]
      #(when (not (or simple action)) %)
      [:#expand-watch-btn]
      #(when (not (or simple action)) %)
      [:#go-again-btn]
      #(when (and (not static) (not action)) %)
      [:#refresh-btn]
      #(when (not static) %)
      [:#close-btn]
      #(when (not tab) %)
      [:#thread-headlines]
      (html-content-if message)))

(defn make-err-resp [message resource]
  (make-resp :error
             {:resource resource
              :snapin (api/render
                       (snapin-template
                        :simple true
                        :message (str "<div class=\"error\">" message "</div>")))}))

(defn image-stream-template [inline]
  (let [templ (html-resource (api/get-resource-as-stream "image-stream.html"))]
    (if inline
      (at templ
          [:base]
          (set-attr :href api/*app-host*))
      (select templ [:#image-stream]))))

(defn flatten-markup [text]
  (-> text
      (str/replace #"<br[^>]*>" " ")
      (str/replace #"<object[^>]*>.*?</object>" "")
      (str/replace #"<embed[^>]*>" "")
      (str/replace
       #"((?:<blockquote )|(?:<div )|(?:<p ))"
       (fn [match]
         (str (get match 1) "style=\"display: inline\" ")))))

(defn format-watch-stream []
  (let [user-token (api/get-user-token)
        settings (get-settings user-token)
        watch-items (ds/query :kind WatchItem :filter (= :user-token user-token) :sort :board)
        boards (distinct (map #(:board %) watch-items))
        watch-groups (partition-by :board watch-items)
        threads (flatten (interleave boards
                                     (map #(map (fn [w] (assoc (:oppost w)
                                                          :omitted (:delta-count w)
                                                          :last-id (:last-id w)
                                                          :board (:board w))) %)
                                          watch-groups)))
        headlines-templ (html-resource (api/get-resource-as-stream "watch-stream.html"))]
    [(api/render
      (transform headlines-templ [:.thread-line]
                 (clone-for [th threads]
                            (fn [node]
                              (if (string? th)
                                (at node
                                    [root]
                                    (set-attr :class "group-line")
                                    [:.watch-thread-control]
                                    (do->
                                     (set-attr :colspan "3")
                                     (set-attr :class "thread-group")
                                     (content th))
                                    [:.watch-image-cell] nil
                                    [:.thread-oppost] nil)
                                (at node
                                    [:.watch-image-cell]
                                    #(when (not (:force-text settings)) %)
                                    [:.watch-image]
                                    (when (and (:image th) (not (:force-text settings)))
                                      (set-attr :src (:thumb th)))
                                    [:.image-link]
                                    (when (and (:image th) (not (:force-text settings)))
                                      (do->
                                       (set-attr :href (:image th))
                                       (set-attr :onclick (str "return expand_img(this,"
                                                               (first (:image-size th)) ","
                                                               (second (:image-size th)) ")"))))
                                    [:.watch-image-container]
                                    #(when (not (:force-text settings))
                                       (if (:image th)
                                         %
                                         ((html-content "<span class=\"noimage\">No image</span>") %)))
                                    [:.thread-oppost]
                                    (set-attr :id (:internal-id th))
                                    [:.thread-no]
                                    (do->
                                     (set-attr :title (:date th))
                                     (set-attr :href (:link th))
                                     (content (:id th)))
                                    [:.delta-link]
                                    (set-attr :href (str (:link th) "#" (:last-id th)))
                                    [:.post-count]
                                    (content (str "[" (:omitted th) "]"))
                                    [:.thread-title]
                                    (html-content (:title th))
                                    [:.lazy-load-trigger]
                                    (fn [node]
                                      (when (:always-calc-delta settings)
                                        node))
                                    [:.watch-oppost-text]
                                    (html-content (flatten-markup (:text th)))))))))
     (count watch-items)]))

(defn format-archive-stream []
  (let [user-token (api/get-user-token)
        settings (get-settings user-token)
        arc-items (ds/query :kind ArcItem :filter (= :user-token user-token) :sort :board)
        boards (distinct (map #(:board %) arc-items))
        arc-groups (partition-by :board arc-items)
        threads (flatten (interleave boards
                                     (map #(map (fn [w] (assoc (:oppost w)
                                                          :rate (:rate w)
                                                          :board (:board w))) %)
                                          arc-groups)))
        headlines-templ (html-resource (api/get-resource-as-stream "archive-stream.html"))]
    [(api/render
      (transform headlines-templ [:.thread-line]
                 (clone-for [th threads]
                            (fn [node]
                              (if (string? th)
                                (at node
                                    [root]
                                    (set-attr :class "group-line")
                                    [:.watch-thread-control]
                                    (do->
                                     (set-attr :colspan "3")
                                     (set-attr :class "thread-group")
                                     (content th))
                                    [:.watch-image-cell] nil
                                    [:.thread-oppost] nil)
                                (at node
                                    [:.arc-rate]
                                    (content (if (and (not api/+restricted+) (:rate th))
                                               (:rate th)
                                               "never"))
                                    [:.watch-image-cell]
                                    #(when (not (:force-text settings)) %)
                                    [:.watch-image]
                                    (when (and (:image th) (not (:force-text settings)))
                                      (set-attr :src (:thumb th)))
                                    [:.image-link]
                                    (when (and (:image th) (not (:force-text settings)))
                                      (do->
                                       (set-attr :href (:image th))
                                       (set-attr :onclick (str "return expand_img(this,"
                                                               (first (:image-size th)) ","
                                                               (second (:image-size th)) ")"))))
                                    [:.watch-image-container]
                                    #(when (not (:force-text settings))
                                       (if (:image th)
                                         %
                                         ((html-content "<span class=\"noimage\">No image</span>") %)))
                                    [:.thread-oppost]
                                    (set-attr :id (:internal-id th))
                                    [:.thread-no]
                                    (do->
                                     (set-attr :title (:date th))
                                     (set-attr :href (:link th))
                                     (content (:id th)))
                                    [:.post-count]
                                    (content (str "[" (:omitted th) "]"))
                                    [:.thread-title]
                                    (html-content (:title th))
                                    [:.watch-oppost-text]
                                    (html-content (flatten-markup (:text th)))))))))
     (count arc-items)]))

(defn wordfilter-matches? [text words]
  (when (and text words)
    (let [text-lc (str/lower-case text)]
      (loop [words words]
        (let [word (first words)]
          (when word
            (if (string? word)
              (if (= (.indexOf text-lc word) -1)
                (recur (next words))
                true)
              (if (re-find word text)
                true
                (recur (next words))))))))))

(defn filter-replies [wf-post thread]
  (let [replies (:children thread)]
    (if replies
      (assoc thread :children (filter #(not (wordfilter-matches? (:text %) wf-post)) replies))
      thread)))

(defn filter-threads [threads resource]
  (let [settings (:settings resource)
        user-token (api/get-user-token)
        wf-enabled? (:wf-enabled settings)
        wf-title (:wf-title-parsed settings)
        wf-post (:wf-post-parsed settings)
        forgotten-threads (ds/query :kind ForgottenThread
                                    :filter [(= :prefix (:prefix resource)) (= :user-token user-token)])
        forgotten-threads (when (seq forgotten-threads)
                            (set (map (fn [t] (:id t)) forgotten-threads)))
        threads-on-watch (ds/query :kind WatchItem
                                   :filter [(= :prefix (:prefix resource)) (= :user-token user-token)])
        threads-on-watch-map (when (and (seq threads-on-watch) (not (:filter resource)))
                               (apply hash-map
                                      (apply concat
                                             (map (fn [w] [(:internal-id (:oppost w)) w]) threads-on-watch))))
        watch-first? (:watch-first settings)]
    (loop [all threads shown (transient []) watch (transient {}) filtered 0 forgotten 0]
      (let [th (first all)]
        (if th
          (cond (and forgotten-threads (contains? forgotten-threads (:internal-id th)))
                (recur (next all) shown watch filtered (inc forgotten))
                
                (and wf-enabled?
                     (or (wordfilter-matches? (:title th) wf-title)
                         (wordfilter-matches? (:text th) wf-post)))
                (recur (next all) shown watch (inc filtered) forgotten)

                (and threads-on-watch-map (contains? threads-on-watch-map (:internal-id th)))
                (let [thread-id (:internal-id th)
                      watch-item (threads-on-watch-map thread-id)
                      post-count (:omitted th)
                      post-delta (- post-count (:delta-count watch-item))
                      watch-thread (assoc th :onwatch true :post-delta post-delta 
                                          :last-id (:last-id watch-item) :timestamp (:timestamp watch-item))]
                  (when (not= 0 post-delta)
                    (ds/save! (assoc watch-item :delta-count post-count :last-id (:last-id th))))
                  (recur (next all)
                         (if watch-first? shown (conj! shown watch-thread))
                         (if watch-first? (assoc! watch thread-id watch-thread) watch)
                         filtered
                         forgotten))
                
                :default (recur (next all) (conj! shown th) watch filtered forgotten))
          (if (and watch-first? threads-on-watch-map)
            (let [shown (persistent! shown)
                  watch (persistent! watch)
                  out-of-scope (filter (fn [[k v]] (not (contains? watch k))) threads-on-watch-map)
                  out-of-scope (map (fn [kv] (let [w (second kv)]
                                               (assoc (:oppost w)
                                                 :onwatch true
                                                 :last-id (:last-id w)
                                                 :timestamp (:timestamp w)
                                                 :omitted (:delta-count w))))
                                    out-of-scope)
                  threads-on-watch (sort-by :timestamp
                                            (concat (map (fn [kv] (second kv)) watch) out-of-scope))
                  all-threads (concat threads-on-watch shown)]
              [(if wf-enabled? (map #(filter-replies wf-post %) all-threads) all-threads)
               {:shown (count shown) :filtered filtered :forgotten forgotten :watch (count watch)
                :watch-total (count threads-on-watch)}])
            (let [shown (persistent! shown)]
              [(if wf-enabled? (map #(filter-replies wf-post %) shown) shown)
               {:shown (count shown) :filtered filtered :forgotten forgotten :watch 0 :watch-total 0}])))))))

(defn transform-replies [thread resource settings]
  (let [force-text? (or (:txt resource) (:force-text settings))
        replies (if (:wf-enabled settings)
                  (:children (filter-replies (:wf-post-parsed settings) thread))
                  (:children thread))]
    (fn [node]
      ((clone-for [rep replies]
                  [:.ball]
                  #(when (:ball rep)
                     ((do->
                       (set-attr :src (first (:ball rep)))
                       (set-attr :title (second (:ball rep)))) %))
                  [:.reply-no]
                  (do->
                   (set-attr :title (:date rep))
                   (set-attr :href (str (:link rep) "#" (:id rep)))
                   (content (:id rep)))
                  [:.reply-ord]
                  (content (str (:num rep)))
                  [:.reply-title]
                  (html-content (:title rep))
                  [:.post-image]
                  (when (and (not force-text?) (:thumb rep))
                    (set-attr :src (:thumb rep)))
                  [:.image-link]
                  (when (and (not force-text?) (:image rep))
                    (do->
                     (set-attr :href (:image rep))
                     (set-attr :onclick (str "return expand_img(this,"
                                             (first (:image-size rep)) ","
                                             (second (:image-size rep)) ")"))))
                  [:.image-container]
                  #(when (not force-text?) %)
                  [:.post-text]
                  (do->
                   (html-content (:text rep))
                   (set-attr :class (if (and (not force-text?) (:image rep))
                                      "image-indent post-text"
                                      "text-indent post-text")))
                  [:.crossref-container]
                  #(when (seq (:refs rep)) %)
                  [:.crossref]
                  (clone-for [ref (:refs rep)]
                             [root]
                             (do->
                              (set-attr :href (str (scrape/thread-url (:id thread) resource) "#" ref))
                              (set-attr :onmouseover (str "browser.show_popup(event, '"
                                                          ref  "', true)"))
                              (set-attr :onmouseout (str "browser.show_popup(event, '"
                                                         ref  "', false)"))
                              (html-content (str "&gt;&gt;" ref)))))
       node))))

(defn render-replies [thread settings resource]
  (let [headlines-templ (html-resource (api/get-resource-as-stream "thread-stream.html"))
        replies-html (at (select headlines-templ [:.replies])
                         [:.expand-trigger]
                         (set-attr :onclick (str "browser.expand_thread(\""
                                                 (:internal-id thread)
                                                 "\")"))
                         [:.image-indent]
                         (fn [node]
                           (if (or (:txt resource) (:force-text settings))
                             ((set-attr :class "text-indent") node)
                             node))
                         [:.reply]
                         (transform-replies thread resource settings))]
    (api/render replies-html)))
    
(defn format-thread-stream [threads resource]
  (let [settings (:settings resource)
        lazy-load-ofscp? (:always-calc-delta settings)
        headlines-templ (html-resource (api/get-resource-as-stream "thread-stream.html"))
        force-text? (or (:txt resource) (:force-text settings))
        headlines-html
        (at headlines-templ
            [:.expand-all-trigger]
            #(when (:xpnd resource) %)
            [:.group-line]
            #(when (:chain resource) %)
            [:.thread-line]
            (clone-for [th threads]
                       [root]
                       #(if (:onwatch th) ((set-attr :onwatch "onwatch") %) %)
                       [:.expand-trigger]
                       (set-attr :onclick (str "browser.expand_thread(\""
                                               (:internal-id th)
                                               "\")"))
                       [:.thread-header]
                       (set-attr :onclick (str "if (event.target == this) browser.expand_thread(\""
                                               (:internal-id th)
                                               "\")"))
                       [:.watch-trigger-disabled]
                       (fn [node]
                         (if (:onwatch th)
                           ((do->
                             (set-attr :class "watch-trigger-enabled")
                             (set-attr :title "Unwatch thread")
                             (set-attr :onwatch "onwatch")
                             (html-content "[&#x2012;]"))
                            node)
                           node))
                       [:.lazy-load-trigger]
                       (fn [node]
                         (when (and lazy-load-ofscp? (:onwatch th) (not (:post-delta th)))
                           node))
                       [:.service-pane]
                       (fn [node]
                         (if (:onwatch th)
                           ((html-content
                             (str "<span class=\""
                                  (if (:post-delta th) "delta-posts" "delta-posts-lazy")
                                  "\""
                                  (when (not (:post-delta th))
                                    "onclick=\"browser.lazy_get_watch(this)\"")
                                  "title=\"Delta posts from the last visit\">&#x2206; ["
                                  (if (:post-delta th) (:post-delta th) "?")
                                  "]</span>"))
                            node)
                           node))
                       [:.thread-control]
                       (fn [node]
                         (if (:onwatch th)
                           ((set-attr :class "thread-control onwatch") node)
                           node))
                       [:.thread-oppost]
                       (do->
                        (set-attr :id (:internal-id th))
                        (fn [node]
                          (if (:onwatch th)
                            ((set-attr :class "thread-oppost onwatch") node)
                            node)))
                       [:.ball]
                       #(when (:ball th)
                          ((do->
                            (set-attr :src (first (:ball th)))
                            (set-attr :title (second (:ball th)))) %))
                       [:.thread-no]
                       (do->
                        (set-attr :href (:link th))
                        (set-attr :title (:date th))
                        (content (:id th)))
                       [:.delta-link]
                       (when (:onwatch th)
                         (set-attr :href (str (:link th) "#" (:last-id th))))
                       [:.post-count]
                       (content (str "[" (:omitted th) "]"))
                       [:.thread-title]
                       (html-content (:title th))
                       [:.thread-oppost :> :.post-container :> :.image-container :>
                        :.image-link :> :.post-image]
                       (when (and (not force-text?) (:thumb th))
                         (set-attr :src (:thumb th)))
                       [:.thread-oppost :> :.post-container :> :.image-container :> :.image-link]
                       (when (and (not force-text?) (:image th))
                         (do->
                          (set-attr :href (:image th))
                          (set-attr :onclick (str "return expand_img(this,"
                                                  (first (:image-size th)) ","
                                                  (second (:image-size th)) ")"))))
                       [:.thread-oppost :> :.image-container]
                       #(when (not force-text?) %)
                       [:.oppost-text]
                       (do->
                        (html-content (:text th))
                        (set-attr :class (if (and (not force-text?) (:image th))
                                           "image-indent oppost-text"
                                           "text-indent oppost-text")))
                       [:.replies :> :.image-indent]
                       (fn [node]
                         (if (or force-text? (not (:image th)))
                           ((set-attr :class "text-indent") node)
                           node))
                       [:.reply]
                       (when (:children th)
                         (transform-replies th resource settings))))]
    (api/render headlines-html)))
                              
(defn format-image-stream [images resource]
  (let [headlines-templ (image-stream-template (:inline resource))
        headlines-html (transform headlines-templ [:.stream-image-container]
                                  (clone-for [im images]
                                             [:.image-thread-links]
                                             #(when (:id im) %)
                                             [:.thread-no]
                                             (do->
                                                (set-attr :href (:link im))
                                                (content (:id im)))
                                             [:.stream-image]
                                             (set-attr :src (:thumb im))
                                             [:.image-link]
                                             (do->
                                              (set-attr :href (:image im))
                                              (set-attr :onclick (str "return expand_img(this,"
                                                                      (first (:image-size im)) ","
                                                                      (second (:image-size im)) ")")))))]
    (api/render headlines-html)))

(defn format-sicence-stream []
  (api/render
   (transform (html-resource (api/get-resource-as-stream "science-stream.html"))
              [:iframe]
              (set-attr :src (scrape/get-science-video)))))
       

(defn format-headlines [threads resource]
  (if (:img resource)
    (format-image-stream threads resource)
    (format-thread-stream threads resource)))

;; http handlers ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn make-resource [url]
  (let [url (if (contains? all-commands (str/trim url))
              (str "self.ref/" url)
              url)
        addr (re-find #"(https?\://)?(([^/]+)/([a-zA-Z0-9]+))" (api/sanitize url))
        trade (if addr (re-find #"[^.]+\.[^.]+$" (get addr 3)) url)
        pages (get (re-find #":(\d+)p" url) 1)
        refresh (get (re-find #":(\d+)r" url) 1)
        replies (get (re-find #":(\d+)v" url) 1)
        watch-only? (when (> (.indexOf url ":wtch") 0) true)
        term (get (re-find #":search\{([^}]+)\}" (api/sanitize url)) 1)]
    {:uuid (api/get-uuid)
     :scheme (or (get addr 1) "http://")
     :forum (str trade "/" (get addr 4))
     :domain (get addr 3)
     :trade trade
     :board (get addr 4)
     :prefix (str trade "-" (get addr 4) "-")
     :target (str (or (get addr 1) "http://") (get addr 2))
     :pages (if watch-only? 0(if pages (Integer/parseInt pages) 5)) ; initial amount of pages
     :refresh (if refresh (Integer/parseInt refresh) 2) ; amount of pages scrapped on refresh
     :replies (if (> (.indexOf url ":hdlns") 0) ; amount of replies to take from a thread
                0
                (if replies (Integer/parseInt replies) 3))
     :txt (when (> (.indexOf url ":txt") 0) true) ; text only headlines
     :img (when (> (.indexOf url ":img") 0) true) ; image stream
     :rev (when (> (.indexOf url ":rev") 0) true) ; the oldest threads first
     :xpnd (when (> (.indexOf url ":xpnd") 0) true) ; expand all items
     :wtch (when (> (.indexOf url ":wtch") 0) true) ; watch items only
     :prox (when (> (.indexOf url ":prox") 0) true) ; try to bypass image hotnlinking protection
     :filter (when term (.toLowerCase term)) ; search text
     :deep (when (> (.indexOf url ":deep") 0) true) ; deep search
     :chain (when (> (.indexOf url ":chain") 0) true) ; chained query
     :first (when (> (.indexOf url ":first") 0) true) ; first query in chain
     :tab (when (> (.indexOf url ":tab") 0) true) ; single tab view
     }))

(defn get-settings-route []
  (let [user-token (api/get-user-token)
        settings (get-settings user-token)]
    (api/text-page (pr-str {:fav-start (:fav-start settings)
                            :start-page (:start-page settings)}))))

(defn got-image-route [item-id request]
  (try
    (let [arc-item (api/cache-get item-id)
          blob-map (bs/uploaded-blobs request)]
      (api/cache-put! item-id (assoc-in arc-item [:images (ffirst blob-map)]
                                        (.getKeyString (second (first blob-map))))))
   (catch Throwable e
      #_(with-open [w (java.io.PrintStream. "got-image-error.txt")]
          (.println w (api/get-stacktrace e)))))
  (api/text-page ""))

(defn got-page-route [request]
  (try
    (let [blob-map (bs/uploaded-blobs request)
          item-id (ffirst blob-map)
          arc-item (api/cache-get item-id)]
      (api/cache-delete! item-id)
      (when (ds/exists? ArcItem item-id)
        (ds/save! (assoc arc-item
                    :page (.getKeyString (second (first blob-map)))
                    :timestamp (api/timestamp)))))
   (catch Throwable e
      #_(with-open [w (java.io.PrintStream. "got-page-error.txt")]
          (.println w (api/get-stacktrace e)))))
    (api/text-page ""))

(defn archive-page-task [request]
  (let [item-id (slurp (:body request))]
    (try
      (let [arc-item (api/cache-get item-id)
            thread-id (:id (:oppost arc-item))
            resource (make-resource (:board arc-item))
            content (api/fetch-url (scrape/thread-url thread-id resource) :method :head)
            last-modified (or ((:headers content) "last-modified")
                              ((:headers content) "Last-Modified"))]
        (condp = (:response-code content)
          200 (when (not= last-modified (:last-modified arc-item))
                (api/cache-put! item-id (assoc arc-item
                                          :last-modified last-modified
                                          :timestamp (api/timestamp)))
                (let [content (scrape/fetch-for-archive thread-id resource)
                      stored-images (:images arc-item)
                      new-images (filter #(not (contains? stored-images (first %))) (:images content))]
                  (doseq [image new-images]
                    (try
                      (let [image-key (first image)
                            data (api/fetch-url (second image))]
                        (when (= (:response-code data) 200)
                          (bs/upload-hack {:field image-key :filename image-key :bytes (:content data)}
                                          (str "/callback/got-image?item-id=" item-id))))
                      (catch Throwable e
                        (.severe (Logger/getLogger "lenegro") (api/get-stacktrace e)))))
                  (bs/upload-hack {:field item-id :filename (:internal-id (:oppost arc-item))
                                   :bytes (.getBytes (:page-text content) "UTF-8")}
                                  "http://localhost:8080/callback/got-page")))
          404 (do (ds/save! (assoc arc-item :rate nil))
                  (api/cache-delete! item-id))
          (api/cache-delete! item-id)))
      (catch Throwable e
        (.severe (Logger/getLogger "lenegro") (api/get-stacktrace e))
        (api/cache-delete! item-id)
        #_(with-open [w (java.io.PrintStream. "error.txt")]
            (.println w (api/get-stacktrace e)))))
    (api/text-page "")))

(defn arc-serve-image [thread-id image-id request]
  (let [user-token (api/get-user-token)
        item-id (str user-token "-" thread-id)
        arc-item (ds/retrieve ArcItem item-id)
        image-id ((:images arc-item) image-id)]
    (if (and arc-item image-id)
      (bs/serve request image-id)
      (api/page-not-found))))

(defn arc-serve-page [thread-id request]
  (let [user-token (api/get-user-token)
        item-id (str user-token "-" thread-id)
        arc-item (ds/retrieve ArcItem item-id)
        page-id (:page arc-item)]
    (if (and arc-item page-id)
      (bs/serve request page-id)
      (api/page-not-found))))

(defn remove-arc-items [thread-ids]
  (let [user-token (api/get-user-token)]
    (doseq [th thread-ids]
      (let [item-id (str user-token "-" th)
            arc-item (ds/retrieve ArcItem item-id)]
        (doseq [[_ image-id] (:images arc-item)]
          (when image-id
            (bs/delete! image-id)))
        (when (:page arc-item)
          (bs/delete! (:page arc-item)))
        (ds/delete! arc-item)))))

(defn arc-1h-task-route []
  (when (not api/+restricted+)
    (doseq [arc-item (ds/query :kind ArcItem :filter (= :rate "1h"))]
      (let [item-id (:item-id arc-item)]
        (api/cache-put! item-id arc-item)
        (api/queue-add! "page-archiver" "/archive-page-task" item-id))))
  (api/text-page nil))

(defn service-task-route []
  (let [now (api/timestamp)
        day-ago (- now 86400)
        month-ago (- now 2592000)]
    ;; failed transactions
    (ds/delete! (ds/query :kind Scrap :filter (< :timestamp day-ago)))
    ;; forgotten threads
    (ds/delete! (ds/query :kind ForgottenThread :filter (< :timestamp month-ago)))
    ;; clean archive
    (remove-arc-items (map #(:internal-id (:oppost %))
                           (ds/query :kind ArcItem :filter (< :timestamp month-ago))))
    ;; archive threads
    (when (not api/+restricted+)
      (doseq [arc-item (ds/query :kind ArcItem :filter (= :rate "24h"))]
        (let [item-id (:item-id arc-item)]
          (api/cache-put! item-id arc-item)
          (api/queue-add! "page-archiver" "/archive-page-task" item-id))))

    (api/text-page "")))

(defn download-page-task [request]
  (try
    (let [{:keys [task-id page n]} (read-string (slurp (:body request)))
          resource (api/cache-get (str task-id "-resource"))]
      (try
        (let [doc-tree (scrape/fetch-page page resource)]
          (if doc-tree
            (let [threads (if (:img resource)
                            (scrape/scrape-images doc-tree resource)
                            (scrape/scrape-threads doc-tree resource))]
             (ds/save! (Scrap. task-id n (doall threads) (api/timestamp))))
            (let [error-headline (scrape/make-error-headline (str "Page not found: " page) n resource)]
              (ds/save! (Scrap. task-id n [error-headline] (api/timestamp)))))
          (api/cache-inc! (str task-id "-semaphore") -1))
        (catch Throwable e
          (let [error-headline (scrape/make-error-headline
                                (if true #_(api/in-debug-env?)
                                  (api/get-stacktrace e)
                                  (.getMessage e))
                                n resource)]
            (api/cache-inc! (str task-id "-semaphore") -1)
            (ds/save! (Scrap. task-id n [error-headline] (api/timestamp)))))))
      (catch Throwable e
        #_(with-open [w (java.io.PrintStream. "error.txt")]
          (.println w (api/get-stacktrace e)))))
      (api/text-page ""))

(defn setup-tasks [task-id n-pages resource]
  (let [settings (get-settings (api/get-user-token))]
    (api/cache-put! (str task-id "-semaphore") n-pages)
    (api/cache-put! (str task-id "-resource")
                    (assoc resource
                      :user-agent api/*user-agent*
                      :settings (dissoc settings :wf-title :wf-post :favorites)))
    (doseq [n (reverse (range n-pages))]
      (let [page (scrape/paginate n resource)]
        (api/queue-add! "page-fetcher" "/download-page-task"
                        (pr-str {:task-id task-id :page page :n n}))))))

(defn browser-route [request open]
  (when api/+restricted+
    (let [user (appengine-magic.services.user/current-user)
          identity (if user (.getEmail user) api/*remote-addr*)
          referer (or ((:headers request) "Referer") ((:headers request) "referer"))]
      (ds/save! (Visitor. identity referer (api/timestamp)))))
  (api/html-page (api/render (browser-template open))))

(defn go-route [request]
  (let [url (slurp (:body request))
        resource (make-resource url)]
    (try
      (condp = (:forum resource)
        watch-page (api/text-page
                    (make-resp :ok {:resource resource :task (:forum resource)
                                    :snapin (api/render (snapin-template :action "Unwatch"))}))
        archive-page (api/text-page
                      (make-resp :ok {:resource resource :task (:forum resource)
                                      :snapin (api/render (snapin-template :action "Remove"))}))
        science-page (api/text-page
                      (make-resp :ok {:resource resource :task (:forum resource)
                                      :snapin (api/render (snapin-template :simple true))}))

        "self.ref/stop" (when api/+standalone+
                          (try (eval (read-string "(appengine-magic.core/stop)"))
                               (Thread/sleep 2000)
                               (System/exit 0)
                               (catch Throwable e
                                 (Thread/sleep 2000)
                                 (System/exit 0))))
                                     
        "iichan.ru/to" (api/text-page (make-err-resp "Access denied" resource))
        "iichan.ru/rm" (api/text-page (make-err-resp "Access denied" resource))
        "iichan.ru/fr" (api/text-page (make-err-resp "Access denied" resource))
        
        (let [response (api/fetch-url (scrape/paginate 0 resource)
                                      :method (if (= (:trade resource) "dobrochan.ru")
                                                :get
                                                :head))]
          (if (< (:response-code response) 400)
            (let [task-id (api/get-uuid)]
              (setup-tasks task-id (:pages resource) resource)
              (api/text-page (make-resp :ok {:resource resource :task task-id
                                             :snapin
                                             (when (not (and (:chain resource) (not (:first resource))))
                                               (api/render (snapin-template :simple (:img resource)
                                                                            :static (:chain resource)
                                                                            :tab (:tab resource))))})))
            (throw (Exception.)))))
       (catch Throwable e
          (api/text-page (make-err-resp "Page not found" resource))))))

(defn refresh-route [request]
  (let [resource (read-string (slurp (:body request)))]
    (condp = (:forum resource)
      watch-page (api/text-page ; wants refactoring
                  (make-resp :ok {:resource resource :task (:forum resource)}))
      science-page (api/text-page
                    (make-resp :ok {:resource resource :task (:forum resource)}))
      archive-page (api/text-page 
                    (make-resp :ok {:resource resource :task (:forum resource)}))
      (let [task-id (api/get-uuid)]
        (setup-tasks task-id (:refresh resource) resource)
        (api/text-page (make-resp :ok {:resource resource :task task-id}))))))

(defn tab-route [url request open]
    (api/html-page (api/render (tab-template url open))))

(defn get-scrap-route [request]
  (let [task-id (slurp (:body request))]
    (condp = task-id
      watch-page (let [[payload shown] (format-watch-stream)]
                   (api/text-page (make-resp :ok {:threads payload :stats {:shown shown}})))
      archive-page (let [[payload shown] (format-archive-stream)]
                   (api/text-page (make-resp :ok {:threads payload :stats {:shown shown}})))
      science-page (api/text-page (make-resp :ok {:threads (format-sicence-stream)
                                                  :stats {:shown 1}}))
      
      (let [semaphore-id (str task-id "-semaphore")
            resource-id (str task-id "-resource")
            semaphore (api/cache-get semaphore-id)
            resource (api/cache-get resource-id)
            oldest-first? (:rev resource)]
        (if (> semaphore 0)
          (api/text-page (make-resp :pending semaphore))
          (let [pages (ds/query :kind Scrap filter (= :task-id task-id)
                                :sort [[:n (if oldest-first? :desc :asc)]])
                threads (apply concat (map #(if oldest-first?
                                              (reverse (:threads %))
                                              (:threads %))
                                           pages))
                threads (api/distinct-by :internal-id threads)
                [threads stats] (if (:img resource)
                                  [threads {:images true :shown (count threads)}]
                                  (filter-threads threads resource))]
            (ds/delete! pages)
            (api/cache-delete! semaphore-id)
            (api/cache-delete! resource-id)
            (api/text-page (make-resp :ok {:threads (format-headlines threads resource)
                                           :stats (assoc stats :nocheck true)}))))))))

(defn get-thread-images-route [resource thread-id]
  (let [resource (read-string resource)]
    (let [content (api/fetch-url (scrape/thread-url thread-id resource))
          doc-tree (api/make-enlive-resource content)]
      (if doc-tree
        (let [images (scrape/scrape-thread-images doc-tree resource)
              images (if (:rev resource) (reverse images) images)
              images (api/distinct-by :internal-id images)]
          (api/html-page (format-headlines images resource)))))))
    
(defn forget-route [request]
  (let [thread-ids (read-string (slurp (:body request)))
        user-token (api/get-user-token)]
    (doseq [th thread-ids]
      (let [prefix (.substring th 0 (inc (.lastIndexOf th "-")))]
        (ds/save! (ForgottenThread. th prefix user-token (api/timestamp)))))
    (api/text-page nil)))

(defn watch-thread-route [request]
  (try
    (let [{:keys [thread-id resource]} (read-string (slurp (:body request)))
          resource (if (string? resource)
                     (make-resource resource)
                     resource)
          thread-url (scrape/thread-url thread-id resource)
          doc-tree (scrape/fetch-page thread-url resource)]
      (if doc-tree
        (let [oppost (first (scrape/scrape-threads doc-tree (assoc resource :replies 0)))]
          (if oppost
            (let [user-token (api/get-user-token)
                  settings (get-settings user-token)
                  internal-id (str (:prefix resource) thread-id)
                  item-id (str user-token "-" internal-id)
                  transform-img-arc (fn [url]
                                      (let [tail (re-find #"[^/]+/[^/]+$" url)]
                                        (str "/archive/" internal-id "/" (str/replace tail "/" "-"))))]
              (ds/save! (WatchItem. item-id (:prefix resource) (:forum resource) user-token oppost 
                                    (:omitted oppost) (:last-id oppost) (api/timestamp)))
              (when (not (:archive-disable settings))
                (when (not (ds/exists? ArcItem item-id))
                  (let [oppost (assoc oppost
                                 :link (str "/archive/" internal-id)
                                 :image (transform-img-arc (:image oppost))
                                 :thumb (transform-img-arc (:thumb oppost)))
                        arc-item (ArcItem. item-id  (:forum resource) user-token
                                           oppost nil nil "24h" nil (api/timestamp))]
                    (ds/save! arc-item)
                    (api/cache-put! item-id arc-item)
                    (api/queue-add! "page-archiver" "/archive-page-task" item-id))))
              (api/text-page (make-resp :ok oppost)))
            (api/text-page (make-resp :error "Thread not found"))))
        (api/text-page (make-resp :error "Thread not found"))))
    (catch Throwable e
      (api/text-page (make-resp :error "Error")))))

(defn unwatch-threads-route [request]
  (let [threads (read-string (slurp (:body request)))
        user-token (api/get-user-token)]
    (doseq [thread threads]
      (let [watch-item (ds/retrieve WatchItem (str user-token "-" thread))]
        (when watch-item
          (ds/delete! watch-item))))
    (api/text-page (make-resp :ok nil))))

(defn lazy-get-watch-route [request]
  (try
    (let [{:keys [thread-id resource]} (read-string (slurp (:body request)))
          resource (if (string? resource)
                     (make-resource resource)
                     resource)
          user-token (api/get-user-token)
          watch-item (ds/retrieve WatchItem (str user-token "-" (:prefix resource) thread-id))
          thread-url (scrape/thread-url thread-id resource)
          doc-tree (scrape/fetch-page thread-url resource)]
      (if (and doc-tree watch-item)
        (let [thread (first (scrape/scrape-threads doc-tree resource))]
          (if thread
            (let [settings (get-settings user-token)
                  post-delta (- (:omitted thread) (:delta-count watch-item))
                  replies-html (when (> (:replies resource) 0)
                                 (render-replies thread settings resource))]
              (when (not= 0 post-delta)
                (ds/save! (assoc watch-item
                            :delta-count (:omitted thread)
                            :last-id (:last-id thread))))
              (api/text-page (make-resp :ok {:post-delta post-delta
                                             :post-count (:omitted thread)
                                             :replies replies-html})))
            (api/text-page (make-resp :error "Thread not found"))))
        (api/text-page (make-resp :error "Thread not found"))))
    (catch Throwable e
      (api/text-page (make-resp :error "Thread not found")))))

(defn get-thread-posts-route [request]
  (try
    (let [{:keys [thread-id post-count resource]} (read-string (slurp (:body request)))
          resource (if (string? resource)
                     (make-resource resource)
                     resource)
          thread-url (scrape/thread-url thread-id resource)
          doc-tree (scrape/fetch-page thread-url resource)]
      (if doc-tree
        (let [thread (first (scrape/scrape-threads doc-tree (assoc resource :replies post-count)))]
          (if thread
            (let [user-token (api/get-user-token)
                  settings (get-settings user-token)
                  replies-html (render-replies thread settings resource)]
              (api/text-page (make-resp :ok {:replies replies-html})))
            (api/text-page (make-resp :error "Thread not found"))))))
    (catch Throwable e
      (api/text-page (make-resp :error "Thread not found")))))

(defn get-popup-post-route [request]
  (try
    (let [url (str/split (slurp (:body request)) #"#")
          thread-url (first url)
          post (when (seq (second url)) (re-find #"\d+" (second url)))
          thread-key (str "popup-cache-" thread-url)
          resource (make-resource thread-url)                    
          thread (or (when-let [thread (api/cache-get thread-key)]
                       (if post
                         (when (or (= (:id thread) post) (some #(= (:id %) post) (:children thread)))
                           thread)
                         thread))
                     (let [doc-tree (scrape/fetch-page thread-url resource)]
                       (when doc-tree
                         (when-let [thread (first (scrape/scrape-threads doc-tree (assoc resource :replies -1)))]
                           (api/cache-put! thread-key thread :expire-sec 600)
                           thread))))]
      (if thread
        (let [user-token (api/get-user-token)
              settings (get-settings user-token)
              thread (if post
                       (when-let [child (some #(when (= (:id %) post) %) (:children thread))]
                         (assoc thread :children [child]))
                       (struct-map scrape/headline :id (:id thread) :children [(assoc thread :refs nil)]))]
          (if (seq (:children thread))
            (api/text-page (make-resp :ok (render-replies thread settings resource)))
            (api/text-page (make-resp :error "Thread not found"))))
        (api/text-page (make-resp :error "Thread not found"))))
    (catch Throwable e
        (api/text-page (make-resp :error "Thread not found")))))

(defn archive-remove-route [request]
  (let [thread-ids (read-string (slurp (:body request)))]
    (remove-arc-items thread-ids))
  (api/text-page nil))

(defn set-arc-rate [request]
  (let [rate (read-string (slurp (:body request)))
        user-token (api/get-user-token)]
    (let [item-id (str user-token "-" (:thread-id rate))
          arc-item (ds/retrieve ArcItem item-id)]
      (if (:rate rate)
        (ds/save!
         (assoc arc-item
           :rate (condp = (:rate rate)
                 "1h" "1h"
                 "24h" "24h"
                 "never" nil)))
        (do
          (api/cache-put! item-id (ds/retrieve ArcItem item-id))
          (api/queue-add! "page-archiver" "/archive-page-task" item-id)))))
  (api/text-page nil))

(defn get-visitors-route []
  (let [visitors (ds/query :kind Visitor)]
    (api/text-page
     (str (apply str (interpose "\n" (map #(str (:identity %) " "
                                                (:refere %) " "
                                                (:timestamp %) " ")
                                          visitors)))))))
(defn del-stats-route []
  (ds/delete! (ds/query :kind Visitor))
  (api/text-page nil))
