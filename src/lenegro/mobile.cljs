(ns mobile
  (:require
   [clojure.string :as str]
   [cljs.reader :as reader]
   [goog.dom :as dom]
   [goog.array :as array]
   [goog.object :as goog-object]
   [goog.events :as events]
   [goog.ui.Tooltip :as tooltip]
   [goog.ui.Component :as component]
   [goog.ui.ComboBox :as combobox]
   [goog.ui.Button :as button]
   [goog.ui.Dialog :as dialog]
   [goog.ui.FlatButtonRenderer :as flat-button-rndr]
   [goog.net.XhrIo :as xhr]
   [goog.structs.Map :as goog-map]))

(def settings nil)
<<<<<<< HEAD
(def address-txt nil)
(def chan-selector nil)
(def board-selector nil)
(def option-selector nil)
(def active-chan nil)
(def active-board nil)
(def active-option nil)
=======
(def active-combo nil)
>>>>>>> origin/master

(defn post-data [url data callback]
  (let [headers (goog.structs.Map.)]
    (.set headers "Content-Type" "text/plain")
    (xhr/send url callback "POST" data headers)))

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

(defn linkify [url func]
  (str "&nbsp;<a class=\"sel-link\" onclick=\"" func "\">" url "</a>&nbsp;"))

(defn fill-option-selector []
  (set! (.-innerHTML option-selector)
        (str/join " "
                  (for [option [":1p:1r" ":2p:1r" ":3p:1r" ":5p:1r" ":10p:1r" ":15p:1r"]]
                    (linkify option "mobile.select_option(this, event)")))))

(defn ^:export select-chan [target evt]
  (set! active-chan (.-innerHTML target))
  (set! active-board nil)
  (set! active-option nil)
  (set! (.-value address-txt) active-chan)
  (set! (.-innerHTML option-selector) "")
  (if (or (= active-chan "Watch") (= active-chan "Archive"))
    (set! (.-innerHTML board-selector) "")
    (doseq [item (:favorites settings)]
      (if (string? item)
        (when (.match item (js/RegExp active-chan))
          (set! (.-innerHTML board-selector)
                (linkify (aget (.match item (js/RegExp ".*/([^:]*).*")) 1)
                         "mobile.select_board(this, event)")))
        (when (= (:menu item) active-chan)
          (set! (.-innerHTML board-selector)
                (str/join " "
                          (filter (complement nil?)
                                  (for [board (:items item)]
                                    (let [match (.match board (js/RegExp (str active-chan "/([^:\\[]*).*")))]
                                      (when match
                                        (linkify (aget match 1)
                                                 "mobile.select_board(this, event)"))))))))))))

(defn ^:export select-board [target evt]
  (set! active-board (.-innerHTML target))
  (set! active-option nil)
  (fill-option-selector)
  (set! (.-value address-txt) (str active-chan "/" active-board)))


(defn ^:export select-option [target evt]
  (set! active-option (.-innerHTML target))
  (set! (.-value address-txt) (str active-chan "/" active-board active-option)))

(defn ^:export main [init]

  (set! settings (reader/read-string init))

  (set! address-txt (dom/getElement "address-txt"))
  (set! chan-selector (dom/getElement "chan-selector"))
  (set! board-selector (dom/getElement "board-selector"))
  (set! option-selector (dom/getElement "option-selector"))
  
  (when-let [s-btn (dom/getElement "settings-btn")]
    (let [s-btn (goog.ui/decorate s-btn)]
      (events/listen s-btn
                     goog.ui.Component.EventType/ACTION
                     #(inline-dialog "Settings" "/settings"))))

  (let [;;cbx-chan (goog.ui.ComboBox.)
        ;;cbx-board (goog.ui.ComboBox.)
        ;;cbx-pages (goog.ui.ComboBox.)
        go-btn (goog.ui/decorate (dom/getElement "go-btn"))]

<<<<<<< HEAD
    (set! (.-innerHTML chan-selector)
          (str/join " "
                    (for [chan (distinct (concat (for [item (:favorites settings)]
                                                   (if (string? item)
                                                     (aget (.match item (js/RegExp "@?([^/]*).*")) 1)
                                                     (:menu item)))
                                                 ["Watch" "Archive"]))]
                       (linkify chan "mobile.select_chan(this, event)"))))
=======
    (.setUseDropdownArrow cbx-chan true)
    (.setDefaultText cbx-chan "Channel...")
    (.addItem cbx-chan (goog.ui.ComboBoxItem. "Watch"))
    (.addItem cbx-chan (goog.ui.ComboBoxItem. "Archive"))
    (.addItem cbx-chan (goog.ui.MenuSeparator.))
    (doseq [chan (distinct (for [item (:favorites settings)]
                             (if (string? item)
                               (aget (.match item (js/RegExp "@?([^/]*).*")) 1)
                               (:menu item))))]
      (.addItem cbx-chan (goog.ui.ComboBoxItem. chan)))
    (.render cbx-chan (dom/getElement "cbx-chan"))
          
    (events/listen cbx-chan
                   goog.ui.Component.EventType/CHANGE
                   (fn [e]
                     (.removeAllItems cbx-board)
                     (doseq [item (:favorites settings)]
                       (if (string? item)
                         (when (.match item (js/RegExp (.getValue (.-target e))))
                           (.addItem
                            cbx-board
                            (goog.ui.ComboBoxItem.
                             (aget (.match item (js/RegExp ".*/([^:]*).*")) 1))))
                         (doseq [board (:items item)]
                           (when (= (:menu item) (.getValue (.-target e)))
                             (.addItem
                              cbx-board
                              (goog.ui.ComboBoxItem.
                               (aget (.match board (js/RegExp ".*/([^:\\[]*).*")) 1)))))))))

    (.setUseDropdownArrow cbx-board true)
    (.setDefaultText cbx-board "Board...")
    (.render cbx-board (dom/getElement "cbx-board"))

    (.setUseDropdownArrow cbx-pages true)
    (.setDefaultText cbx-pages "Options...")
    (.addItem cbx-pages (goog.ui.ComboBoxItem. ":1p:1r"))
    (.addItem cbx-pages (goog.ui.ComboBoxItem. ":2p:1r"))
    (.addItem cbx-pages (goog.ui.ComboBoxItem. ":3p:1r"))
    (.addItem cbx-pages (goog.ui.ComboBoxItem. ":5p:1r"))
    (.addItem cbx-pages (goog.ui.ComboBoxItem. ":10p:1r"))
    (.addItem cbx-pages (goog.ui.ComboBoxItem. ":15p:1r"))
    (.render cbx-pages (dom/getElement "cbx-pages"))

>>>>>>> origin/master

    (events/listen go-btn
                   goog.ui.Component.EventType/ACTION
                   (fn [e]
                     (when (not (str/blank? (.-value address-txt)))
                       (set! (.-location js/window)
                             (str "/m/"
                                  (condp = (.-value address-txt)
                                    "Watch" "self.ref/watch"
                                    "Archive" "self.ref/archive"
                                    (.-value address-txt))
                                  (when (.-checked (dom/getElement "text-only"))
                                    ":txt"))))))
    
    ;; (.setUseDropdownArrow cbx-chan true)
    ;; (.setDefaultText cbx-chan "Channel...")
    ;; (.addItem cbx-chan (goog.ui.ComboBoxItem. "Watch"))
    ;; (.addItem cbx-chan (goog.ui.ComboBoxItem. "Archive"))
    ;; (.addItem cbx-chan (goog.ui.MenuSeparator.))
    ;; (doseq [chan (distinct (for [item (:favorites settings)]
    ;;                          (if (string? item)
    ;;                            (aget (.match item (js/RegExp "@?([^/]*).*")) 1)
    ;;                            (:menu item))))]
    ;;   (.addItem cbx-chan (goog.ui.ComboBoxItem. chan)))
    ;; (.render cbx-chan (dom/getElement "cbx-chan"))
          
    ;; (events/listen cbx-chan
    ;;                goog.ui.Component.EventType/CHANGE
    ;;                (fn [e]
    ;;                  (.removeAllItems cbx-board)
    ;;                  (doseq [item (:favorites settings)]
    ;;                    (if (string? item)
    ;;                      (when (.match item (js/RegExp (.getValue (.-target e))))
    ;;                        (.addItem
    ;;                         cbx-board
    ;;                         (goog.ui.ComboBoxItem.
    ;;                          (aget (.match item (js/RegExp ".*/([^:]*).*")) 1))))
    ;;                      (doseq [board (:items item)]
    ;;                        (when (= (:menu item) (.getValue (.-target e)))
    ;;                          (.addItem
    ;;                           cbx-board
    ;;                           (goog.ui.ComboBoxItem.
    ;;                            (aget (.match board (js/RegExp ".*/([^:\\[]*).*")) 1)))))))))

    ;; (.setUseDropdownArrow cbx-board true)
    ;; (.setDefaultText cbx-board "Board...")
    ;; (.render cbx-board (dom/getElement "cbx-board"))

    ;; (.setUseDropdownArrow cbx-pages true)
    ;; (.setDefaultText cbx-pages "Options...")
    ;; (.addItem cbx-pages (goog.ui.ComboBoxItem. ":1p:1r"))
    ;; (.addItem cbx-pages (goog.ui.ComboBoxItem. ":2p:1r"))
    ;; (.addItem cbx-pages (goog.ui.ComboBoxItem. ":3p:1r"))
    ;; (.addItem cbx-pages (goog.ui.ComboBoxItem. ":5p:1r"))
    ;; (.addItem cbx-pages (goog.ui.ComboBoxItem. ":10p:1r"))
    ;; (.addItem cbx-pages (goog.ui.ComboBoxItem. ":15p:1r"))
    ;; (.render cbx-pages (dom/getElement "cbx-pages"))


    ;; (events/listen go-btn
    ;;                goog.ui.Component.EventType/ACTION
    ;;                (fn [e]
    ;;                  (when (not (str/blank? (.getValue cbx-chan)))
    ;;                    (set! (.-location js/window)
    ;;                          (str "/m/"
    ;;                               (condp = (.getValue cbx-chan)
    ;;                                 "Watch" "self.ref/watch"
    ;;                                 "Archive" "self.ref/archive"
    ;;                                 (.getValue cbx-chan))
    ;;                               (condp = (.getValue cbx-chan)
    ;;                                 "Watch" "self.ref/watch"
    ;;                                 "Archive" "self.ref/archive"
    ;;                                 (if (str/blank? (.getValue cbx-board))
    ;;                                   "/b"
    ;;                                   (str "/" (.getValue cbx-board))))
    ;;                               (.getValue cbx-pages)
    ;;                               (when (.-checked (dom/getElement "text-only"))
    ;;                                 ":txt"))))))
                                                               
    )

  )

