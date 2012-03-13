(ns lenegro.settings
  (:require [lenegro.api :as api]
            [lenegro.browser :as browser]
            [lenegro.default-settings :as defset]
            [clojure.string :as str]
            [clojure.set :as sets]
            [appengine-magic.services.datastore :as ds])
  (:use net.cgrand.enlive-html))

(defn set-checked [flag]
  (fn [node]
    (if flag 
      ((set-attr :checked "checked") node)
      node)))

(defn settings-template []
  (let [settings (browser/get-settings (api/get-user-token))]
    (at (html-resource (api/get-resource-as-stream "settings.html"))
        [:#watch-first]
        (set-checked (:watch-first settings))
        [:#always-calc-delta]
        (set-checked (:always-calc-delta settings))
        [:#archive-disable]
        (set-checked (:archive-disable settings))
        [:#wf-enable]
        (set-checked (or api/+carnival+ (:wf-enabled settings)))
        [:#wf-title-words]
        (content (:wf-title settings))
        [:#wf-post-words]
        (content (:wf-post settings))
        [:#favorites]
        (content (:favorites settings))
        [:#start-page :> [:option (attr= :value (:start-page settings))]]
        (set-attr :selected "selected")
        [:#force-textonly]
        (set-checked (:force-text settings))
        [:#keepalive]
        (set-checked (:keepalive settings))
        )))        

(defn settings-route []
  (api/html-page (api/render (settings-template))))

#_(defn clear-history-route []
  (let [history (ds/retrieve lenegro.browser.History (api/get-user-token))]
    (when history
      (ds/delete! history)))
  (api/text-page ""))

(defn remeber-threads-route []
  (ds/delete! (ds/query :kind lenegro.browser.ForgottenThread
                        :filter (= :user-token (api/get-user-token))))
  (api/text-page ""))

(defn parse-wordfilter [words]
  (when words
    (doall
     (filter (complement nil?)
             (for [word (str/split (api/sanitize words) #"\n")]
               (let [word (str/trim word)]
                 (when (not (str/blank? word))
                   (if (= (get word 0) \#)
                     (re-pattern (.substring word 1))
                     (str/lower-case word)))))))))

(defn get-fav-start-items [favorites]
  (when favorites
    (let [fav-lines (filter #(and (not (str/blank? %)) (= (get % 0) \@))
                            (apply sorted-set (str/split (api/sanitize favorites) #"\n")))]
      (map #(str/replace % #"@(?:.*?\$)?" "") fav-lines))))

(defn parse-favorites [favorites]
  (if favorites
    (let [lines (map #(if (and (not (str/blank? %)) (= (get % 0) \@))
                        (.substring % 1)
                        %)
                     (str/split (api/sanitize favorites) #"\n"))
          groups (partition-by #(first %)
                               (map (fn [s]
                                      (let [i (.indexOf s "$")]
                                        (if (< i 0)
                                          [s s]
                                          [(.substring s 0 i) (.substring s (inc i))])))
                                    (apply sorted-set lines)))]
          (loop [groups groups menus [] items []]
            (let [group (first groups)]
              (if group
                (if (> (count group) 1)
                  (recur (next groups)
                         (conj menus
                               {:menu (ffirst group)
                                :items (doall (map #(second %) group))})
                         items)
                  (recur (next groups)
                         menus
                         (conj items (ffirst group))))
                (concat menus items)))))
    []))

(defn save-settings-route [request]
  (let [settings (read-string (slurp (:body request)))
        fav-parsed (parse-favorites (:favorites settings))
        wf-title-parsed (parse-wordfilter (:wf-title settings))
        wf-post-parsed (parse-wordfilter (:wf-post settings))]
    (ds/save! (lenegro.browser.Settings.
               (api/get-user-token)
               (assoc settings
                 :archive-disable (if api/+restricted+ true (:archive-disabled settings))
                 :wf-enabled (or api/+carnival+ (:wf-enabled settings))
                 :wf-title-parsed (seq (sets/union (set wf-title-parsed)
                                                   (when api/+carnival+
                                                     (apply set (:wf-title-parsed (defset/default-settings))))))
                                              
                 :wf-post-parsed (seq (sets/union (set wf-post-parsed)
                                                  (when api/+carnival+
                                                    (apply set (:wf-post-parsed (defset/default-settings))))))
                 :fav-start (get-fav-start-items (:favorites settings))
                 :favorites-parsed fav-parsed)))
    (api/text-page (pr-str {:favorites-parsed fav-parsed}))))
  