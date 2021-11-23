"use strict"
const http = require('http');
const url = require('url');


// function onRequest(req, res) {
//     console.log("Sumit", req.url);
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write("<html>Hello World</html>" + req.url);
//     res.end();
// }

// http.createServer(onRequest).listen(8888);

function start(route) {
    let server = http.createServer(function (req, res) {
        let parseUrl = url.parse(req.url);
        let pathName = parseUrl.pathname;
        route(pathName, res);
    });

    server.listen(8888);
    console.log("Server started");
}

exports.start = start;
exports.someVar = 10;