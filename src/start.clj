(ns application
  (:require [lenegro.api :as api]
            [lenegro.core :as core]
            [appengine-magic.core :as gae]))

(gae/start api/lenegro-app :port 8095)

(.browse (java.awt.Desktop/getDesktop) (java.net.URI. "http://localhost:8095"))
