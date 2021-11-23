// // You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
// // Here are the rules for a valid number:

// // Number must be 16 digits, all of them must be numbers
// // You must have at least two different digits represented (all of the digits cannot be the same)
// // The final digit must be even
// // The sum of all the digits must be greater than 16
// // The following credit card numbers are valid:

// // 9999777788880000
// // 6666666666661666
// // The following credit card numbers are invalid:

// // a92332119c011112 invalid characters
// // 4444444444444444 only one type of number
// // 1111111111111110 sum less than 16
// // 6666666666666661 odd final number

function creditcard(num) {
    if (num.length !== 16) {
        return false
    }
    else {
        
        for (let i = 0; i < num.length; i++) {
            let cardnum = num[i];
            cardnum = Number.parseInt(num[i]);
        }
            if (!Number.isInteger(num)) {
                let sum = 0;
                if(num % 2 !==0){
                    for(let i=0;i<num.length;i++){
                       sum+=num[i];
                       if(sum<=16){
                       return false;
                       }
                    }
                }
                else
                {
                return true;
                }
            }  
    }    
    return true;
}
console.log(creditcard('1111111111111112'));
console.log(creditcard('abcdefghijklmnop'));
console.log(creditcard('92939302344'));
console.log(creditcard('8333ghgg2939302344'));
console.log(creditcard('833399493930r344'));
console.log(creditcard('8333992939302344'));
console.log(creditcard('8333992939302343'));



