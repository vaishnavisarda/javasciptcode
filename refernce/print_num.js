s
// Print numbers from 1 to 10
console.log("Numbers from 1 to 10");
for(i=0;i<=10;i++){
    console.log(i);
}

// Print the odd numbers less than 100
console.log("Odd numbers less than 100");
for(let i=1;i<=100;i++){
if(i % 2!==0){
    
        console.log(i);
    }
}

// Print the multiplication table with 7
console.log("Table of 7");
for(let i=1;i<=10;i++){
    let table =  7 * i;
    console.log(table);
}

//Print all the multiplication tables with numbers from 1 to 10

for(let i =1;i<=10;i++){
    table(i);

}

function table(a){
    console.log("Tables from 1 to 10");
    for(let i=1;i<=10;i++)
    {
        let mul_table = a*i;
      
        console.log(mul_table);
    }
}

// Calculate the sum of numbers from 1 to 10
let sum=0;

for(let i=0;i<=10;i++){
    sum +=i;
}
console.log("Sum of numbers from 1 to 10");
console.log(sum);

//Calculate 10!

let calc=1;
console.log("product of numbers from 1 to 10");

for(let i=1;i<=10;i++){
    calc*= i; 
}
 console.log(calc);

// Calculate the sum of odd numbers greater than 10 and less than 30

let odd_num=0;
console.log("odd numbers between 10 to 30");
for(let i=11;i<=29;i+=2){
    //if(i % 2!==0){
        odd_num += i;
    }
    console.log(odd_num);

// Create a function that will convert from Celsius to Fahrenheit

function celtofehr(a){
    return (a * 9/5) + 32; 
   
}
console.log("celcius to fahrenheit");
console.log(celtofehr(20));

//Create a function that will convert from Fahrenheit to Celsius


function fehrtocelc(a){
    return (a -32)*5/9; 
}

console.log("fahrenheit to celcius");
console.log(fehrtocelc(68));

// Calculate the sum of numbers in an array of numbers

let arr=[1,2,3,4,5,6,7,8,9];
console.log("sum of numbers");
function sumofnum(num){

    let ans =0;
    for(let i=0; i<=arr.length;i++){
        ans+= arr[i];
    }
    return ans;

}
console.log(sumofnum(arr));

//Calculate the average of the numbers in an array of numbers

let array =[1,2,3,4,5,6,7];
console.log("average numbers");
function avgarray(ar){
    let n=array.length;
    let sum =0;

    for(let i =0;i<n ;i++){
        sum += array[i];
    }
    return sum/n;
}

console.log(avgarray(array));

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

let ar2=[-2,-9,12,7,8,-7];
console.log("positive numbers");
function positivenum(arg){
    let ar1 =[];

    for(let i=0;i<ar2.length;i++){
        let el =ar2[i];

        if(el >=0){
            ar1.push(el)
        }
    }
    return ar1;
}

console.log(positivenum(ar2));

// Find the maximum number in an array of numbers

let ar =[-6,-9,8,7,2,3];
console.log("maximum number");
function findMaximun(ar){
    let max = ar[0];

    for(let i=0;i<ar.length;i++){
        if(ar[i] > max){
            max = ar[i];
        }
    }
    return max;
}

console.log(findMaximun(ar));

// Print the first 10 Fibonacci numbers without recursion

let f1 =0;
console.log(f1);

let f2 =1;
console.log(f2);

for(let i=2;i < 10;i++){
    let fi=f1+f2;

    console.log(fi);

    f1=f2;
    f1=fi;
}
//Create a function that will find the nth Fibonacci number using recursion

let n=findfibonacci(10);
console.log("Fibonacci series");
function findfibonacci(n){
    if(n==0)
        return 0;

    if(n==1)
        return 1;

        return findfibonacci(n-1)+findfibonacci(n-2);
}
console.log(n);
        
    // Create a function that will return a Boolean specifying if a number is prime

    function isPrime(n){
        console.log("Prime number");
        if(n<2)
        return false;

        if(n==2)
        return true;

        let maxDiv =Math.sqrt(n);
       
        for(let i =2;i<= maxDiv;i++){
            if(n % i==0){
                return false;
            }
        }
        return true;
    }

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));

// Calculate the sum of digits of a positive integer number

    function sumDigits(n){
        console.log("positive integer number");
        let s=n.toString();
        let sum =0;
        for(let char of s){
            let digit =parseInt(char);
            sum += digit;
        }
        return sum;

    }
    console.log(sumDigits(12345671));
   
    //