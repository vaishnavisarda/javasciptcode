"use strict"
const http = require('http');

function requestHandler() {
    console.log("Request Handler");
}

function tempFunc(){
    console.log("This is a tempFunc");
}

let varFunc = function() {
    console.log("This is varFunc");
}
//http.createServer(requestHandler);

function withCallback(callback) {
    console.log('withCallback', callback);
    callback(1);
}

//withCallback(requestHandler);
let someFunc = tempFunc;
console.log(tempFunc);
console.log(typeof tempFunc);
console.log(someFunc);
console.log(typeof someFunc);
console.log(varFunc);
console.log(typeof varFunc);
withCallback(tempFunc);//let a = 1; someFunc(a)
withCallback(function(input) {//someFunc(1)
    console.log("Annonymous callback", input);
});