// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


let i=0;
let j=1;
for(i=1;i<=5;i++){
    console.log(`This is table of ${i}`);
    for(j=1;j<=10;j++){
        let result=i*j;
        
        console.log (`${i} * ${j} = ${result}`);

    }
    
   
}