// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
 // DrEvil(10): 10 dollars
 // DrEvil(1000000): 1000000 dollars (pinky)

function DrEvil(arg){
    if(arg ==1000000){
        console.log (`${arg}  dollars (pinky)`);
    }
    else{
        console.log(`${arg} dollars`);
    }

}
DrEvil(1000000);
DrEvil(4000);