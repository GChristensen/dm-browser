(ns lenegro.app_servlet
  (:gen-class :extends javax.servlet.http.HttpServlet)
  (:use lenegro.core lenegro.api)
  (:use [appengine-magic.servlet :only [make-servlet-service-method]]))


(defn -service [this request response]
  ((make-servlet-service-method lenegro-app) this request response))
