
function creditcard(num) {

    let nodashes ='';
    for(let i=0; i<num.length;i++){
        if(num[i] !== '-'){
            nodashes +=num[i];
        }
    }    
    if(nodashes % 1 !==0){
        return false;
    }
    if (isNaN(nodashes / 1)) {
        return false;
    }

    if (nodashes.length !== 16) {
        return false;
    }

    else {
        let sum = 0;
        num = parseInt(nodashes, 10);
        if (Number.isInteger(nodashes)) {
            if (num % 2 == 0) {
                while (num) {
                    sum += num % 10;
                    num = Math.floor(num / 10);
                }
            }
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
console.log(creditcard('11111111111111'));
console.log(creditcard('1111111111111211'));
console.log(creditcard('1111111111111020'));//Failure
console.log(creditcard('8700000000000000'));//failure
console.log(creditcard('abcdefghijklmnop'));
console.log(creditcard('92939302344'));
console.log(creditcard('8333ghgg2939302344'));
console.log(creditcard('8334ghgg2939302344'));
console.log(creditcard('8333ghgg29393023'));
console.log(creditcard('8334ghgg29393023'));
console.log(creditcard('1111111111111113'));
console.log(creditcard('1111111111111201'));
console.log(creditcard('8333992939302344'));
console.log(creditcard('8333992939302343'));
console.log(creditcard('1111144444444444'));
console.log(creditcard('8330ghgg29393023'));
console.log(creditcard('98.1114444444444'));
console.log(creditcard('9812.114444444444'));
console.log(creditcard('9812.11444444444'));
console.log(creditcard('9812.11444444.43'))
console.log("new");
console.log(creditcard('98-1211444444444'))
console.log(creditcard('9007199254740991'));
console.log(creditcard('9007199254740993'));
console.log(creditcard('A812114444444444'))
console.log(creditcard('0xA9812114444444'))
console.log(creditcard('-981211444444444'))
console.log(creditcard('9007-1992-5474-0994'));



// function validateCreditCard(creditCardNum) {

//     //Remove dashes from creditCardNum string
//     var ccNumberNoDashes = '';
//     for (var i = 0; i < creditCardNum.length; i++) {
//         if (creditCardNum[i] !== '-') {
//             ccNumberNoDashes += creditCardNum[i];
//         }
//     }

//     // The credit card number must be 16 digits in length
//     if (ccNumberNoDashes.length !== 16) {
//         return false;
//     }

//     // All of the digits must be numbers
//     for (var i = 0; i < ccNumberNoDashes.length; i++) {
//         // store the current digit
//         var currentNumber = ccNumberNoDashes[i];

//         // turn the digit from a string to an integer (if the digit is in fact a digit and not anther char)
//         currentNumber = Number.parseInt(currentNumber);

//         // check that the digit is a number
//         if (!Number.isInteger(currentNumber)) {
//             return false;
//         }
//     }

//     // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
//     var obj = {};
//     for (var i = 0; i < ccNumberNoDashes.length; i++) {
//         obj[ccNumberNoDashes[i]] = true;
//     }
//     if (Object.keys(obj).length < 2) {
//         return false;
//     }

//     // The final digit of the credit card number must be even
//     if (ccNumberNoDashes[ccNumberNoDashes.length - 1] % 2 !== 0) {
//         return false;
//     }

//     // The sum of all the digits must be greater than 16
//     var sum = 0;
//     for (var i = 0; i < ccNumberNoDashes.length; i++) {
//         sum += Number(ccNumberNoDashes[i]);
//     }
//     if (sum <= 16) {
//         return false;
//     }

//     return true;
// };

// /**** tests *****/
// console.log(validateCreditCard('9999-7777-8888-0000')); //true
// console.log(validateCreditCard('6666-6666-6666-1666')); //true
// console.log(validateCreditCard('a923-3211-9c01-1112')); //false
// console.log(validateCreditCard('4444-4444-4444-4444')); //false
// // console.log(validateCreditCard('1211-1111-1111-1112')); //true