'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    //console.log(arr);
  arr.sort(function(a, b){return a - b});
    let slice_begin=(arr.slice(1,5));
      let sum=0;
    for(let i=0;i<slice_begin.length;i++){    
         sum+=slice_begin[i];
    } 
     //console.log(slice_begin);
            //console.log(sum);
   
      let slice_last =(arr.slice(0,4));
      let again_sum=0;
      for(let i=0;i<slice_last.length;i++){
          again_sum+=slice_last[i];
      }
      //console.log(again_sum);
       console.log(`${again_sum} ${sum}`);
     // console.log(slice_last);
     
     
}
 


function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
