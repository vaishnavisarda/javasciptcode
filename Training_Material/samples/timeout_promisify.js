let promisify = require('util').promisify;

(async () => {

    let timeoutPromise = promisify(setTimeout);
    await timeoutPromise(10000);
    console.log("after 10 seconds");
})()
