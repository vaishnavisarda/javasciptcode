const { exec } = require("child_process");

async function as() {
    let promise = new Promise((resolve, reject) => {
        console.log("Execution start");
        setTimeout(() => {
            console.log("Calling after 5 sec");
            resolve();
        }, 3000)
    });
    console.log("Execution end");
    console.log("Callback will be called after 5 seconds");
    try {
        await promise
        console.log("After timeout");
        await new Promise((resolve, reject) => {
            console.log("After successful timeout execution");
            exec("ls", function (error, stdout, stderr) {
                if (error) {
                    reject();
                }
                else {
                    console.log("first ls ");
                    resolve();
                }
            })
        })
    } catch (err) {
        console.log("error occured");
    }
    await new Promise((resolve, reject) => {
        exec("touch file1.txt", function (error, stdout, stderr) {
            if (error) {
                reject();
                //checkFiles(stdout)
                //console.log("file 1");
            }
            else {
                resolve();
            }
        })
    })


    await new Promise((resolve, reject) => {
        exec("ls", function (error, stdout, stderr) {
            if (error) {
                reject();
            }
            else {

                resolve();
                console.log("second ls");
                checkFiles(stdout);
            }
        })
    })
    await new Promise((resolve, reject) => {
        exec("touch file2.txt", function (error, stdout, stderr) {
            if (error) {
                reject();
            }
            else {

                resolve();
                //console.log("file 2");
            }
        })
    })

    await new Promise((resolve, reject) => {
        exec("ls", function (error, stdout, stderr) {
            if (stdout) {
                resolve();
                console.log("third ls");
                checkFiles(stdout);


            }
            else {
                reject();
            }
        })
    })

    //console.log("Callback will be called after 5 seconds");

    function checkFiles(stdout) {
        if (stdout.search("file1.txt") != -1) {
            console.log("Found file1");
        }
        if (stdout.search("file2.txt") != -1) {
            console.log("Found file2");
        }
    }

}

as();

