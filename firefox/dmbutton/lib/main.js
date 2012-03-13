exports.main = function(options) 
{
  var tabs = require("tabs");
  var self = require("self");
  var unload = require("unload");
  var prefs = require("simple-prefs");
  var toolbarbutton = require("toolbarbutton");
  var notifications = require("notifications");

  var loc = prefs.prefs.dmBrowserLocation;
  localLaunch = false;

  prefs.on("dmBrowserLocation", function (prefName) 
  {
      loc = prefs.prefs[prefName];
  });

  function run_dmbrowser(in_args)
  {
      var ls = loc.lastIndexOf("/");
      if (ls == -1) ls = loc.lastIndexOf("\\");
      var appDir = loc.substr(0, ls + 1);
      var appScript = appDir + "application.lispx";

      var {Cc, Ci} = require("chrome");

      var args = [appScript, appDir.replace(/\\/g, "/")].concat(in_args);

      var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
      file.initWithPath(loc);

      var process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
      process.init(file);
      process.runAsync(args, args.length);
  }


  unload.when(function () 
  {
    if (localLaunch)
      run_dmbrowser(["--silent", "close"]);
  });


  var tbb = new toolbarbutton.ToolbarButton({
    id: "dm-button",
    label: "'Dark Matter' Browser",
    image: self.data.url("icon.png"),
    onCommand: function () 
    {
      if (loc == "")
      {
        notifications.notify({
          title: "Dark Matter Button",
          text: "Please set up the browser location in the addon preferences",
        });
      }
      else
      { if (loc.length > 1 && (loc[0] == "/" || loc[1] == ":"))
        {
          localLaunch = true;
          run_dmbrowser([]);

          /*var timer = Cc["@mozilla.org/timer;1"].createInstance(Ci.nsITimer);
          timer.initWithCallback(function () { tabs.open("http://localhost:8095"); }, 1400, 0);*/
        }                 
        else
        {
          tabs.open(loc);
        }
      }          
    }
  });

  if (prefs.prefs.dmAddToToolbar)
  {
    tbb.moveTo({
      toolbarID: "nav-bar",
      insertbefore: "urlbar-container",
      forceMove: false 
    });
  }
};
