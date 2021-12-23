'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    //console.log(s);
    s=s.split(":");
   let hours = parseInt(s[0]);
   //let minutes =s[1].slice(2);
   let seconds = s[2].slice(0,2);
   let am_pm =s[2].slice(2);
   
   if((am_pm=="PM") &&(hours!==12)){
       hours+=12;
   }
   if((am_pm =="AM") && (hours==12)){
       hours="00";
   }
   else if(hours < 12){
       hours="0"+hours.toString();
   }
   else{
       hours=hours.toString();
   }
return  ([hours ,s[1] ,seconds].join(":")); 

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');
     ws.end();
}
