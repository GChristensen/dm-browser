(ns lenegro.core
  (:require [clojure.string :as str]
            [lenegro.api :as api]
            [lenegro.browser :as browser]
            [lenegro.settings :as settings]
            [compojure.handler :as handler])
  (:use compojure.core))

(defroutes lenegro-app-routes
  (GET "/" request (browser/browser-route request api/+public+))
  (GET "/public" request (browser/browser-route request true))
  (GET "/proxify/*" [url referer] (api/proxify url referer))
  (POST "/keepalive" [] (fn [& _] (api/text-page nil)))
  (GET "/settings" [] (settings/settings-route))
  (POST "/lets-go" request (browser/go-route request))
  (POST "/refresh" request (browser/refresh-route request))
  (ANY "/tab/:url" {{:keys [url]} :route-params :as request}
       (browser/tab-route url request api/+public+))
  (ANY "/tab/:url1/:url2" {{:keys [url1 url2]} :route-params :as request}
       (browser/tab-route (str url1 "/" url2) request api/+public+))
  (ANY "/tab/:url1/:url2/:url3" {{:keys [url1 url2 url3]} :route-params :as request}
       (browser/tab-route (str url1 "/" url2 "/" url3) request api/+public+))
  (ANY "/m/:url" {{:keys [url]} :route-params :as request}
       (browser/tab-route url request api/+public+))
  (ANY "/m/:url1/:url2" {{:keys [url1 url2]} :route-params :as request}
       (browser/tab-route (str url1 "/" url2) request api/+public+))
  (ANY "/m/:url1/:url2/:url3" {{:keys [url1 url2 url3]} :route-params :as request}
       (browser/tab-route (str url1 "/" url2 "/" url3) request api/+public+))
  (ANY "/m" []
       (browser/mobile-route))
  (ANY "/m/" []
       (api/redirect-to "/m"))
  (ANY "/download-page-task" request (browser/download-page-task request))
  (ANY "/archive-page-task" request (browser/archive-page-task request))
  (POST "/get-scrap" request (browser/get-scrap-route request))
  (POST "/get-thread-posts" request (browser/get-thread-posts-route request))
  (POST "/get-popup-post" request (browser/get-popup-post-route request))
  (ANY "/get-thread-images" [resource thread-id] (browser/get-thread-images-route resource thread-id))
  (POST "/remember-threads" [] (settings/remeber-threads-route))
  (POST "/save-settings" request (settings/save-settings-route request))
  (POST "/forget" request (browser/forget-route request))
  (POST "/watch-thread" request (browser/watch-thread-route request))
  (POST "/unwatch-threads" request (browser/unwatch-threads-route request))
  (ANY "/lazy-get-watch" request (browser/lazy-get-watch-route request))
  (ANY "/cron/service-task" [] (browser/service-task-route))
  (ANY "/callback/got-image" {{:strs [item-id]} :query-params :as request}
        (browser/got-image-route item-id request))
  (ANY "/callback/got-page" request (browser/got-page-route request))
  (GET "/archive/:thread-id/:image-id"  {{:keys [thread-id image-id]} :route-params :as request}
       (browser/arc-serve-image thread-id image-id request))
  (GET "/archive/:thread-id"  {{:keys [thread-id]} :route-params :as request}
       (browser/arc-serve-page thread-id request))
  (POST "/archive-remove" request (browser/archive-remove-route request))
  (POST "/set-arc-rate" request (browser/set-arc-rate request))
  (ANY "/cron/arc-1h-task" [] (browser/arc-1h-task-route))
  (ANY "/stop" [] (browser/go-route {:body (.getBytes "self.ref/stop")}))
  (POST "/get-settings" [] (browser/get-settings-route))
  (ANY "/get-visitors" [] (browser/get-visitors-route))
  (ANY "/del-stats" [] (browser/del-stats-route))
  (ANY "/ping" [] (api/text-page "pong"))
  (ANY "*" [] (api/page-not-found)))

(defn context-binder [handler]
  (fn [req]
    (binding [api/*servlet-context* (:servlet-context req)
              api/*remote-addr* (:remote-addr req)
              api/*user-agent* ((:headers req) "user-agent")
              api/*app-host* (str (name (:scheme req)) "://"
                                  (:server-name req)
                                  (let [port (:server-port req)]
                                        (when (and port (not= port 80))
                                          (str ":" port))))]
      (handler req))))

(def lenegro-app-handler (handler/site
                          (context-binder lenegro-app-routes)))

(api/perform-initialization #'lenegro-app-handler)