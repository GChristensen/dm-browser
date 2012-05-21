exports.main = function(options) 
{
  var tabs = require("tabs");
  var self = require("self");
  var ch = require("chanhandler");
  var prefs = require("simple-prefs");
  var toolbarbutton = require("toolbarbutton");
  var {Cc, Ci} = require("chrome");

  var loc = prefs.prefs.dmBrowserLocation;

  prefs.on("dmBrowserLocation", function (prefName) 
  {
      loc = prefs.prefs[prefName];
  });

  var tbb = new toolbarbutton.ToolbarButton({
    id: "dm-button",
    label: "'Dark Matter' browser manual",
    image: self.data.url("help.png"),
    onCommand: function () 
    {

//        var WindowMediator = Cc['@mozilla.org/appshell/window-mediator;1']  
//                .getService(Ci.nsIWindowMediator);  
//        var browser = WindowMediator.getMostRecentWindow('navigator:browser');  

//          browser.document.getElementById("urlbar").value = browser.document.getElementById("urlbar").value + ":2p";
        
        tabs.open(self.data.url("manual.html"));
    }
  });

  if (prefs.prefs.dmAddToToolbar)
  {
    tbb.moveTo({
      toolbarID: "nav-bar",
      //insertbefore: "urlbar-container",
      forceMove: false 
    });
  }
};
