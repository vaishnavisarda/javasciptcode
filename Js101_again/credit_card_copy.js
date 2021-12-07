function creditcard(num) {
    //console.log(typeof num)

    if(num % 1 !==0){
        return false;
    }
    if (isNaN(num / 1)) {
        return false;
    }

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
