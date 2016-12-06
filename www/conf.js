function addCss(fileName) {
   var link = '<link rel="stylesheet" type="text/css" href="' + fileName + '">'
   $('head').append(link)
}

addCss('drassil-app/style.css');


window.afwk_config={
    "appTitle": "DrassilApp",
    "url": "",
    "urlCrossOrigin": "",
    "skipAjaxCheck": true,
    "skipConnCheck" : true,
    "customScript": "drassil-app/drassil-main.js",
    "loadType": "iframe",
    "iframeTarget" : "#wrapper",
    "evalPostMessage": false
}
