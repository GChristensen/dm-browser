(ns application
  (:require [lenegro.api :as api]
            [lenegro.core :as core]
            [appengine-magic.core :as gae]))

(gae/start api/lenegro-app :port 28095)
                                        
(when (not (some #(= % "no  t-interactive") lispx/*argv*))
  (.browse (java.awt.Desktop/getDesktop) (java.net.URI. "http://localhost:28095")))
