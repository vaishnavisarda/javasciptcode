// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum( a,b){
    if(a<b){
        console.log(`The greater number between ${a} and ${b} is ${b}`);
    }
    else {
        console.log(`The greater number between ${a} and ${b} is ${a}`);
    }
}

greaterNum(3,6);
greaterNum(6,1);
greaterNum(10,10.5);