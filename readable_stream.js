let fs= require('fs');
let readstream = fs.createReadStream('Data.txt',{encoding:'utf-8',highWaterMark:100});
readstream.on('data',(datachunk)=>{
    console.log("Datachunk "+datachunk);
    //ws.write(datachunk);
});

let a = +"3";

readstream.on('end',(datachunk)=>{
        console.log("Finished reading the file");
})

readstream.on("error",(errorObj)=>{
    //error handling
})