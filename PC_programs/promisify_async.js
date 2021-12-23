let exec = require("child_process").exec;
let util = require('util');

async function go() {
    let content;
    console.log("Execution start");
    let execPro = util.promisify(setTimeout);
    let exec_var = util.promisify(exec);

    try {
        console.log("Execution end");
        console.log("Callback will be called after 5 second");
        await execPro(5000);
        console.log("After Timeout");
        console.log("After successful timeout execution");
        content = await exec_var("ls");
        console.log("First ls");
        checkFiles(content.stdout);
        await exec_var("touch file1.txt");
        content = await exec_var("ls");
        console.log("Second ls");
        checkFiles(content.stdout);
        await exec_var("touch file2.txt");
        content = await exec_var("ls");
        console.log("Third ls");
        checkFiles(content.stdout);
    }
    catch (error) {
        console.log(error);
    }

    function checkFiles(content) {
        if (content.search("file1.txt") != -1) {
            console.log("Found file1");
        }
        if (content.search("file2.txt") != -1) {
            console.log("Found file2");
        }
    }

}
go();

