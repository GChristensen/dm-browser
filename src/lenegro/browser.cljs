(ns browser
  (:require
   [clojure.string :as str]
   [cljs.reader :as reader]
   [goog.net.XhrIo :as xhr]
   [goog.dom :as dom]
   [goog.math :as math]
   [goog.object :as goog-object]
   [goog.events :as events]
   [goog.style :as style]
   [goog.array :as array]
   [goog.Timer :as timer]
   [goog.ui.Dialog :as dialog]
   [goog.ui.Tooltip :as tooltip]
   [goog.ui.TabBar :as tab-bar]
   [goog.ui.Tab :as tab]
   [goog.ui.Popup :as popup]
   [goog.ui.PopupMenu :as popup-menu]
   [goog.ui.SubMenu :as submenu]
   [goog.ui.MenuItem :as menu-item]
   [goog.ui.MenuSeparator :as menu-sep]
   [goog.positioning :as pos]
   [goog.ui.Button :as button]
   [goog.ui.FlatButtonRenderer :as flat-button-rndr]
   [goog.structs.Map :as goog-map]))

;; TODO: refactoring is needed

(def ^:const watch-page "self.ref/watch")
(def ^:const archive-page "self.ref/archive")
(def ^:const science-page "self.ref/sing")

(def ^:const blank-tab-lbl "Blank Tab")
(def ^:const forget-trigger "<a class=\"forget-trigger\" onclick=\"browser.forget_thread(this)\"  
			                 title=\"Forget thread\">&#x00d7;</a>")
(def ^:const empty-set "<div class=\"prohibit\">&#x20e0;</div>")
(def ^:const service-loading "<img src=\"/images/loading-bar.gif\"/>")
(def ^:const loading-post "<div class=\"service-pane\"><img src=\"/images/loading-bar.gif\"/> Loading...</div>")

(defn  delta-posts [n]
  (str "<span class=\"delta-posts\" title=\"Delta posts from the last visit\">&#x2206; [" n "]</span>"))

(def trhead-tabs nil)
(def favorites-menu nil)
(def iv-menu nil)
(def iv-anchor nil)
(def arc-menu nil)
(def arc-anchor nil)
(def popups {})
(def settings nil)

;; utils ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn assert-open []
  (when (:open settings)
    (js/__alert "Authorization required.")
    (throw "authorization required")))

(defn post-data [url data callback]
  (let [headers (goog.structs.Map.)]
    (.set headers "Content-Type" "text/plain")
    (xhr/send url callback "POST" data headers)))

(defn child-by-class [root class-name]
  (dom/findNode root (fn [node]
                       (when-let [node-classname (.-className node)]
                         (>= (.indexOf node-classname class-name) 0)))))

(defn sibling-by-class [node class-name]
  (loop [sibling (.-previousSibling node)]
    (when sibling
      (let [sibling-classname (.-className sibling)]
        (if (and sibling sibling-classname (>= (.indexOf sibling-classname class-name) 0))
          sibling
          (recur (.-previousSibling sibling)))))))

(defn parent-by-class [node class-name]
  (loop [parent (.-parentNode node)]
    (when parent
      (let [parent-classname (.-className parent)]
        (if (and parent parent-classname (>= (.indexOf parent-classname class-name) 0))
          parent
          (recur (.-parentNode parent)))))))

(defn parent-by-id [node id]
  (loop [parent (.-parentNode node)]
    (when parent
      (let [parent-id (.-id parent)]
        (if (and parent parent-id (>= (.indexOf parent-id id) 0))
          parent
          (recur (.-parentNode parent)))))))

(defn child-by-id [root id]
  (dom/findNode root #(= (.-id %) id)))

(defn parent-tab [leaf]
  (let [tab-page (parent-by-id leaf "tab-page")
        tab-vec (for [n (range (. thread-tabs (getChildCount)))]
                  (.getChildAt thread-tabs n))]
    (loop [tabs tab-vec]
      (let [tab (first tabs)]
        (when tab
          (if (= (.-tab_page_ tab) tab-page)
            tab
            (recur (next tabs))))))))    

(defn show-output [content]
  (let [output (dom/getElement "output")]
    (set! (.-innerHTML output) content)))

(defn show-loading [show]
  (let  [busy-indicator (dom/getElement "loading")]   
    (if show
      (set! (.-src busy-indicator) "/images/loading-darkbg.gif")
      (set! (.-src busy-indicator) "/images/empty.png"))))

(defn show-loading-in [root show]
  (let  [busy-indicator (child-by-id root "busy-indicator")]   
    (if show
      (set! (.-src busy-indicator) "/images/loading.gif")
      (set! (.-src busy-indicator) "/images/empty.png"))))

(defn refine-url [resource]
  (str (:trade resource) "/" (:board resource)
       ":" (:pages resource) "p:"
       (:refresh resource) "r:"
       (:replies resource) "a"
       (when (:hdlns resource) ":hdlns")
       (when (:txt resource) ":txt")
       (when (:img resource) ":img")
       (when (:rev resource) ":rev")
       (when (:wtch resource) ":wtch")
       (when (:prox resource) ":prox")))

(defn format-stats [stats resource]
  (let [shown (+ (:shown stats) (:watch stats))
        additional (- (:watch-total stats) (:watch stats))
        filtered (:filtered stats)
        forgotten (:forgotten stats)
        hidden (+ filtered forgotten)]
    (str (when (not (or (:chain resource) (:img resource) (:nocheck stats)))
           "<input class=\"button-check\" id=\"mass-check\" type=\"checkbox\" 
           onclick=\"browser.check_threads(this.checked)\"/>&nbsp;")
         (if (string? stats)
           stats
           (str "<a target=\"_blank\" class=\"board-link\" href=\"" (:target resource) "\">"
                (:trade resource) "/" (:board resource) "</a>&nbsp;"
                (if (:img resource) "images" "threads")
                " [displayed: " shown (when (> additional 0) (str "+" additional))
                (when (> hidden 0)
                  (str ", hidden: " hidden
                       (when (not :mobile settings)
                         (str " [filtered: " filtered ", forgotten: " forgotten "]"))))
                "]")))))

(defn inline-dialog [title target]
  (let [dialog (goog.ui.Dialog.)
        close-elt (. dialog (getTitleCloseElement))]
    (if (vector? title)
      (let [title-elt (. dialog (getTitleTextElement))]
        (set! (.-innerHTML title-elt) (first title)))
      (.setTitle dialog title))
    (.setContent dialog (str "<iframe src=\"" target "\"/>")
    (.setButtonSet dialog nil)
    (set! (.-innerHTML close-elt) "Close")
    (set! (.-className close-elt) "modal-dialog-title-close goog-flat-button")
    (.setVisible dialog true))
    false))

;; inline viewing ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn inline-view-link [link]
  (let [title (str "<a class=\"title-link\" target=\"_blank\" href=\"" link "\">" link "</a>")]    
    (inline-dialog [title] link)))

(defn ^:export inline-view-thread [a]
  (let [link-elt (or (child-by-class (.-parentNode a) "thread-no")
                     (child-by-class (.-parentNode a) "reply-no"))
        thread-link (.-href link-elt)]
    (inline-view-link thread-link)))

(defn ^:export inline-view-reflink [a]
    (inline-view-link (.-href a)))

(defn ^:export show-thread-images [a]
  (let [tab (. thread-tabs (getSelectedTab))
        thread-no (child-by-class (.-parentNode a) "thread-no")
        thread-link (.-href thread-no)
        resource (assoc (.-web_page_ tab) :inline true)
        iframe-link (str "/get-thread-images?resource=" (js/__encodeURI (pr-str resource))
                         "&thread-id=" (.-innerHTML thread-no))
        title (str "<a class=\"title-link\" target=\"_blank\" href=\"" thread-link "\">" thread-link "</a>")]    
    (inline-dialog [title] iframe-link :html-title true)))

;; popups ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn inside? [box point]
  (and 
   (> (.-x point) (.-left box))
   (< (.-x point) (+ (.-left box) (.-width box)))
   (> (.-y point) (.-top box))
   (< (.-y point) (+ (.-top box) (.-height box)))))

(defn hide-popup [e post]
  (let [popup (popups post)
        popup-elt (dom/getElement (str "popup-" post))
        out (dom/getElement "output")]
    (when (and popup popup-elt)
      (let [box (style/getBounds popup-elt)
            point (goog.math.Coordinate. (.-clientX e) (.-clientY e))]
        (when (not (inside? box point))
          (.setVisible popup false))))))

(defn dismiss-popup [popup]
  (let [post (.-post_ popup)
        popup-elt (dom/getElement (str "popup-" post))]
    (when popup-elt
      (events/unlisten popup-elt goog.events.EventType/MOUSEOUT)
      (.removeChild (.-body js/document) popup-elt))
    (set! popups (dissoc popups post))))

(defn quadrant-dispatch [x y lt rt lb rb]
  (let [viewport (style/getBounds (style/getClientViewportElement))
        h-sec (/ (.-width viewport) 2)
        v-sec (/ (.-height viewport) 2)]
    (cond
     (and (< x h-sec) (< y v-sec)) lt
     (and (> x h-sec) (< y v-sec)) rt
     (and (< x h-sec) (> y v-sec)) lb
     (and (> x h-sec) (> y v-sec)) rb)))

(def failed-node nil)
(def loading-popup? nil)
(defn ^:export show-popup [e post show?]
  (let [make-popup (fn [node]
                     (let  [post (if node post "loading")
                            popup-elt
                            (dom/createDom "div" (.-strobj {"class" "popup",
                                                           "id" (str "popup-" post),
                                                           "innerHTML" (if node "<div/>" loading-post)}))]
                       (.appendChild (.-body js/document) popup-elt)
                       (when node
                         (let [reply-elt (.cloneNode node true)]
                           (.removeChild popup-elt (.-firstChild popup-elt))
                           (.appendChild popup-elt reply-elt)))
                       (let [popup (goog.ui.Popup. popup-elt)
                             corner (quadrant-dispatch (.-clientX e) (.-clientY e)
                                                       goog.positioning.Corner/TOP_LEFT
                                                       goog.positioning.Corner/TOP_RIGHT
                                                       goog.positioning.Corner/BOTTOM_LEFT
                                                       goog.positioning.Corner/BOTTOM_RIGHT)
                             dd (quadrant-dispatch (.-clientX e) (.-clientY e)
                                                   [-5 -5] [5 -5] [-5 5] [5 5])]
                         (set! popups (assoc popups post popup))
                         (set! (.-post_ popup) post)
                         (.setPinnedCorner popup corner)
                         (.setPosition popup (goog.positioning.ClientPosition.
                                              (+ (.-clientX e) (first dd))
                                              (+ (.-clientY e) (second dd))))
                         (events/listen popup
                                        goog.ui.Component.EventType/HIDE
                                        #(dismiss-popup (.-currentTarget %)))
                         (events/listen popup-elt
                                        goog.events.EventType/MOUSEOUT
                                        #(hide-popup % post))
                         (.setVisible popup true)
                         popup)))
        do-show (fn [node]
                  (let [popup (popups post)]
                    (when popup
                      (dismiss-popup popup))
                    (let [popup (make-popup node)]
                      (when (not node)
                        (set! loading-popup? true)
                        (post-data "/get-popup-post" (.-href (.-target e))
                                   (fn [xe]
                                     (let [xhr (.-target xe)
                                           {:keys [status body]} (reader/read-string
                                                                  (. xhr (getResponseText)))]
                                       (if (= status :ok)
                                         (let [node (dom/createDom "div" (.-strobj {"innerHTML" body}))]
                                           (dismiss-popup popup)
                                           (make-popup (child-by-class node "post-container")))
                                         (do
                                           (set! failed-node post)
                                           (dismiss-popup popup)))
                                       (set! loading-popup? nil))))))))]
    (when (not loading-popup?)
    (if (and (not= failed-node post) show?)
      (let [nodes (dom/getElementsByClass "reply-no" (.-tab_page_ (. thread-tabs (getSelectedTab))))
            node (loop [n (dec (.-length nodes))]
                   (when (>= n 0)
                     (let [node (aget nodes n)]
                       (if (= (.-textContent node) post)
                         node
                         (recur (dec n))))))]
        (do-show (when node (parent-by-class node "post-container"))))
      (do
        (set! failed-node nil)
        (hide-popup e post))))))

;; thread control handlers ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn ^:export populate-buttons [target]
;;   (let [expand-btns (dom/getElementsByClass "expand-thread-btn" (dom/getElement "thread-headlines"))]
;;     (array/forEach expand-btns
;;                    (fn [btn]
;;                      (goog.ui/decorate btn)
;;                      (set! (.-onclick btn)
;;                            (.-onclick (.-parentNode btn)))))))

(defn ^:export watch-thread [target]
  (assert-open)
  (let [tab (. thread-tabs (getSelectedTab))
        thread-line (parent-by-class target "thread-line")
        thread-oppost (child-by-class thread-line "thread-oppost")
        resource (.-web_page_ tab)
        resource  (if (or (:chain resource) (= (:trade resource) "self.ref"))
                   (let [thread-group (child-by-class (sibling-by-class thread-line "group-line")
                                                      "thread-group")]
                     (str (.-innerHTML (if (:chain resource)
                                         (child-by-class thread-group "board-link")
                                         thread-group))
                          ":hdlns"))
                   resource)
        service-pane (child-by-class thread-line "service-pane")
        thread-no (child-by-class thread-line "thread-no")
        thread-id (.-textContent thread-no)]
    (set! (.-innerHTML service-pane) service-loading)
    (if (or (= (.getAttribute target "onwatch") "onwatch") (.-onwatch target))
      (do
        (post-data "/unwatch-threads" (pr-str [(.-id thread-oppost)])
                   (fn [e]
                     (let [xhr (.-target e)
                           {:keys [status body]} (reader/read-string (. xhr (getResponseText)))]
                       (if (= status :ok)
                         (do                         ;"&#x2329;<span class=\"italic\">&#x03c9;</span>&#x232a;"
                           (set! (.-innerHTML target) "[~]")
                           (set! (.-className target) "watch-trigger-disabled")
                           (set! (.-title target) "Watch thread")
                           (if (= (:trade (.-web_page_ tab)) "self.ref")
                             (set! (.-innerHTML service-pane) "")
                             (set! (.-innerHTML service-pane) forget-trigger))
                           (.removeAttribute target "onwatch")
                           (set! (.-onwatch target) nil))
                         (set! (.-innerHTML service-pane) empty-set))))))
      (do
        (post-data "/watch-thread" (pr-str {:thread-id thread-id :resource resource})
                   (fn [e]
                     (let [xhr (.-target e)
                           {:keys [status body]} (reader/read-string (. xhr (getResponseText)))]
                       (if (= status :ok)
                         (do                         ;"&#x2329;<span class=\"italic\">&#x03c5;</span>&#x232a;"
                           (set! (.-innerHTML target) "[&#x2012;]")
                           (set! (.-className target) "watch-trigger-enabled")
                           (set! (.-title target) "Unwatch thread")
                           (set! (.-innerHTML service-pane) (delta-posts 0))
                           (set! (.-onwatch target) true))
                         (set! (.-innerHTML service-pane) empty-set)))))))))

(defn ^:export lazy-get-watch [target]
  (let [tab (parent-tab target)                   
        thread-line (parent-by-class target "thread-line")
        resource (.-web_page_ tab)
        resource (if (or (:chain resource) (= (:trade resource) "self.ref"))
                   (let [thread-group (child-by-class (sibling-by-class thread-line "group-line")
                                                      "thread-group")]
                     (str (.-innerHTML (if (:chain resource)
                                         (child-by-class thread-group "board-link")
                                         thread-group))
                          ":hdlns"))
                   resource)
        service-pane (child-by-class thread-line "service-pane")
        thread-no (child-by-class thread-line "thread-no")
        thread-id (.-textContent thread-no)]
    (set! (.-innerHTML service-pane) service-loading)
    (post-data "/lazy-get-watch" (pr-str {:thread-id thread-id :resource resource})
               (fn [e]
                 (let [xhr (.-target e)
                       {:keys [status body]} (reader/read-string (. xhr (getResponseText)))]
                   (if (= status :ok)
                     (let [post-count (child-by-class thread-line "post-count")
                           oppost (child-by-class thread-line "thread-oppost")]
                       (set! (.-innerHTML service-pane) (delta-posts (:post-delta body)))
                       (set! (.-innerHTML post-count) (str "[" (:post-count body) "]"))
                       (when (:replies body)
                         (let [expand-trigger (child-by-class thread-line "expand-trigger")
                               existing-replies (child-by-class oppost "replies")
                               replies-div (.-firstChild (dom/createDom "div" (.-strobj {"innerHTML"
                                                                                         (:replies body)})))]
                           (.removeChild oppost existing-replies)
                           (.appendChild oppost replies-div)
                           (if (.-expanded_ expand-trigger)
                             (set! (.-display (.-style replies-div)) "block")))))
                     (set! (.-innerHTML service-pane) empty-set)))))))

(defn ^:export iv-load-posts [target posts]
  (let [tab (. thread-tabs (getSelectedTab))
        resource (.-web_page_ tab)
        thread-line (parent-by-class target "thread-line")
        posts (if (= posts -2) ; delta
                (let [delta-posts (child-by-class thread-line "delta-posts")]
                  (js/__parseInt (aget (.match (.-textContent delta-posts) (js/RegExp "\\d+")) 0)))
                posts)
        send-resource (if (:chain resource)
                        (let [thread-group (child-by-class (sibling-by-class thread-line "group-line")
                                                           "thread-group")]
                          (.-innerHTML (child-by-class thread-group "board-link")))
                        resource)
        service-pane (child-by-class thread-line "service-pane")
        service-html (.-innerHTML service-pane)
        thread-no (child-by-class thread-line "thread-no")
        thread-id (.-textContent thread-no)]
    (set! (.-innerHTML service-pane) service-loading)
    (post-data "/get-thread-posts" (pr-str {:thread-id thread-id :post-count posts :resource send-resource})
               (fn [e]
                 (let [xhr (.-target e)
                       {:keys [status body]} (reader/read-string (. xhr (getResponseText)))]
                   (if (= status :ok)
                     (when (:replies body)
                       (let [oppost (child-by-class thread-line "thread-oppost")
                             existing-replies (child-by-class oppost "replies")
                             replies-div (.-firstChild (dom/createDom "div" (.-strobj {"innerHTML"
                                                                                     (:replies body)})))]
                         (.removeChild oppost existing-replies)
                         (.appendChild oppost replies-div)
                         (set! (.-innerHTML service-pane) service-html)
                         (expand-thread (.-id oppost) true)))
                     (set! (.-innerHTML service-pane) empty-set)))))))

(defn ^:export iv-show-menu [target]
  (set! iv-anchor target)
  (let [show-delta (.getChildAt iv-menu 1)
        thread-line (parent-by-class iv-anchor "thread-line")
        delta-posts (child-by-class thread-line "delta-posts")]
    (if delta-posts
      (let [resource (.-web_page_ (. thread-tabs (getSelectedTab)))
            posts (.match (.-textContent delta-posts) (js/RegExp "-?\\d+"))
            posts (when posts (js/__parseInt (aget posts 0)))]
        (if (and posts (> posts (:replies resource)))
          (.setEnabled show-delta true)
          (.setEnabled show-delta false)))
      (.setEnabled show-delta false))
    (.showAtElement iv-menu target goog.positioning.Corner/BOTTOM_START)))

(defn ^:export arc-show-menu [target]
  (set! arc-anchor target)
  (.showAtElement arc-menu target goog.positioning.Corner/BOTTOM_START))
                      
(defn ^:export check-threads [check]
  (let [threads (dom/getElementsByClass "thread-line" (dom/getElement "thread-headlines"))]
    (array/forEach threads
                   (fn [th]
                     (let [thread-check (child-by-class th "thread-check")]
                       (when thread-check
                         (set! (.-checked thread-check) check)))))))

(defn remove-threads [target]
  (let [action (condp = (.-innerHTML target)
                 "Forget" ["forgotten" "/forget"]
                 "Unwatch" ["unwatched" "/unwatch-threads"]
                 "Remove" ["removed" "/archive-remove"])]
    (when (js/__confirm (str "All checked threads will be " (first action) "."))
      (let [threads (dom/getElementsByClass "thread-line" (dom/getElement "thread-headlines"))
            checked-threads (array/filter threads
                                          (fn [th]
                                            (let [thread-check (child-by-class th "thread-check")]
                                              (.-checked thread-check))))]
        (post-data (second action)
                   (pr-str (loop [n (dec (.-length checked-threads)) result []]
                             (if (>= n 0)
                               (let [thread-line (aget checked-threads n)
                                     thread-oppost (child-by-class thread-line "thread-oppost")
                                     resource (.getAttribute thread-oppost "resource")
                                     thread-id (.-id thread-oppost)]
                                 (.removeChild (.-parentNode thread-line) thread-line)
                                 (recur (dec n) (conj result (if resource
                                                               {:id thread-id :resource resource}
                                                               thread-id))))
                               result))))))))

(defn ^:export forget-thread [target]
  (assert-open)
  (let [thread-line (parent-by-class target "thread-line")
        op-post (child-by-class thread-line "thread-oppost")]
    (post-data "/forget" (pr-str [(.-id op-post)]) nil)
    (set! (.-backgroundColor (.-style thread-line)) "#757575")
    (timer/callOnce #(.removeChild (.-parentNode thread-line) thread-line) 200)))

(defn ^:export remove-thread [target]
  (let [thread-line (parent-by-class target "thread-line")
        op-post (child-by-class thread-line "thread-oppost")]
    (post-data "/archive-remove" (pr-str [(.-id op-post)]) nil)
    (set! (.-backgroundColor (.-style thread-line)) "#757575")
    (timer/callOnce #(.removeChild (.-parentNode thread-line) thread-line) 200)))

(defn ^:export expand-thread [post-id expand?]
  (let [post (dom/getElement post-id)
        thread-headlines (dom/getElement "thread-headlines")
        expand-trigger (child-by-class (.-parentNode post) "expand-trigger")
        post-text (child-by-class post "oppost-text")
        replies (child-by-class post "replies")]
    (cond (or (false? expand?) (and (= expand? js/undefined) (.-expanded_ expand-trigger)))
          (do
            (set! (.-maxHeight (.-style post-text)) "65px")
            (set! (.-display (.-style replies)) "none")
            (set! (.-innerHTML expand-trigger) "&raquo;")
            (set! (.-expanded_ expand-trigger) false)
            (let [vp-offset (- (.-y (style/getClientPosition post))
                               (.-y (style/getClientPosition thread-headlines)))]
              (when (< vp-offset 0)
                (. post (scrollIntoView)))))
          (or (true? expand?) (and (= expand? js/undefined) (not (.-expanded_ expand-trigger))))
          (let [service-pane (child-by-class (.-parentNode post) "service-pane")]
                (when (> (.indexOf (.-innerHTML service-pane) "[?]") 0)
                  (lazy-get-watch post))
                (set! (.-maxHeight (.-style post-text)) "none")
                (set! (.-display (.-style replies)) "block")
                (set! (.-innerHTML expand-trigger) "&laquo;")
                (set! (.-expanded_ expand-trigger) true))))
  false)

;; favorites ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn fill-favorites [favorites]
  (if (:open settings)
    (.addChild favorites-menu (goog.ui.MenuItem. "About Dark Matter") true)
    (do (.addChild favorites-menu (goog.ui.MenuItem. "Watch") true)
        (.addChild favorites-menu (goog.ui.MenuItem. "Archive") true)
        (.addChild favorites-menu (goog.ui.MenuItem. "Mobile") true)
        (when (:restricted settings)
          (.addChild favorites-menu (goog.ui.MenuItem. "About Dark Matter") true))))
  (.addChild favorites-menu (goog.ui.MenuSeparator.) true)
  (doseq [fi favorites]
    (when (and fi (not= fi ""))
      (if (string? fi)
        (.addChild favorites-menu (goog.ui.MenuItem. fi) true)
        (let [submenu (goog.ui.SubMenu. (:menu fi))]
          (.addChild favorites-menu submenu true)
          (doseq [mi (:items fi)]
            (.addItem submenu (goog.ui.MenuItem. mi))))))))

(defn ^:export reset-favorites [favorites]
  (.removeChildren favorites-menu true)
  (fill-favorites favorites))

(defn favorites-menu-handler [e]
  (let [item (.-target e)
        caption (. item (getCaption))]
    (show-loading true)
    (condp = caption
      "About Dark Matter" (set! (.-location js/window) "http://sites.google.com/site/dmbrowser/")
      "Watch" (post-data "/lets-go" watch-page go-btn-callback)
      "Archive" (post-data "/lets-go" "self.ref/archive" go-btn-callback)
      "Mobile" (set! (.-location js/window) "/m")
      (do-go caption))))

;; tab handlers ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn select-tab [e]
  (let [content (dom/getElement "thread-tabs_content")
        thread-list (.-firstChild content)
        headlines (child-by-id content "thread-headlines")
        tab (.-target e)
        tab-page (.-tab_page_ tab)]
    (when tab-page
      (let [new-scroll-top (or (.-scroll_top_ tab-page) 0)
            new-thread-list (child-by-id tab-page "thread-headlines")]
        (set! (.-scroll_top_ thread-list) (.-scrollTop headlines))
        (dom/removeChildren content)
        (dom/appendChild content tab-page)
        (set! (.-scrollTop new-thread-list) new-scroll-top)))))

;; snapin buttons ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn refresh-btn-callback [e]
  (let [xhr (.-target e)
        {:keys [status body]} (reader/read-string (. xhr (getResponseText)))
        tab-id (:uuid (:resource body))]
    (doseq [n (range (. thread-tabs (getChildCount)))]
      (let [tab (.getChildAt thread-tabs n)]
        (when (= tab-id (:uuid (.-web_page_ tab)))
          (get-thread-stream (:task body) tab) 1000)))))    

(defn refresh-btn-handler [e]
  (let [tab (. thread-tabs (getSelectedTab))
        content (dom/getElement "thread-tabs_content")]
    (when (not (.-error_ tab))
      (show-loading-in content true)

      (set! (.-innerHTML (child-by-id (.-tab_page_ tab) "thread-list-caption"))
            (str "Processing " (:refresh (.-web_page_ tab))
                 (if (not= (:refresh (.-web_page_ tab)) 1)
                   " pages..."
                   " page...")))

      (post-data "/refresh" (pr-str (.-web_page_ tab)) refresh-btn-callback))))

(defn ^:export expand-btn-handler [e]
  (let [expand-btn (dom/getElement "expand-btn")
        tab-page (dom/getElement "tab-page")
        expand? (if (= (.-textContent expand-btn) "Expand all") true false)]
    (if (= (.-textContent expand-btn) "Expand all")
      (do
        (set! (.-textContent expand-btn) "Collapse all")
        (set! (.-title expand-btn) "Collapse all threads"))
      (do
        (set! (.-textContent expand-btn) "Expand all")
        (set! (.-title expand-btn) "Expand all threads")))
    (array/forEach (dom/getElementsByClass "thread-oppost" tab-page)
                   #(expand-thread (.-id %) expand?))))

(defn expand-watch-btn-handler [e]
  (let [expand-btn (dom/getElement "expand-watch-btn")
        tab-page (dom/getElement "tab-page")
        expand? (if (= (.-textContent expand-btn) "Expand wtch.") true false)]
    (if (= (.-textContent expand-btn) "Expand wtch.")
      (do
        (set! (.-textContent expand-btn) "Collapse wtch.")
        (set! (.-title expand-btn) "Collapse all watch items"))
      (do
        (set! (.-textContent expand-btn) "Expand wtch.")
        (set! (.-title expand-btn) "Expand all watch items")))
    (array/forEach (dom/getElementsByClass "onwatch" tab-page)
                    #(when (> (.-length (.-id %)) 0) (expand-thread (.-id %) expand?)))))

(defn go-again-btn-handler [e]
  (let [tab (. thread-tabs (getSelectedTab))
        resource (.-web_page_ tab)
        content (dom/getElement "thread-tabs_content")]
    (when (not (.-error_ tab))
      (show-loading-in content true)

      (set! (.-innerHTML (child-by-id (.-tab_page_ tab) "thread-list-caption"))
            (str "Processing " (:pages (.-web_page_ tab))
                 (if (not= (:pages (.-web_page_ tab)) 1)
                   " pages..."
                   " page...")))
      
      (post-data "/refresh" (pr-str (assoc resource :refresh (:pages resource)))
                 refresh-btn-callback))))
    
(defn close-btn-handler [e]
  (let [tab (. thread-tabs (getSelectedTab))
        tab-index (. thread-tabs (getSelectedTabIndex))
        content (dom/getElement "thread-tabs_content")
        do-remove (fn []
                    (.removeChild thread-tabs tab true)
                    (dom/removeChildren content))]
    (if (> (. thread-tabs (getChildCount)) 1)
      (do
        (do-remove)
        (.setSelectedTabIndex thread-tabs (if (> tab-index 0) (dec tab-index) tab-index))
        (dom/appendChild content (.-tab_page_ (. thread-tabs (getSelectedTab)))))
      (let [new-tab (goog.ui.Tab. blank-tab-lbl)]
        (.addChild thread-tabs new-tab true)
        (.setSelectedTab thread-tabs new-tab)
        (do-remove)))))

(defn decorate-when [root id]
  (let [elt (child-by-id root id)]
    (when elt (goog.ui/decorate elt))))

(defn setup-snapin-buttons [root]
  (when (:open settings)
    (let [forget-btn (child-by-id root "forget-btn")]
      (when forget-btn
        (.removeChild (.-parentNode forget-btn) forget-btn))))
  
  (let [forget-btn (decorate-when root "forget-btn")
        expand-btn (decorate-when root "expand-btn")
        expand-watch-btn (decorate-when root "expand-watch-btn")
        go-again-btn (decorate-when root "go-again-btn")
        refresh-btn (decorate-when root "refresh-btn")
        close-btn (decorate-when root "close-btn")]
    (when forget-btn
      (events/listen forget-btn
                     goog.ui.Component.EventType/ACTION
                     #(remove-threads (dom/getElement "forget-btn"))))
    (when expand-btn
      (events/listen expand-btn
                     goog.ui.Component.EventType/ACTION
                     expand-btn-handler))
    (when expand-watch-btn
      (events/listen expand-watch-btn
                     goog.ui.Component.EventType/ACTION
                     expand-watch-btn-handler))
    (when go-again-btn
      (events/listen go-again-btn
                     goog.ui.Component.EventType/ACTION
                     go-again-btn-handler))
    (when refresh-btn
      (events/listen refresh-btn
                     goog.ui.Component.EventType/ACTION
                     refresh-btn-handler))
    (when close-btn
      (events/listen close-btn
                     goog.ui.Component.EventType/ACTION
                     close-btn-handler))))

;; data retirieval ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def link-queue nil)
(defn start-chain [addr]
  (let [match (.match addr (js/RegExp "([^\\[]+)\\[([^\\]]+)\\](.*)"))
        prefix (aget match 1)
        boards (vec (.split (aget match 2) (js/RegExp "[\\s\\+,]")))
        postfix (aget match 3)
        links (for [board boards]
                       (str prefix (str (. board (trim)) postfix) ":chain"))]
    (set! link-queue (next links))
    (post-data "/lets-go" (str (first links) ":first") go-btn-callback)))

(def target-tab)
(defn continue-chain [e]
  (let [xhr (.-target e)
        {:keys [status body]} (reader/read-string (. xhr (getResponseText)))
        resource (:resource body)
        tab-title (str (:trade resource) "*")]
    (.forEachChild thread-tabs
                   (fn [tab]
                     (when (= (. tab (getContent)) tab-title)
                       (set! target-tab tab))))
    (set! (.-web_page_ target-tab) resource)
        
    (condp = status
      :ok (get-thread-chain (:task body) target-tab)
      :error (let [link (first link-queue)]
               (if link
                 (do (set! link-queue (next link-queue))
                     (post-data "/lets-go" link continue-chain))
                 (show-loading-in (.-tab_page_ target-tab) false))))))

(defn get-thread-chain [task-id tab]
  (post-data
   "/get-scrap" task-id
   (fn [e]
     (let [xhr (.-target e)
           {:keys [status body]} (reader/read-string (. xhr (getResponseText)))]
       (condp = status
         :pending (timer/callOnce #(get-thread-chain task-id tab) (if (:local settings) 500 2000))
         :ok (let [tab-page (.-tab_page_ tab)
                   resource (.-web_page_ tab)
                   thread-list-caption (child-by-id tab-page "thread-list-caption")
                   thread-headlines (child-by-id tab-page "thread-headlines")
                   content (.createElement js/document "div")]
               (when (:first resource)
                 (set! (.-innerHTML thread-list-caption) (str "<b>" (:trade resource) "</b> board chain"))
                 (set! (.-innerHTML thread-headlines) ""))
               
               (set! (.-innerHTML content) (:threads body))
               (set! (.-error_ tab) nil)

               (set! (.-innerHTML (child-by-class content "thread-group"))
                     (format-stats (:stats body) (.-web_page_ tab)))
               
               (.appendChild thread-headlines (.-firstChild content))
               
               (when (and (= (. thread-tabs (getSelectedTab)) tab) (:first resource))
                 (set! (.-scrollTop thread-headlines) 0))
               
               (let [link (first link-queue)]
                 (if link
                   (do (set! link-queue (next link-queue))
                       (post-data "/lets-go" link continue-chain))
                   (show-loading-in tab-page false))))                       
         nil)))))

(defn get-thread-stream [task-id tab]
  (post-data
   "/get-scrap" task-id
   (fn [e]
     (let [xhr (.-target e)
           {:keys [status body]} (reader/read-string (. xhr (getResponseText)))]
       (condp = status
         :pending (timer/callOnce #(get-thread-stream task-id tab) (if (:local settings) 500 2000))
         :ok (let [tab-page (.-tab_page_ tab)
                   thread-list-caption (child-by-id tab-page "thread-list-caption")
                   thread-headlines (child-by-id tab-page "thread-headlines")
                   content (.createElement js/document "div")]
               (show-loading-in tab-page false)
               (set! (.-innerHTML thread-list-caption) (format-stats (:stats body) (.-web_page_ tab)))
               (set! (.-innerHTML content) (:threads body))
               (set! (.-error_ tab) nil)
               (.removeChild thread-headlines (.-firstChild thread-headlines))
               (.appendChild thread-headlines (.-firstChild content))
               (when (= (. thread-tabs (getSelectedTab)) tab)
                 (set! (.-scrollTop thread-headlines) 0)))
         nil)))))

(def tab-to-add nil)
(defn go-btn-callback [e]
  (show-loading false)
  (let [xhr (.-target e)
        {:keys [status body]} (reader/read-string (. xhr (getResponseText)))
        resource (:resource body)
        first-tab (.getChildAt thread-tabs 0)
        tab-page (dom/createDom "div" (.-strobj {"id" "tab-page", "innerHTML" (:snapin body)}))
        refined-url (if (= (.indexOf (:forum resource) "self.ref") 0)
                      (:forum resource)
                      (refine-url resource))
        tab-title (condp = (:forum resource)
                    watch-page "Watch"
                    archive-page (do
                                   (when (:restricted settings)
                                     (show-output "<span class=\"red\">Note that archive is disabled
                                                   in this version</span>")
                                     (timer/callOnce #(show-output "") 10000))
                                   "Archive")
                    science-page "Sing!"
                    (:forum resource))
        tab-title (if (:chain resource)
                    (str (:trade resource) "*")
                    tab-title)]

    (when (not= status :error)
      (set! (.-innerHTML (child-by-id tab-page "thread-list-caption"))
            (str "Processing " (:pages resource)
                 (if (not= (:pages resource) 1)
                   " pages..."
                   " page..."))))                   
    
    (when (= (.-content_ first-tab) blank-tab-lbl)
      (.removeChild thread-tabs first-tab true))

    (set! tab-to-add (goog.ui.Tab. tab-title))
    (.forEachChild thread-tabs
                   (fn [tab]
                     (when (= (. tab (getContent)) tab-title)
                       (set! tab-to-add tab))))

    (if (:chain resource)
      (.setTooltip tab-to-add tab-title)
      (.setTooltip tab-to-add refined-url))
    (when (not (.-tab_page_ tab-to-add))
      (.addChild thread-tabs tab-to-add true))
    (.setSelectedTab thread-tabs tab-to-add)

    (set! (.-tab_page_ tab-to-add) tab-page)
    (set! (.-web_page_ tab-to-add) resource)
    
    (let [content (dom/getElement "thread-tabs_content")]
      (dom/removeChildren content)
      (dom/appendChild content tab-page))
    (setup-snapin-buttons tab-page)
    
    (condp = status
      :ok (do
            (show-loading-in tab-page true)
            (if (:chain resource)
              (get-thread-chain (:task body) tab-to-add)
              (get-thread-stream (:task body) tab-to-add)))
      :error (set! (.-error_ tab-to-add) true)
      )))        

(defn do-go [data]
  (let [data data #_(if (:open settings)
                      (str data ":open")
                      data)]
    (show-loading true)
    (if (and (> (.indexOf data "]") 0)
             (> (.indexOf data "[") 0))
      (start-chain data)
      (post-data "/lets-go" data go-btn-callback))))

(defn go-btn-handler [e]
  (let [data (.-value (dom/getElement "address-txt"))]
    (when (and data (not= "" data))
      (do-go data))))

(defn ^:export main [init]
  (set! settings (reader/read-string init))

  (when (not (:tab settings))
    (let [address-lbl (goog.ui.Tooltip. "address-lbl")]
      (.setHtml address-lbl
         (str "Enter a command or a forum address with colon-separated options,<br/>
               for example: <span style=\"color: #DDC771\">
               4chan.org/a:15p:5r:rev</span><br/><br/>
               The options are (all the options are optional):<br/><br/>
               <span class=\"gold\">Np</span> - take N pages on the initial forum load (the default is 5) <br/>
               <span class=\"gold\">Nr</span> - take N pages on a refresh (the default is 2)<br/>
               <span class=\"gold\">Nv</span> - take N last (visible) replies from a thread
                                                (the default is 3)<br/>
               <span class=\"gold\">hdlns</span> - load OP-posts only<br/>
               <span class=\"gold\">txt</span> - text only (do not display images)<br/>
               <span class=\"gold\">img</span> - show an image stream instead of a thread list (limited
                                                 support)<br/>
               <span class=\"gold\">sortid</span> - sort threads by id (desc)<br/>
               <span class=\"gold\">rev</span> - reverse (show the oldest threads first)<br/>
               <span class=\"gold\">xpnd</span> - expand all items<br/>
               <span class=\"gold\">wtch</span> - display watch items only<br/>
               <span class=\"gold\">prox</span> - try to bypass image hotlinking protection<br/>
               <span class=\"gold\">search{text}</span> - show only threads containing the specified text
                                                          in the <br/>oppost title or message<br/>
               <span class=\"gold\">deep</span> - also search in visible posts
               <br/></br>Chained links allow to simultaneously view multiple boards in one tab,</br>
               for example: <span class=\"gold\">4chan.org/[a:3p+c+m:2p]:5p</span>
               <br/></br>The commands are:<br/><br/>"

               (if  (:open settings)
                       "<span class=\"gold\">sing!</span> - show some weird things"
                       "<span class=\"gold\">watch</span> - open the watch list<br/>
                        <span class=\"gold\">archive</span> - open the archive")
               (when (:local settings)
                       "<br/><span class=\"gold\">stop</span> - gracefully terminate the application</span>")))))
  
  (set! thread-tabs (goog.ui.TabBar.))
  (.render thread-tabs (dom/getElement "thread-tabs"))
  (let [new-tab (goog.ui.Tab. blank-tab-lbl)]
    (.addChild thread-tabs new-tab true)
    (.setSelectedTab thread-tabs new-tab))

  (events/listen thread-tabs
                 goog.ui.Component.EventType/SELECT
                 select-tab)

  (when (not (:tab settings))
    (let [fav-btn-div (dom/getElement "fav-btn")
          fav-btn (goog.ui/decorate fav-btn-div)
          popup (goog.ui.PopupMenu.)]
      (set! favorites-menu popup)
      (fill-favorites (:favorites settings))
      (. popup (render))
      (events/listen popup
                     goog.ui.Component.EventType/ACTION
                     favorites-menu-handler)
      (events/listen fav-btn
                     goog.ui.Component.EventType/ACTION
                     (fn [e]
                       (.showAtElement popup fav-btn-div goog.positioning.Corner/BOTTOM_START)))))

  (when-let [s-btn (dom/getElement "settings-btn")]
    (let [s-btn (goog.ui/decorate s-btn)]
      (events/listen s-btn
                     goog.ui.Component.EventType/ACTION
                     #(inline-dialog "Settings" "/settings"))))

  (condp = (:start-page settings)
    "favorite" (when (:fav-start settings)
                 (doseq [fi (:fav-start settings)]
                   (do-go fi)))
    "watch" (post-data "/lets-go" watch-page go-btn-callback)
    nil)

  (set! iv-menu (goog.ui.PopupMenu.))
  (.addChild iv-menu (goog.ui.MenuItem. "Show all posts") true)
  (let [show-delta (goog.ui.MenuItem. "Show \u2206 posts")]
    (.setEnabled show-delta false)
    (.addChild iv-menu show-delta true))
  (.addChild iv-menu (goog.ui.MenuItem. "Show 50 posts") true)
  (.addChild iv-menu (goog.ui.MenuItem. "Show 20 posts") true)
  (.addChild iv-menu (goog.ui.MenuItem. "Show 10 posts") true)
  (. iv-menu (render))
  
  (events/listen iv-menu
                 goog.ui.Component.EventType/ACTION
                 (fn [e]
                   (let [item (.-target e)
                         caption (. item (getCaption))
                         posts (.match caption (js/RegExp "\\d+"))
                         posts (when posts (js/parseInt (aget posts 0)))]
                     (if posts
                       (iv-load-posts iv-anchor posts)
                       (do
                         (if (> (.indexOf caption "all") 0)
                           (iv-load-posts iv-anchor -1)
                           (let [thread-line (parent-by-class iv-anchor "thread-line")
                                 delta-posts (child-by-class thread-line "delta-posts")
                                 posts (.match (.-textContent delta-posts) (js/RegExp "\\d+"))
                                 posts (js/__parseInt (aget posts 0))]
                             (iv-load-posts iv-anchor (inc posts)))))))))

  (set! arc-menu (goog.ui.PopupMenu.))
  (.addChild arc-menu (goog.ui.MenuItem. "Now") true)
  (.addChild arc-menu (goog.ui.MenuItem. "Once per hour") true)
  (.addChild arc-menu (goog.ui.MenuItem. "Once per day") true)
  (.addChild arc-menu (goog.ui.MenuItem. "Never") true)
  (. arc-menu (render))
  
  (events/listen arc-menu
                 goog.ui.Component.EventType/ACTION
                 (fn [e]
                   (let [item (.-target e)
                         caption (. item (getCaption))
                         rate (condp = caption
                                "Once per hour" "1h"
                                "Once per day" "24h"
                                "Never" "never"
                                nil)
                         thread-line (parent-by-class arc-anchor "thread-line")
                         oppost (child-by-class thread-line "thread-oppost")
                         arc-rate (child-by-class thread-line "arc-rate")]
                     (post-data "/set-arc-rate" (pr-str {:thread-id (.-id oppost) :rate rate})
                                (fn [e]
                                  (when rate
                                    (set! (.-innerHTML arc-rate) rate)))))))
  
  (when (:keepalive settings)
    (js/setInterval #(post-data "/keepalive" nil nil) 60000))

  (when (not (:tab settings))
    (let [go-btn (goog.ui/decorate (dom/getElement "go-btn"))
          address-txt (dom/getElement "address-txt")]
      (. address-txt (focus))
      (events/listen go-btn
                     goog.ui.Component.EventType/ACTION
                     go-btn-handler)
      (events/listen address-txt
                     goog.events.EventType/KEYPRESS
                     (fn [e]
                       (when (= (.-keyCode e) 13)
                         (go-btn-handler e))))))

  (when (.-IE js/nav)
    (show-output "<span class=\"red\">MSIE is barely supported, please get a real browser.</span>"))
  )
