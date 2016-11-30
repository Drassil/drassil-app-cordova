#!/usr/bin/env node

var conf={};
try {
    conf = require("./run-conf.js"); 
} catch (e) {
    conf = require("./run-conf.def.js");
}

var phonegap=require("phonegap");

console.log("Serving phonegap...");
phonegap.serve(conf);