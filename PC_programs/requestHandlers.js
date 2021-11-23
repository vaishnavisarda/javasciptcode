let exec = require("child_process").exec;
let util = require('util');

async function end(res) {
    // console.log("Start request handler called");
    try {
        // function execPromise(cmd) {
        //     return new Promise((resolve, reject) => {
        //         exec(cmd, function (error, stdout, stderr) {
        //             if (error) {
        //                 console.log("Error is", error);
        //                 reject(error);
        //             }
        //             else {
        //                 console.log("Output is", stdout);
        //                 resolve({ stdout, stderr });
        //             }
        //         });
        //     })
        // }
        let execPromise = util.promisify(exec);
        let content = await execPromise("ls -lah");
        console.log(content);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(content.stdout);
        res.end();
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write("Internal Server Error");
        res.end();
    }
}


function upload(res) {
    console.log("Upload request handler called");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("<html>Upload</html>");
    res.end();
}

function notFound(res) {
    console.log("notFound request handler called");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("<html>Not Found</html>");
    res.end();
}
function def(res) {
    console.log("This is default page");
    res.end();
}

function nodata(res) {
    console.log("This page has no data");
    res.end();
}

//definition //body 
function name(input1, input2, input3) {



    //return output;
    //undefined
}

let outputOFFunction = name();

exports.end = end;
exports.upload = upload;
exports.notFound = notFound;
exports.def = def;
exports.nodata = nodata;


    // function timeout(milliSeconds) {
    //     var startTime = new Date().getTime();//1000
    //     // 1001 1002 1003
    //     // < (1000+5000)
    //     while (new Date().getTime() < (startTime + milliSeconds)){

    //     }
    // }


    // timeout(5000);
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write("Response after 5 secs");
    // res.end();

    // function timeout(milliSeconds) {
    //     return  new Promise((resolve, reject) => {
    //         setTimeout(function () {
    //             resolve();
    //         }, milliSeconds);
    //     });
    // }

    // function timeout(milliSeconds) {
    //     let promise = new Promise((resolve, reject) => {
    //         setTimeout(function () {
    //             resolve();
    //         }, milliSeconds);
    //     });
    //     return promise;
    // }

    // try {
    //     await timeout(5000)
    //     res.writeHead(200, { 'Content-Type': 'text/plain' });
    //     res.write("Response after 5 secs");
    //     res.end();
    // } catch (error) {
    //     res.writeHead(500, { 'Content-Type': 'text/plain' });
    //     res.write("Internal server error");
    //     res.end();
    // }

    // timeout(5000)
    //     .then(() => {
    //         res.writeHead(200, { 'Content-Type': 'text/plain' });
    //         res.write("Response after 5 secs");
    //         res.end();
    //     })
    //     .catch(() => {
    //         res.writeHead(500, { 'Content-Type': 'text/plain' });
    //         res.write("Internal server error");
    //         res.end();
    //     })


    // setTimeout(function () {
    //     res.writeHead(200, { 'Content-Type': 'text/plain' });
    //     res.write("Response after 5 secs");
    //     res.end();
    // }, 5000);

    // await new Promise((resolve, reject) => {
    //     setTimeout(function () {
    //         resolve();
    //     }, 5000);
    // })
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write("Response after 5 secs");
    // res.end();

