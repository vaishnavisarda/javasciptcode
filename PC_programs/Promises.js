let exec = require("child_process").exec;

// setTimeout(() => {
//     console.log("Calling after 5 seconds");
//     exec("ls", function (error, stdout, stderr) {
//         console.log(stdout, new Date());
//     });
//     console.log("Waiting for ls to execute", new Date())
// }, 5000);

new Promise((resolve, reject) => {
    console.log("Execution Start");
    setTimeout(() => {
        console.log("Calling after 5 seconds");
        resolve();
    }, 5000);
    console.log("Execution End");

}).then(() => {
    console.log("After successful timeout execution");
    return new Promise((resolve, reject) => {
        exec("ls", function (error, stdout, stderr) {
            if (error) {
                reject();
            } else {
                console.log("First ls");
                checkFiles(stdout);
                resolve();
            }
        })
    })

}, () => {
    console.log("After unsuccessful timeout execution");
}).then(() => {
    return new Promise((resolve, reject) => {
        exec("touch file1.txt", function (error, stdout, stderr) {
            if (error) {
                reject(error);
            } else {
                resolve(); 
            }
        });
    })

}, () => {
    console.log("After unsuccessful ls execution");

}).then(() => {
    return new Promise((resolve, reject) => {
        exec("ls", function (error, stdout, stderr){
              if (stdout) {
                  console.log("Second ls");
                  checkFiles(stdout);
                resolve();
            } else {                
               reject();
            }
        });
    })
        
             

}, () =>{
    console.log("After unsuccessful second ls execution");

}).then(()=>{
    return new Promise((resolve,reject) =>{
        exec("touch file2.txt",function(error,stdout,stderr){
            if(error){
                reject();
            }
            else{
                resolve();
            }
    });
})
},()=>{
    console.log("After unsuccessful execution of file2");
}).then(()=>{
    return new Promise((resolve,reject) =>{
        exec("ls", function(error,stdout,stderr){
            if(error){
                reject();
            }
            else{
                console.log("third ls")
                checkFiles(stdout);    
                resolve();
            }
        });
    })
},()=>{
    console.log("After unsuccessful execution");
}
)
console.log("Callback will be called after 5 seconds");

function checkFiles(stdout) {
    if (stdout.search("file1.txt") != -1) {
        console.log("Found file1");
    }
    if (stdout.search("file2.txt") != -1) {
        console.log("Found file2");
    }
    return;
}