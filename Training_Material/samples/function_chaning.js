"use strict"
const http = require('http');

// http.createServer(function(){

// }).listen(8888);

function someFunc() {
    console.log("Some Func");
}

function withCallback(callback) {
    console.log("withCallback");
    callback();
    return {
        later() {
            console.log("later");
        }
    }
}

withCallback(someFunc).later();