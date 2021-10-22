function readFile(callback){
    console.log("reading a large file");
    setTimeout(function(){
        for (let i=0; i<5; i++){
            let data="Hello World";

        
        console.log("Finished reading file");
        callback(data);
        }
    },2000);

}

function processFileContents(filecontents){
    console.log("processing file contents"+filecontents);
}
function computeSum(){
    console.log("computing sum of numbers");

}
    console.log("program callstack ends");
    let fileData= readFile(processFileContents);
    computeSum();
    console.log("Program callstack ends");