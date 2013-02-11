(defproject lenegro "0.2.0"
  :description ""
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [org.clojure/tools.macro "0.1.1"]
                 [compojure "1.0.1"]
                 [enlive "1.0.0"]
                 [clj-http "0.3.2"]
                 [clj-time "0.3.3"]]
  :profiles {:dev {:dependencies [[appengine-magic "0.5.0"]]}
             :user {:plugins [[lein-swank "1.4.4"]]}})