;; A routine to compile ClojureScript files from the ClojureScritp Clojure REPL
;; It's necessary to start the REPL in the project directory to use this file

(require '[cljs.closure :as cljsc])

(defn buildjs [file optimizations]
  (cljsc/build (str "src/lenegro/" file ".cljs")
	   {:optimizations optimizations
	    :externs ["externs.js"]
        :output-dir "war/js"
	    :output-to  (str "war/js/" file ".js")}))

