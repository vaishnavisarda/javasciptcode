const requestHandlers = require('./requestHandlers');

function route(pathName, res) {
    console.log("In router ", pathName);
    switch (pathName) {
        case "/start":
            requestHandlers.end(res);
            break;
        case "/upload":
            requestHandlers.upload(res);
            break;
        case "/notFound":
            requestHandlers.notFound(res);
            break;
        case "/":
            requestHandlers.def(res);
            break;
            
        default:
            requestHandlers.nodata(res);
    }

}

exports.route = route;