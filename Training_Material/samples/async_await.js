const { exec } = require("child_process");


// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 5000)
//     });

//     let result = await promise; // wait until the promise resolves (*)

//     console.log(result); // "done!"
//   }

//   f();

async function hello() {
    
    let promise = new Promise((resolve, reject) => {
        console.log("Execution start");
        exec("ls", function (error, stdout, stderr) {
            setTimeout(() => resolve("First ls executed"), 3000)
        });
    });

    let res = await promise;
    console.log(res);

    console.log("S")
}



hello();

