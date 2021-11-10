const { re } = require("mathjs");
console.log("writing in the file starts");
let fs=require('fs');
let writeStream = fs.createWriteStream('sample.txt');
let writeStream2= fs.createWriteStream('DataCopy.txt');

//let rs = fs.createReadStream('Data.txt');
//rs.pipe(writeStream2);  //streams can be piped..
writeStream.write("Tutorial on stream");
writeStream.write("Tutorial on stream");
writeStream.write("Tutorial on stream");
writeStream.write("Tutorial on stream");
writeStream.end(); //no more writes after this..
//writeStream.write("Error");
console.log("It writes");
writeStream.on("finish",()=>{
    console.log("writes complete");
})

writeStream.on("close",()=>{
    console.log("closing");
})

writeStream.on("error",()=>{
    console.log("Error occured");
})


let rs = fs.createReadStream('Data.txt');
rs.pipe(writeStream2);  //streams can be piped..