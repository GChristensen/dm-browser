(ns lenegro.api
  (:import org.apache.commons.codec.binary.Base64
           com.google.appengine.api.memcache.Expiration
           java.net.URLEncoder)
  (:require [appengine-magic.core :as ae]
           [appengine-magic.services.datastore :as ds]
           [appengine-magic.services.user :as user]
           [appengine-magic.services.memcache :as cache]
           [appengine-magic.services.task-queues :as queue]
           [appengine-magic.services.user :as user]
           [net.cgrand.enlive-html :as enlive]
           [clojure.string :as str])
  (:use clojure.tools.macro
        [appengine-magic.services.url-fetch :only [fetch]]))

(def +restricted+ nil)
(def +standalone+ (boolean (find-ns 'lispx)))
(def +carnival+ nil)
(def +pristine+ true)

(defmacro ifdef [test expr1 expr2]
  (if (true? (eval test)) expr1 expr2))

(defmacro whendef [test expr]
  (when (true? (eval test)) expr))

;; available in the context of request handler calls
(def ^:dynamic *servlet-context* "A servlet context instance." nil)
(def ^:dynamic *remote-addr* "Request remote address." nil)
(def ^:dynamic *app-host* "Application server host name (with protocol scheme)." nil)
(def ^:dynamic *user-agent* nil)

(def ^:const +platform+
  "The current underlying platform, :gae or :servlet"
  :gae)

(defn peel-list [the-list]
  (let [first-arg (first the-list)]
    (if (list? first-arg) first-arg the-list)))

(defmacro defapi [fn-name doc [& args] & impl-kvs]
  (let [computed-args (peel-list (mexpand args))]
    `(defn ~fn-name ~doc [~@computed-args]
       ~@((apply hash-map impl-kvs) +platform+))))

;; data persistence ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmacro apply-cons [cons fields]
  (let [computed-fields (mexpand fields)]
    `(~cons ~@computed-fields)))
  
(defmacro defentity [name field-list]
  `(ds/defentity ~name [~@(mexpand `~field-list)]))

;; url fetching ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(when +standalone+ (require 'clj-http.client))

(defapi fetch-url
  "Returns platform-specific response of url-fetching routine, params are also
platform-specific (use lenegro.api/+platform+ to detect the current platform)."
  [url & params]
  :gae [
        (ifdef +standalone+
               (do
                 (let [http-request (ns-resolve 'clj-http.client 'request)
                       params (assoc (apply hash-map params) :as :byte-array)
                       params (if (contains? params :method)
                                params
                                (assoc params :method :get params))
                       response (http-request (assoc params :url url))]
                   (assoc response :response-code (:status response) :content (:body response))))
               (apply fetch (cons url (concat params [:deadline (double 59)])))) ])


(defapi make-enlive-resource
  "Transforms a platform-specific response obtained with fetch-url api
function to a format which is edible by enlive selection functions.
May return nil in case if this is not possible."
  [response]
  :gae [ (when (= (:response-code response) 200)
           (let [content-type ((:headers response) "Content-Type")
                 charset (if content-type
                           (let [charset= (.indexOf content-type "charset=")]
                             (if (>= charset= 0)
                               (.substring content-type (+ charset= 8))
                               "UTF-8"))
                           "UTF-8")]
             (enlive/html-resource (java.io.InputStreamReader.
                                    (java.io.ByteArrayInputStream. (:content response))
                                    charset)))) ])

(defn url-encode-utf8 [str]
  (URLEncoder/encode str "UTF-8"))  
  
;; memcache ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; memcache is not used currently

(defapi cache-contains?
  "Check for value existence in memory cache."
  [key]
  :gae [ (cache/contains? key) ])

(defapi cache-get
  "Get value from memory cache."
  [key]
  :gae [ (cache/get key) ])

(defapi cache-put!
  "Put value to memory cache."
  [key value &{:keys [expire-sec]}]
  :gae [ (cache/put! key value :expiration (when expire-sec (Expiration/byDeltaSeconds expire-sec))) ])

(defapi cache-inc!
  "Put value to memory cache."
  [key value]
  :gae [ (cache/increment! key value) ])

(defapi cache-delete!
  "Delete value from memory cache."
  [key]
  :gae [ (cache/delete! key) ])

;; queue api ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defapi queue-add!
  "Add a task to the queue"
  [queue url payload]
  :gae [ (queue/add! :url url :queue queue :payload payload :headers {"Content-Type" "text/plain"}) ])

;; initialization ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defapi perform-initialization
  "Performs platform-specific initialization."
  [handler]
  :gae [ (ifdef +standalone+
                (let [app-root (ns-resolve 'lispx '*app-root*)]
                  (ae/def-appengine-app lenegro-app handler
                    :war-root (str @app-root "war")))
                (ae/def-appengine-app lenegro-app handler)) ])

;; authentication ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defapi user-admin?
  "Checks if logged in user is admin."
  [handler]
  :gae [ (user/user-admin?) ])

;; resources ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defapi get-resource-as-stream
  "Opens resource file as a stream."
  [path]
  :gae [ (ae/open-resource-stream path) ])

;; user ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defapi get-user-token
  "Get user identity."
  []
  :gae [ (let [user (user/current-user)]
           (if user
             (.getUserId user)
             "dummy-user")) ])

;; ring responses ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn permission-denied []
  {:status 403
   :headers {"Content-Type" "text/html"}
   :body "<h2>Permission denied</h2>"})

(defn page-not-found []
  {:status 404
   :headers {"Content-Type" "text/html"}
   :body "<h2>Page not found</h2>"})

(defn internal-server-error []
  {:status 505
   :headers {"Content-Type" "text/html"}
   :body "<h2>Internal server error</h2>"})

(defn page-found [content-type body]
  {:status 200
   :headers {"Content-Type" content-type,
             "Cache-Control" "no-cache"}
   :body body})

(defn html-page [body]
  {:status 200
   :headers {"Content-Type" "text/html"
             "Cache-Control" "no-cache"}
   :body body})

(defn text-page [body]
  {:status 200
   :headers {"Content-Type" "text/plain",
             "Cache-Control" "no-cache"}
   :body body})

(defn redirect-to
  [location]
  {:status 302
   :headers {"Location" location}})

(defn base64enc [str]
  (Base64/encodeBase64URLSafeString (.getBytes str "UTF-8")))

(defn base64dec [str]
  (let [dec (Base64. true)]
    (String. (.decode dec str) "UTF-8")))

(defn proxify [url referer]
  (if +restricted+
    (page-not-found)
    (let [response (fetch-url (base64dec url) :headers {"Referer" (base64dec referer)})]
      (page-found ((:headers response) "Content-Type") (:content response)))))

;; misk ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmacro with-meta-from [obj recipient]
  `(with-meta ~recipient (meta ~obj)))

(defmacro alter-meta [obj & kv]
  `(let [obj# ~obj]
     (with-meta obj# (apply assoc (cons (meta obj#) ~kv)))))

(defn distinct-by [f coll]
  (loop [xs coll out (transient []) seen #{}]
    (let [x (first xs)
          p (f x)]
      (if x
        (recur (next xs) (if (contains? seen p) out (conj! out x)) (conj seen p))
        (persistent! out)))))
                
(defn get-uuid
  "Get globally unique identifier."
  []
  (.replaceAll (str (java.util.UUID/randomUUID)) "-" ""))

(defn render
  "Transforms an enlive template to string."
  [nodeset]
  (apply str (enlive/emit* nodeset)))

(defn sanitize
  "Escape a string for insertion into HTML code."
  [content]
  (str/escape content {\< "&lt;" \> "&gt;" \" "&quot;" \' "&#39;"}))

(defn timestamp []
  (long (/ (System/currentTimeMillis) 1000)))
  
(defn get-stacktrace [e]
  (let [strw (java.io.StringWriter.)
        prnw (java.io.PrintWriter. strw)]
    (.printStackTrace e prnw)
    (.toString strw)))

(defn str->int [s]
  (try
    (Integer/parseInt s)
    (catch Throwable e 0)))