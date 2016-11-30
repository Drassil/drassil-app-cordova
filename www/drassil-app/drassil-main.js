'use strict';

var appFramework = window.appFramework;

var host = "127.0.0.1";
var port = 60500;


var app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;

var url = app ? "http://app.drassil.net/" : "http://" + host + ":" + port + "/";

if (!appFramework.getConf("url")) {
    appFramework.setConf("url", url);
}

// *
// * Definiamo cosa aprire nell'iframe.
// *
var appDomainUrl = appFramework.getConf("url");


// *
// * Non modificare i seguenti parametri...
// *
var appVersion = appFramework.getConf("version");
//var appDeviceId				=		device.uuid; // questo parametro in iOs cambia ad ogni installazione, TODO: usare plugin Cordova.
//var appDevicePlatform                   =		device.platform.toLowerCase();
//var appParams 				=		"?version="+appVersion+"&platform=phonegap&phoneID=" + appDeviceId + "&deviceplatform=" + appDevicePlatform;
var origUrl = appDomainUrl; //+ appParams;

// run external app
appFramework.loadExternal({
    onReady: function () {
        // restore original url ( can be changed by notifications )
        appFramework.setConf("url", origUrl);
    }
});

//# sourceURL=drassil_browser.js