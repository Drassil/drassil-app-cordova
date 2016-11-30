#!/usr/bin/env node

var phonegap=require("phonegap");

var conf={};
try {
    conf = require("./run-conf.js"); 
} catch (e) {
    conf = require("./run-conf.def.js");
}

phonegap.serve(conf);