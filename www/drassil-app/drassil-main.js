'use strict';

var appFramework = window.appFramework;

var host = "127.0.0.1";
var port = 60500;


var app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;

var url = app ? "http://app.drassil.net/" : "http://" + host + ":" + port + "/";

if (!appFramework.getConf("url")) {
    appFramework.setConf("url", url + "?platform=cordova");
}

jQuery.getScript(url+"src/platform-cordova/remote-main.js", function () {
    console.log("custom script loaded");
}).fail(function (jqxhr, settings, exception) {
    console.log(exception);
});
