// // STARTS A LOCAL WEBSERVER
// FOR DEVELOPERS
var host = "127.0.0.1";
var port = 60500;


var url="http://"+host+":"+port+"/";

var runWeb=require("../web/run-module.js");

runWeb(host, port, true);

module.exports={
};

