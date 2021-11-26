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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    //console.log(arr);
    let sum=0;
    let num =0; 
    let a=0;  
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
       //console.log(arr.length);
        sum += arr[i];
        }
    }
    //console.log(sum);
    let counter=0;
        for(let i of arr){
            if(i>0){
                counter++;  
            }
        }
    //console.log(counter);
    let ans =counter/arr.length;
    //console.log(ans);
    let s=(ans).toFixed(6);
    console.log(s);
        for(let i=0;i<arr.length;i++){
            if(arr[i]<0){
               // console.log(arr.length);
                
                num+=arr[i];
            }
        } 
        let counts=0;
        for(let i of arr){
            if(i<0){
                counts++;
            }
        }
        let neg_ans=counts/arr.length
        let v=(neg_ans).toFixed(6);
        console.log(v);
        for(let i=0;i<arr.length;i++){
          if(arr[i]==0){
            //console.log(arr.length);
          }
        }
          let counters=0;
        for(let i of arr){
            if(i==0){
                counters++;
          
            }
        }
         let equal_ans =counters/arr.length;
           let t=(equal_ans).toFixed(6);
           console.log(t);

        }
function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
