// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs,
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(a,b){
    if(a>b){
        console.log(`The greater number of ${a} and ${b} is ${a}`);
    }
    else{
        console.log(`The greater number of ${b} and ${a} is ${b}`);
    }
}
greaterNum(5,10);
greaterNum(20,8);
