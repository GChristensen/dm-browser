;; -*- coding: utf-8 -*-

(ns lenegro.default-settings
  (:require [lenegro.api :as api]))

(def science-videos
  [
   "http://www.youtube.com/v/9vCTlNnJAk0"
   "http://www.youtube.com/v/2W-XGwOdDIM"
   "http://www.youtube.com/v/F4hQ4J4BFOM"
   "http://www.youtube.com/v/P9sQZLtsfp8"
   "http://www.youtube.com/v/BoUGktCvoCE"   
   "http://www.youtube.com/v/6bZa4J3wHSw"
   "http://www.youtube.com/v/K-N8xYPLdww"
   "http://www.youtube.com/embed/akek6cFRZfY"
   "http://www.youtube.com/embed/DZGINaRUEkU"
   "http://www.youtube.com/embed/f0vlrTVC2tQ"
   "http://www.youtube.com/embed/JB7jSFeVz1U"
   "http://www.youtube.com/embed/1HBkZPyfpdE"
   "http://www.youtube.com/v/1PT90dAA49Q"
   "http://www.youtube.com/v/BZ5sWfhkpE0"
   "http://www.youtube.com/v/9Cd36WJ79z4"
   "http://www.youtube.com/v/hOLAGYmUQV0"
   "http://www.youtube.com/v/vioZf4TjoUI"
   "http://www.youtube.com/v/XGK84Poeynk"
   "http://www.youtube.com/v/zSgiXGELjbc"
   ])
  
(def default-settings
  {:wf-enabled true, 
   :favorites-parsed [{:menu "2ch.ec", :items ["2ch.ec/a:3p" "2ch.ec/aa:3p" "2ch.ec/b:10p" "2ch.ec/bi:3p" "2ch.ec/bo:3p" "2ch.ec/c:3p" "2ch.ec/cp:3p" "2ch.ec/de:3p" "2ch.ec/di:3p" "2ch.ec/diy:3p" "2ch.ec/em:3p" "2ch.ec/fa:3p" "2ch.ec/fiz:3p" "2ch.ec/fl:3p" "2ch.ec/hw:3p" "2ch.ec/int:3p" "2ch.ec/ma:3p" "2ch.ec/me:3p" "2ch.ec/mu:3p" "2ch.ec/p:3p" "2ch.ec/pa:3p" "2ch.ec/po:3p" "2ch.ec/pr:3p" "2ch.ec/ra:3p" "2ch.ec/rf:3p" "2ch.ec/s:3p" "2ch.ec/sci:3p" "2ch.ec/sp:3p" "2ch.ec/t:3p" "2ch.ec/tv:3p" "2ch.ec/vg:3p" "2ch.ec/wm:3p" "2ch.ec/wp:3p"]} {:menu "4chan.org", :items ["4chan.org/a" "4chan.org/adv" "4chan.org/b:15p" "4chan.org/c" "4chan.org/ck" "4chan.org/co" "4chan.org/diy" "4chan.org/e:15p:img:rev:prox" "4chan.org/fa" "4chan.org/g" "4chan.org/ic" "4chan.org/int" "4chan.org/jp" "4chan.org/k" "4chan.org/lit" "4chan.org/m" "4chan.org/mu" "4chan.org/p" "4chan.org/po" "4chan.org/pol" "4chan.org/sci" "4chan.org/sp" "4chan.org/toy" "4chan.org/trv" "4chan.org/tv" "4chan.org/v" "4chan.org/w" "4chan.org/wg"]} {:menu "7chan.org", :items ["7chan.org/777:2p" "7chan.org/a:2p" "7chan.org/b" "7chan.org/co:2p" "7chan.org/hi:2p" "7chan.org/lit:2p" "7chan.org/me:2p" "7chan.org/phi:2p" "7chan.org/pr:2p" "7chan.org/sci:2p" "7chan.org/vg:2p" "7chan.org/w:2p" "7chan.org/wp:2p"]} {:menu "iichan.hk", :items ["410chan.ru/cu:2p" "410chan.ru/dev:2p" "iichan.hk/[a,vg,ma:2p,mu:2p,tv:1p,l:1p,fi:1p]:3p" "iichan.hk/a" "iichan.hk/aa:2p" "iichan.hk/an:2p" "iichan.hk/b" "iichan.hk/fi:2p" "iichan.hk/gf:2p" "iichan.hk/hr:2p" "iichan.hk/jp:2p" "iichan.hk/l:3p" "iichan.hk/m:3p" "iichan.hk/ma:3p" "iichan.hk/me:2p" "iichan.hk/med:2p" "iichan.hk/mi:2p" "iichan.hk/mu:3p" "iichan.hk/ph:2pn" "iichan.hk/r:3p" "iichan.hk/s:3p" "iichan.hk/sci:3p" "iichan.hk/sp:2p" "iichan.hk/t:2p" "iichan.hk/tran:3p" "iichan.hk/tv:3p" "iichan.hk/vg:3p" "iichan.hk/w:2p" "nowere.net/tu:2p"]} "0chan.ru/b:2p" "2--ch.ru/b:2p" "5channel.net/b:2p" "dobrochan.ru/b:2p" "gurochan.net/g:2p:img:prox" "ichan.org/b:3p:prox" "kei.iichan.net/fem:2p:img" "krautchan.net/int:5p" "nowere.net/b:2p" "wakachan.org/unyl:2p:prox"], 
   :wf-post "#(?i)\\brpg\\b\ntoho\ntouho\nrozen\n#(?i)\\bрпг\\b\nтохо\n#(?i)\\bсу[ий]к\n#(?i)\\bре[ий]му\n#марис[ауеы]\n#(?i)\\bнип(?:[аеуы]|(?:ой))\\b\n#(?i)\\bпони\\b\nпоней\nнофап\nпростой парень из дс\n#(?i)\\bдрон\nджедем\n#Анонимный,\n#, ?анонимный[^ ]\nmizore\nхавко\nхавок\n#(?i)\\bкоа\\b\n#(?i)\\bкоа(?:ку|[^лк][^ис])\n#(?i)[kк][aа]н[aа]к\nкирюш\n#(?i)\\bсорк[ау]?\n^_^\n#[ ]^^\n?..\n#\\.\\.\\..*\\.\\.\\.\n#[^?]\\?\\?(?:[^?]|$)\n#[^!]!!(?:[^!]|$)", 
   :wf-post-parsed [#"(?i)\bсорк[ау]?" "touho" #"(?i)\brpg\b" "toho" "поней" "хавок" "mizore" #"Анонимный," #"(?i)\bсу[ий]к" "rozen" #"(?i)\bкоа\b" #"\.\.\..*\.\.\." #", ?анонимный[^ ]" "джедем" "простой парень из дс" #"(?i)\bре[ий]му" "хавко" #"(?i)\bдрон" #"[ ]^^" #"(?i)\bрпг\b" #"[^?]\?\?(?:[^?]|$)" #"(?i)\bкоа(?:ку|[^лк][^ис])" "нофап" #"марис[ауеы]" #"(?i)[kк][aа]н[aа]к" "тохо" #"(?i)\bнип(?:[аеуы]|(?:ой))\b" #"[^!]!!(?:[^!]|$)" "кирюш" #"(?i)\bпони\b" "^_^" "?.."], 
   :wf-title "#(?i)\\brpg\\b\ntoho\ntouho\ngenso\nrozen\nponey\npony\n#(?i)\\bрпг\\b\nтохо\nгенсо\nнипа\n#(?i)нип(?:[аеуы]|(?:ой))\n#(?i)\\bпони\\b\nпонитред\nлесли\nstephanie\nкуклочан\nпетросян\n#попис[ая]ла\n#[^!]!!(?:[^!]|$)\nO.M.S.K.\nOMSK", :fav-start (), :always-calc-delta true, 
   :wf-title-parsed ["куклочан" "touho" "toho" #"(?i)\bпони\b" #"(?i)\bрпг\b" "poney" "лесли" "петросян" "stephanie" "rozen" #"попис[ая]ла" "pony" "нипа" "genso" #"(?i)нип(?:[аеуы]|(?:ой))" #"[^!]!!(?:[^!]|$)" "тохо" "omsk" "понитред" "генсо" #"(?i)\brpg\b" "o.m.s.k."],
   :favorites "4chan.org$4chan.org/a\n4chan.org$4chan.org/c\n4chan.org$4chan.org/w\n4chan.org$4chan.org/m\n4chan.org$4chan.org/jp\n4chan.org$4chan.org/v\n4chan.org$4chan.org/co\n4chan.org$4chan.org/g\n4chan.org$4chan.org/tv\n4chan.org$4chan.org/k\n4chan.org$4chan.org/sp\n4chan.org$4chan.org/sci\n4chan.org$4chan.org/int\n4chan.org$4chan.org/po\n4chan.org$4chan.org/p\n4chan.org$4chan.org/ck\n4chan.org$4chan.org/ic\n4chan.org$4chan.org/wg\n4chan.org$4chan.org/mu\n4chan.org$4chan.org/fa\n4chan.org$4chan.org/toy\n4chan.org$4chan.org/diy\n4chan.org$4chan.org/e:15p:img:rev:prox\n4chan.org$4chan.org/trv\n4chan.org$4chan.org/lit\n4chan.org$4chan.org/adv\n4chan.org$4chan.org/b:15p\n4chan.org$4chan.org/pol\n7chan.org$7chan.org/777:2p\n7chan.org$7chan.org/b\n7chan.org$7chan.org/lit:2p\n7chan.org$7chan.org/phi:2p\n7chan.org$7chan.org/pr:2p\n7chan.org$7chan.org/sci:2p\n7chan.org$7chan.org/w:2p\n7chan.org$7chan.org/a:2p\n7chan.org$7chan.org/co:2p\n7chan.org$7chan.org/hi:2p\n7chan.org$7chan.org/me:2p\n7chan.org$7chan.org/vg:2p\n7chan.org$7chan.org/wp:2p\niichan.hk$iichan.hk/b\niichan.hk$iichan.hk/vg:3p\niichan.hk$iichan.hk/hr:2p\niichan.hk$iichan.hk/gf:2p\niichan.hk$iichan.hk/an:2p\niichan.hk$iichan.hk/tran:3p\niichan.hk$iichan.hk/tv:3p\niichan.hk$iichan.hk/l:3p\niichan.hk$iichan.hk/m:3p\niichan.hk$iichan.hk/med:2p\niichan.hk$iichan.hk/mu:3p\niichan.hk$iichan.hk/sci:3p\niichan.hk$iichan.hk/w:2p\niichan.hk$iichan.hk/mi:2p\niichan.hk$iichan.hk/r:3p\niichan.hk$iichan.hk/sp:2p\niichan.hk$iichan.hk/t:2p\niichan.hk$410chan.ru/cu:2p\niichan.hk$410chan.ru/dev:2p\niichan.hk$nowere.net/tu:2p\niichan.hk$iichan.hk/ph:2pn\niichan.hk$iichan.hk/s:3p\niichan.hk$iichan.hk/jp:2p\niichan.hk$iichan.hk/a\niichan.hk$iichan.hk/aa:2p\niichan.hk$iichan.hk/ma:3p\niichan.hk$iichan.hk/me:2p\niichan.hk$iichan.hk/fi:2p\n2ch.ec$2ch.ec/bi:3p\n2ch.ec$2ch.ec/bo:3p\n2ch.ec$2ch.ec/c:3p\n2ch.ec$2ch.ec/di:3p\n2ch.ec$2ch.ec/em:3p\n2ch.ec$2ch.ec/fa:3p\n2ch.ec$2ch.ec/fiz:3p\n2ch.ec$2ch.ec/fl:3p\n2ch.ec$2ch.ec/hw:3p\n2ch.ec$2ch.ec/me:3p\n2ch.ec$2ch.ec/mu:3p\n2ch.ec$2ch.ec/po:3p\n2ch.ec$2ch.ec/pr:3p\n2ch.ec$2ch.ec/ra:3p\n2ch.ec$2ch.ec/s:3p\n2ch.ec$2ch.ec/sci:3p\n2ch.ec$2ch.ec/sp:3p\n2ch.ec$2ch.ec/t:3p\n2ch.ec$2ch.ec/tv:3p\n2ch.ec$2ch.ec/wm:3p\n2ch.ec$2ch.ec/de:3p\n2ch.ec$2ch.ec/diy:3p\n2ch.ec$2ch.ec/pa:3p\n2ch.ec$2ch.ec/p:3p\n2ch.ec$2ch.ec/rf:3p\n2ch.ec$2ch.ec/wp:3p\n2ch.ec$2ch.ec/vg:3p\n2ch.ec$2ch.ec/a:3p\n2ch.ec$2ch.ec/aa:3p\n2ch.ec$2ch.ec/ma:3p\n2ch.ec$2ch.ec/b:10p\n2ch.ec$2ch.ec/cp:3p\n2ch.ec$2ch.ec/int:3p\ngurochan.net/g:2p:img:prox\nwakachan.org/unyl:2p:prox\nkei.iichan.net/fem:2p:img\nichan.org/b:3p:prox\n0chan.ru/b:2p\n2--ch.ru/b:2p\ndobrochan.ru/b:2p\nnowere.net/b:2p\n5channel.net/b:2p\nkrautchan.net/int:5p"})

(defn get-default []
  (let [settings 
        {:watch-first true
         :always-calc-delta true
         :archive-disable api/+restricted+
         :wf-enabled nil
         :wf-title nil
         :wf-post nil
         :favorites nil
         :start-page "blank"
         :force-text nil
         :keepalive nil}]
    (when (not api/+pristine+)
      (merge settings default-settings))))