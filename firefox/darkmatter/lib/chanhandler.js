  var xpcom = require("xpcom");
  var prefs = require("simple-prefs");

  var loc = prefs.prefs.dmBrowserLocation;
  localLaunch = false;

  prefs.on("dmBrowserLocation", function (prefName) 
  {
      loc = prefs.prefs[prefName];
  });

  var {Cc, Ci, Cu, Cr} = require("chrome");

  var {XPCOMUtils} = Cu.import("resource://gre/modules/XPCOMUtils.jsm");

  const nsIProtocolHandler = Ci.nsIProtocolHandler;

  exports.ChanProtocol = xpcom.Factory.new({
    register: true,
    description: "Imageboard Protocol Handler",
    contract: "@mozilla.org/network/protocol;1?name=chan",
    component: xpcom.Unknown.extend({ 
        interfaces: [ 'nsIProtocolHandler' ],
        scheme: "chan",
        protocolFlags: nsIProtocolHandler.URI_NOAUTH |
            nsIProtocolHandler.URI_LOADABLE_BY_ANYONE,

        newURI: function(aSpec, aOriginCharset, aBaseURI)
        {
            var uri = Cc["@mozilla.org/network/simple-uri;1"].createInstance(Ci.nsIURI);
            uri.spec = aSpec;
            return uri;
        },

        newChannel: function(aURI)
        {
            var ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
            var uri = null;

            if (aURI.spec == "chan:watch")
                uri = ios.newURI(loc + "/tab/self.ref/watch", null, null);
            else if (aURI.spec == "chan:archive")
                uri = ios.newURI(loc + "/tab/self.ref/archive", null, null);
            else if (aURI.spec == "chan:sing!")
                uri = ios.newURI(loc + "/tab/self.ref/sing", null, null);
            else
            {
                var resource = aURI.spec.substr(aURI.spec.indexOf("://") + 3).replace(/[,]/g,"%2C");
                uri = ios.newURI(loc + "/tab/" + resource, null, null);
            }

            var channel = ios.newChannelFromURI(uri, null).QueryInterface(Ci.nsIHttpChannel);
            return channel;
        }
    })
  });
