let exec = require("child_process").exec;

//ls
// touch file1.txt
//ls
// touch file2.txt
//ls

exec("ls", function (error, stdout, stderr) {
    console.log("First ls");
    checkFiles(stdout);
    exec("touch file1.txt", function (error, stdout1, stderr) {
        exec("ls", function (error, stdout2, stderr) {
            console.log("second ls");
            checkFiles(stdout2);
            exec("touch file2.txt", function (error, stdout3, stderr) {
                exec("ls", function (error, stdout4, stderr) {
                    console.log("third ls");
                    checkFiles(stdout4);
                })
            })
        })
    })
});

function checkFiles(stdout) {
    if (stdout.search("file1.txt") != -1) {
        console.log("Found file1");
    }
    if (stdout.search("file2.txt") != -1) {
        console.log("Found file2");
    }
    return;
}