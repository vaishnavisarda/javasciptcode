// // You're starting your own credit card business. You need to come up with a 
//new way to validate credit cards with a simple function called validateCreditCard
// that returns true or false.
// // Here are the rules for a valid number:

// // Number must be 16 digits, all of them must be numbers
// // You must have at least two different digits represented (all of the digits
// cannot be the same)
// // The final digit must be even
// // The sum of all the digits must be greater than 16
// // The following credit card numbers are valid:

// // 9999777788880000
// // 6666666666661666
// // The following credit card numbers are invalid:

// // a92332119c011112 invalid characters
// // 4444444444444444 only one type of number
// // 1111111111111110 sum less than 164
// // 6666666666666661 odd final number

function creditcard(num) {
    //console.log(typeof num)
    if (num.length !== 16) {
        return false;
    }
    else {
        let sum = 0;

        num = parseInt(num, 10);

        if (Number.isInteger(num)) {
            if (num % 2 == 0) {
                while (num) {
                    sum += num % 10;
                    num = Math.floor(num / 10);

                }
            }
            // else{
            //     return false;
            // }
            if (sum > 16) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }

    }
}

//console.log(creditcard('8700000000000000'))
//it will go in else on line 26  ..
console.log(creditcard('11111111111111'));
console.log(creditcard('1111111111111211'));
console.log(creditcard('1111111111111020'));//Failure
console.log(creditcard('8700000000000000'));//failure
console.log(creditcard('abcdefghijklmnop'));
console.log(creditcard('92939302344'));
console.log(creditcard('8333ghgg2939302344'));
console.log(creditcard('8334ghgg2939302344'));
console.log(creditcard('1111111111111113'));
console.log(creditcard('1111111111111201'));
console.log(creditcard('8333992939302344'));
console.log(creditcard('8333992939302343'));
console.log(creditcard('1111144444444444'));
