function creditcard(num) {
    //console.log(typeof num)
    num=num.replace(/-/gi,"");
    // console.log(num);
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

console.log(creditcard('2222-3333-4444-6666'));
console.log(creditcard('1111-1111-1111-1110'));
console.log(creditcard('1111-1111-1111-11'));
console.log(creditcard('1111-1111-1111-1211'));
console.log(creditcard('1111-1111-1111-1020'));//Failure
console.log(creditcard('8700-0000-0000-0000'));//failure
console.log(creditcard('abcd-efgh-ijkl-mnop'));
console.log(creditcard('9293-9302-344'));
console.log(creditcard('8333-ghgg-2939-3023-44'));
console.log(creditcard('8334-ghgg-2939-3023-44'));
console.log(creditcard('8333-ghgg-2939-3023'));
console.log(creditcard('8334-ghgg-2939-3023'));
console.log(creditcard('1111-1111-1111-1113'));
console.log(creditcard('1111-1111-1111-1201'));
console.log(creditcard('8333-9929-3930-2344'));
console.log(creditcard('8333-9929-3930-2343'));
console.log(creditcard('1111-1444-4444-4444'));
 console.log(creditcard('8330-ghgg-2939-3023'));
// console.log(creditcard('98.1114444444444'));
// console.log(creditcard('9812.114444444444'));
// console.log(creditcard('9812.11444444444'));
// console.log(creditcard('9812.11444444.43'))
// console.log("new");
// console.log(creditcard('98-1211444444444'))
// console.log(creditcard('9007199254740991'));
// console.log(creditcard('9007199254740993'));
// console.log(creditcard('A812114444444444'))
// console.log(creditcard('0xA9812114444444'))
// console.log(creditcard('-981211444444444'))
