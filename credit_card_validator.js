// You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// 9999777788880000
// 6666666666661666
// The following credit card numbers are invalid:

// a92332119c011112 invalid characters
// 4444444444444444 only one type of number
// 1111111111111110 sum less than 16
// 6666666666666661 odd final number

function creditcardvalidate(cardnum){
    if(cardnum.length ==16){
        return false;
    }

    for(let i=0;i<cardnum.length;i++){
        let num= cardnum[i];
        num = Number.parseInt(num);

        if(!Number.isInteger(num)){
            return false;
    }
   
    }


    let obj={};
    for(let i=0;i < cardnum.length ;i++){
    obj[cardnum[i]] = true;
    }
    if(Object.keys(obj).length < 2){
    return false;
    }

    if(cardnum[cardnum.length -1]% 2 !==0){
       return false;
    }
    let sum = 0;
    for(let i=0; i < cardnum.length;i++){
    sum += Number(cardnum[i]);  
    }
    if(sum <= 16){
    return false;
    }
    return true;
}

console.log(creditcardvalidate("9983777483893992"));
console.log(creditcardvalidate("9983777483778951"));
console.log(creditcardvalidate("9983777483vcfdg1"));
console.log(creditcardvalidate("99837774rtggg51"));
console.log(creditcardvalidate("9983770000008950"));

