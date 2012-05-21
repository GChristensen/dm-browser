(ns home
  (:require
   [clojure.string :as str]
   [cljs.reader :as reader]
   [goog.net.XhrIo :as xhr]
   [goog.dom :as dom]
   [goog.window :as wnd]
;;   [goog.object :as goog-object]
;;   [goog.events :as events]
   [goog.Timer :as timer]
   [goog.structs.Map :as goog-map]
   ))

;; utils ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;(def *server* "http://localhost:8080")
(def *server* "http://localhost:28095")

(defn post-data [url data callback]
  (let [headers (goog.structs.Map.)]
    (.set headers "Content-Type" "text/plain")
    (xhr/send url callback "POST" data headers)))

(defn show-settings []
  (let [content (dom/getElement "thread-tabs_content")]
    (set! (.-innerHTML content)
          (str "<iframe src=\""
               (str *server* "/settings")
               "\"/>"))
    (set! (.-padding (.-style content)) "0")))


(defn open-favorites [sites]
  (doseq [site (next sites)]
    (wnd/open (str "chan://" site) nil nil))
  (if (seq sites)
    (set! (.-location js/window) (str "chan://" (first sites)))
    (show-settings)))

(defn dispatch []
  (post-data (str *server* "/get-settings") nil
             (fn [xe]
               (let [xhr (.-target xe)
                     settings (reader/read-string (. xhr (getResponseText)))]
                 (condp = (:start-page settings)
                   "watch" (set! (.-location js/window) "chan:watch")
                   "favorite" (open-favorites (:fav-start settings))
                   (show-settings))))))

(defn ping []
  (timer/callOnce
   #(post-data (str *server* "/ping") nil
               (fn [xe]
                 (let [xhr (.-target xe)
                       response (. xhr (getResponseText))]
                   (if (= response "pong")
                     (dispatch)
                     (ping)))))
                  500))

(defn ^:export main [init]
  (.setTimeoutInterval (.-prototype goog.net.XhrIo) 450)
  (ping)
)