(ns settings
  (:require
   [clojure.string :as str]
   [cljs.reader :as reader]
   [goog.dom :as dom]
   [goog.array :as array]
   [goog.object :as goog-object]
   [goog.events :as events]
   [goog.ui.Tooltip :as tooltip]
   [goog.ui.Button :as button]
   [goog.ui.FlatButtonRenderer :as flat-button-rndr]
   [goog.net.XhrIo :as xhr]
   [goog.structs.Map :as goog-map]))

(defn post-data [url data callback]
  (let [headers (goog.structs.Map.)]
    (.set headers "Content-Type" "text/plain")
    (xhr/send url callback "POST" data headers)))

(defn enabled? [check]
  (when (.-checked check) true))

(defn save-settings-callback [e]
  (let [xhr (.-target e)
        response (reader/read-string (. xhr (getResponseText)))]
    (.reset_favorites (.-browser (.-window js/parent)) (:favorites-parsed response))))

(defn save-settings [e]
  (post-data "/save-settings"
             (pr-str
              {:watch-first (enabled? (dom/getElement "watch-first"))
               :always-calc-delta (enabled? (dom/getElement "always-calc-delta"))
               :archive-disable (enabled? (dom/getElement "archive-disable"))
               :wf-enabled (enabled? (dom/getElement "wf-enable"))
               :wf-title (.-value (dom/getElement "wf-title-words"))
               :wf-post (.-value (dom/getElement "wf-post-words"))
               :favorites (.-value (dom/getElement "favorites"))
               :start-page (.-value (dom/getElement "start-page"))
               :force-text (enabled? (dom/getElement "force-textonly"))
               :keepalive (enabled? (dom/getElement "keepalive"))})
             save-settings-callback))

(defn ^:export main []
  (let [wf-lbl (goog.ui.Tooltip. "wf-label")]
    (.setHtml wf-lbl "A regexp should be prefixed with the '#' character,
                     for example: <span class=\"gold\">#(?i)\\bpony\\b</span>.<br/>
                     Regexps are case sensitive by default, use (?i) swich to alter this behaviour."))
  
  (let [fav-lbl (goog.ui.Tooltip. "fav-lbl")]
    (.setHtml fav-lbl "To place menu items to a submenu, prefix them with a string:
                      <span class=\"gold\">'Submenu Name$'</span>.<br/><br/>
                      For exapmple:<br/>
                      <span class=\"gold\">example.com$example.com/foo:10p</span><br/>
                      <span class=\"gold\">example.com$example.com/bar:10p:img:rev</span><br/><br/>
                      Lines prefixed with the <span class=\"gold\">'@'</span>
                      character will be loaded on startup."))

  (let [arc-disable-lbl (goog.ui.Tooltip. "dis-arc-lbl")]
    (.setHtml arc-disable-lbl "Archive items are automatically removed after a month of inactivity."))
  
  (let [remember-btn (goog.ui/decorate (dom/getElement "remember-btn"))]
    (events/listen remember-btn
                   goog.ui.Component.EventType/ACTION
                   #(post-data "/remember-threads" nil nil))
    (.setHtml (goog.ui.Tooltip. (dom/getElement "remember-btn"))
              "A month old forgotten threads are restored automatically."))
  
  (let [save-btn (goog.ui/decorate (dom/getElement "save-settings-btn"))]
    (events/listen save-btn
                   goog.ui.Component.EventType/ACTION
                   save-settings))
  )

