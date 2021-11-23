
//When used on objects, operators typically call the valueOf() and/or toString() method to retrieve a value they can work with.
//Some Quizzes to Solve : https://study2online.com/javascript/operators/english/1/

"use strict";

// //Unary Increment/Decrement --- Start

// let i = 1;
// console.log("value of i before operation : ", i);
// console.log(i++);
// console.log("value of i after operation : ", i);
// console.log(i--);
// console.log("value of i after operation : ", i);
// console.log("value of i after operation : ", i);
// console.log(++i);
// console.log("value of i after operation : ", i);
// console.log("value of i after operation : ", i);
// console.log(--i);
// console.log("value of i after operation : ", i);

// let a = 5;
// let b = 6;

// console.log(`Expression ++a + b Evaluated to with ${a} and ${b}  : `);
// console.log((++a + b));//12
// console.log(`Expression a + ++b Evaluated to with ${a} and ${b}  : `);
// console.log((a + ++b));//13
// console.log(`Expression a++ + b Evaluated to with ${a} and ${b}  : `);
// console.log((a++ + b));//14
// console.log(`Expression a + b++ Evaluated to with ${a} and ${b}  : `);
// console.log((a + b++));//15
// console.log(`a : ${a} adn b : ${b}`);

// let operation;
// operation = "Unary Increment";
// printHeader(operation);
// unaryOperations(0, "s");
// unaryOperations(0, "1");
// unaryOperations(0, true);
// unaryOperations(0, false);
// unaryOperations(0, 1.1);
// unaryOperations(0, null);
// unaryOperations(0, undefined);
// unaryOperations(0, NaN);
// unaryOperations(0, {
//     valueOf() {
//         return -1;
//     }
// });

// operation = "Unary Decrement";
// printHeader(operation);
// unaryOperations(1, "s");
// unaryOperations(1, "1");
// unaryOperations(1, true);
// unaryOperations(1, false);
// unaryOperations(1, 1.1);
// unaryOperations(1, null);
// unaryOperations(1, undefined);
// unaryOperations(1, NaN);
// unaryOperations(1, {
//     valueOf() {
//         return -1;
//     }
// });


// //Unary Increment/Decrement --- End

// //Unary Plus/Minus --- Start
// operation = "Unary Plus";
// printHeader(operation);
// unaryOperations(2, "s");
// unaryOperations(2, "1");
// unaryOperations(2, true);
// unaryOperations(2, false);
// unaryOperations(2, 1.1);
// unaryOperations(2, null);
// unaryOperations(2, undefined);
// unaryOperations(2, NaN);
// unaryOperations(2, {
//     valueOf() {
//         return -1;
//     }
// });

// operation = "Unary Minus";
// printHeader(operation);
// unaryOperations(3, "s");
// unaryOperations(3, "1");
// unaryOperations(3, true);
// unaryOperations(3, false);
// unaryOperations(3, 1.1);
// unaryOperations(3, null);
// unaryOperations(3, undefined);
// unaryOperations(3, NaN);
// unaryOperations(3, {
//     valueOf() {
//         return -1;
//     }
// });
// //Unary Plus/Minus --- End

// //Bitwise Operators --- Start
// let num = -21;
// let x = 21;
// console.log(Number("21"));
// console.log(x.toString(2));
// console.log(num.toString(2));//Though the output is readable actually it is stored in 2's complement form internally
// //Key note : NaN and Infinity are converted to 0 before applying bitwise operator
// // Number() is applied on the values before applying the bitwise operator
// // Bitwise operator returns a numeric value
// //Bitwise Operators --- End


// //Bitwise Not Operators --- Start
// //Returns 1's complement of the number
// //Faster
// let num1 = 21;
// let num2 = ~num1;

// console.log(num1.toString(2));
// console.log(num2.toString(2));

// console.log(num1);
// console.log(num2);

// //Slower
// let num3 = 25;
// let num4 = -num3 - 1;
// //let num4 = ~num3;

// console.log(num4);
// //Bitwise Not Operators --- End

// 0 AND 0 - 0
// 1 AND 0 - 0
// 0 AND 1 - 0
// 1 AND 1 - 1

// 0 OR 0 - 0
// 1 OR 0 - 1
// 0 OR 1 - 1
// 1 OR 1 - 1


// //Bitwise And Operators --- Start
// let x = 5;
// let y = 7;

// console.log(5 & 7);

// let a = 25 & "3";
// console.log(a);
// let b = 1 & "3";
// console.log(b);

// let c = 0 & (b = b + 1);//no short circuit
// console.log(c);
// console.log(b);

// let d = -1 & 1;
// console.log(d);

// let e = -25 & 15;
// console.log(e);
// //Bitwise And Operators --- End

// //Bitwise OR Operators --- Start
// let a = 25 | "3";
// console.log(a);
// let b = 1 | "3";
// console.log(b);

// let c = 0 | (b = b + 1);//no short circuit
// console.log(c);
// console.log(b);

// let d = -25 | 15;
// console.log(d);


// let e = -2 | 0;
// console.log(e);


// //Using Bitwise AND and Bitwise OR for masking
// let ROW1 = 1;//1 0001
// let ROW2 = 2;//2 0010
// let ROW3 = 4;//4 0100
// let ROW4 = 8;//8 1000

// let PREF = ROW1 | ROW2 | ROW3; // 3
// // 0001 | 0010 = 0011
// if(PREF & ROW1 ) { // 0011 & 0001 = 0001
//     console.log("Display Row1");
// }

// if(PREF & ROW2 ) {// 0011 & 0010 = 0010
//     console.log("Display Row2")
// }

// if(PREF & ROW3 ) {// 0011 & 0100 = 0000
//     console.log("Display Row3")
// }

// if(PREF & ROW4) {// 0011 & 1000 = 0000
//     console.log("Display Row4");
// }


// //Bitwise OR Operators --- End

//EXOR
// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 0
// //Bitwise EXOR Operators --- Start
// let result = 25 ^ 3;
// //11001 ^ 00011 = 11010
// console.log(result); // 26
// //Bitwise EXOR Operators --- End

// //Bitwise Left Shift Operators --- Start
// let oldValue = 2; // equal to binary 10
// // 0010 << 5 = 01000000
// let newValue = oldValue << 5; // equal to binary 1000000 which is decimal 64
// console.log(newValue);
// //Bitwise Left Shift Operators --- End

// //Bitwise signed Right Shift Operators --- Start
// let oldValue = -64; // equal to binary 1000000
// // (1111111000000) >> 5 = 1 111111111110
// let newValue = oldValue >> 5; // equal to binary 10 which is decimal 2
// console.log(newValue);

// //Bitwise Signed Right Shift Operators --- End

// //Bitwise Unsigned Right Shift Operators --- Start
// let oldValue = -64; // equal to binary 11111111111111111111111111000000
// let newValue = oldValue >>> 5; // equal to decimal 134217726
// //Bitwise Unsigned Right Shift Operators --- End

//Boolean Operators --- Start
//Always return the boolean value individual operands are converted to Boolean as well
// //Logical NOT
// let operation;
// operation = "Logical NOT";
// printHeader(operation);
// unaryOperations(4, "");
// unaryOperations(4, "s");
// unaryOperations(4, "1");
// unaryOperations(4, "0");
// unaryOperations(4, true);
// unaryOperations(4, false);
// unaryOperations(4, 0);
// unaryOperations(4, 10);
// unaryOperations(4, -10);
// unaryOperations(4, Infinity);
// unaryOperations(4, 1.1);
// unaryOperations(4, null);
// unaryOperations(4, NaN);
// unaryOperations(4, undefined);
// unaryOperations(4, {
//     valueOf() {
//         return 0;
//     }
// });
// //Double logical not
// //Can be used as Boolean() casting
// operation = "Dobule Logical NOT";
// printHeader(operation);
// unaryOperations(5, "");
// unaryOperations(5, "Some value");
// unaryOperations(5, "false");
// unaryOperations(5, "true");
// unaryOperations(5, true);
// unaryOperations(5, false);
// unaryOperations(5, 1);
// unaryOperations(5, 0);
// unaryOperations(5, NaN);
// unaryOperations(5, { a: "s" });
// unaryOperations(5, {});
// unaryOperations(5, null);
// unaryOperations(5, undefined);

// //Logical AND -- Start
// let operation = "Logical And";
// //Starting from left to right first the operand is converted to Boolean value if true going to next operand(until last operand) is returned if false current value is returned
// binaryOperations(0, { toString() { return "some object"; } }, "1");
// binaryOperations(0, {}, "0");
// binaryOperations(0, {}, "")
// binaryOperations(0, {}, 10);
// binaryOperations(0, {}, 0);
// binaryOperations(0, {}, true);
// binaryOperations(0, {}, false);
// binaryOperations(0, {}, 1.1);
// binaryOperations(0, {}, undefined);
// binaryOperations(0, {}, null);
// binaryOperations(0, {}, NaN);
// binaryOperations(0, {}, {});
// let tempVar = 10;
// let shortCircuit = 100 && (tempVar++);
// console.log(shortCircuit, tempVar);
// shortCircuit = 0 && (tempVar++);
// console.log(typeof shortCircuit, tempVar);
// binaryOperations(0, {}, null);
// binaryOperations(0, null, 100);
// binaryOperations(0, true, undefined);
// binaryOperations(0, undefined, 100);
// binaryOperations(0, false, NaN);
// binaryOperations(0, NaN, 100);

// binaryOperations(0, undefined, undefined);
// binaryOperations(0, null, null);
// binaryOperations(0, NaN, NaN);

// // let found = true;

// let found = false;
// let result = (found && someUndeclaredVariable); // error occurs here
// console.log(result);
// //Logical AND -- End
// //LOGICAL OR -- Start
// binaryOperations(1, { toString() { return "some object"; } }, "1");
// binaryOperations(1, {}, "0");
// binaryOperations(1, {}, "")
// binaryOperations(1, {}, 10);
// binaryOperations(1, {}, 0);
// binaryOperations(1, {}, true);
// binaryOperations(1, {}, false);
// binaryOperations(1, {}, 1.1);
// binaryOperations(1, {}, undefined);
// binaryOperations(1, {}, null);
// binaryOperations(1, {}, NaN);
// binaryOperations(1, {}, {});

// let tempVar = 10;
// let shortCircuit = 100 && (tempVar++);
// console.log(shortCircuit, tempVar);
// shortCircuit = 0 && (tempVar++);
// console.log(typeof shortCircuit, tempVar);
// binaryOperations(1, {}, null);
// binaryOperations(1, null, 100);
// binaryOperations(1, true, undefined);
// binaryOperations(1, undefined, 100);
// binaryOperations(1, false, NaN);
// binaryOperations(1, NaN, 100);

// binaryOperations(1, undefined, undefined);
// binaryOperations(1, null, null);
// binaryOperations(1, NaN, NaN);

// let value = process.env["SOME_VARIABLE"] || "Default";
// console.log(value);
// //LOGICAL OR -- End
// //Boolean Operators --- End

// //Multiplicative Operators --- End
// //The non-numeric values are converted to number using Number() function and not parseInt or parseFloat

// //Multiplication Operation -- Start
// binaryOperations(2, 2, 1);
// binaryOperations(2, 2, -1);
// binaryOperations(2, -2, -1);
// binaryOperations(2, -2, 1);
// binaryOperations(2, "1", 1);
// binaryOperations(2, "1abc", 1);
// binaryOperations(2, "1abc", 1);
// binaryOperations(2, -2, NaN);
// binaryOperations(2, NaN, 1);
// binaryOperations(2, 1, 0);
// binaryOperations(2, Infinity, 0);
// binaryOperations(2, Infinity, 1);
// binaryOperations(2, Infinity, -2);
// binaryOperations(2, Infinity, Infinity);
// //Multiplication Operation -- End

// //Division Operation -- Start
// binaryOperations(3, 2, 1);
// binaryOperations(3, 2, -1);
// binaryOperations(3, -2, -1);
// binaryOperations(3, -2, 1);
// binaryOperations(3, "1", 1);
// binaryOperations(3, "1abc", 1);
// binaryOperations(3, "1abc", 1);
// binaryOperations(3, -2, NaN);
// binaryOperations(3, NaN, 1);
// binaryOperations(3, 1, 0);
// binaryOperations(3, Infinity, 0);
// binaryOperations(3, Infinity, 1);
// binaryOperations(3, Infinity, -2);
// binaryOperations(3, Infinity, Infinity);
// //Division Operation -- End

// //Modulus Operation -- Start
// binaryOperations(4, 46, 5);
// binaryOperations(4, 18, -2);
// binaryOperations(4, 45, -7);
// binaryOperations(4, -2, 1);
// binaryOperations(4, "1", 1);
// binaryOperations(4, "1abc", 1);
// binaryOperations(4, "1abc", 1);
// binaryOperations(4, -2, NaN);
// binaryOperations(4, NaN, 1);
// binaryOperations(4, 1, 0);
// binaryOperations(4, Infinity, 0);
// binaryOperations(4, Infinity, 1);
// binaryOperations(4, Infinity, -2);
// binaryOperations(4, Infinity, Infinity);
// //Modulus Operation -- End

// //Exponential Operator -- start
// console.log(Math.pow(3,2));
// console.log(3**2);
// let sqr = 17;
// sqr **= 2;
// //sqr = sqr ** 2;
// console.log(sqr)

// let sqrt = 16;
// sqrt **= 0.5;
// // (x ^ 1/2)^2 = x
// console.log(sqrt);
// //Exponential Operator -- end

// //Add Operator -- start
// binaryOperations(5, 46, 5);
// binaryOperations(5, 18, -2);
// binaryOperations(5, 45, -0);
// binaryOperations(5, 1, 1);
// binaryOperations(5, "1", 1);
// binaryOperations(5, "1abc", 1);
// binaryOperations(5, false, 1);
// binaryOperations(5, true, 1);
// binaryOperations(5, false, "1");
// binaryOperations(5, true, "1");
// binaryOperations(5, {
//     valueOf() {
//         return 1;
//     },
//     toString() {
//         return "this is a object";
//     }
// }, 1);
// binaryOperations(5, {
//     toString() {
//         return "this is a object";
//     }
// }, 1);
// binaryOperations(5, {
//     valueOf() {
//         return 1;
//     },
//     toString() {
//         return "this is a object";
//     }
// }, "1")
// binaryOperations(5, {
//     toString() {
//         return "this is a object";
//     }
// }, "1");
// binaryOperations(5, {
// }, "1");
// binaryOperations(5, {
// }, 1);
// binaryOperations(5, "1abc", 1);
// binaryOperations(5, undefined, 1);
// binaryOperations(5, null, 1);
// binaryOperations(5, -2, NaN);
// binaryOperations(5, NaN, 1);
// binaryOperations(5, Infinity, Infinity);
// binaryOperations(5, -Infinity, -Infinity);
// binaryOperations(5, Infinity, -Infinity);
// binaryOperations(5, +0, +0);
// binaryOperations(5, +0, -0);
// binaryOperations(5, -0, -0);
// //Add Operator -- end

// //Sub Operator -- start
// binaryOperations(6, 46, 5);
// binaryOperations(6, 18, -2);
// binaryOperations(6, 45, -0);
// binaryOperations(6, 1, 1);
// binaryOperations(6, "1", 1);
// binaryOperations(6, "1abc", 1);//Number(), parseInt()
// binaryOperations(6, false, 1);
// binaryOperations(6, true, 1);
// binaryOperations(6, false, "1");
// binaryOperations(6, true, "1");
// binaryOperations(6, {
//     toString() {
//         return "this is a object";
//     }
// }, 1);
// binaryOperations(6, {
//     valueOf() {
//         return 1;
//     }
// }, 1);
// binaryOperations(6, "1abc", 1);
// binaryOperations(6, undefined, 1);
// binaryOperations(6, null, 1);
// binaryOperations(6, -2, NaN);
// binaryOperations(6, NaN, 1);
// binaryOperations(6, Infinity, Infinity);
// binaryOperations(6, -Infinity, -Infinity);
// binaryOperations(6, Infinity, -Infinity);
// binaryOperations(6, +0, +0);
// binaryOperations(6, +0, -0);
// binaryOperations(6, -0, -0);
// //Sub Operator -- end

// //Relation Operator -- Start
// //All Operators return the boolean values
// // <, <= , > , >=
// binaryOperations(7, 2, 1);
// binaryOperations(7, 1, 2);

// //2 < 1

// binaryOperations(7, "Sumit", "Omprakash");
// binaryOperations(7, "Sumit", "omprakash");
// binaryOperations(7, "sumit", "omprakash");

// binaryOperations(7, "sumit", 150);
// binaryOperations(7, "1", 2);

// binaryOperations(7, true, 0);
// binaryOperations(7, false, 0);
// binaryOperations(7, true, "10");
// binaryOperations(7, true, "0");
// binaryOperations(7, true, "abc");

// binaryOperations(7, {
//     valueOf() {
//         return 10;
//     }
// }, 11);
// binaryOperations(7, {
//     toString() {
//         return "15";
//     }
// }, 11);

// binaryOperations(7, "23", "3");
// binaryOperations(7, "23", 3);

// let result1 = NaN < 3; // false
// let result2 = NaN >= 3; // false
// console.log(result1)
// console.log(result2)
// //Relation Operator -- End

//Equality Operators -- Start
//==, !=, ===, !==
// binaryOperations(9, true, 1);
// binaryOperations(10, true, 1);
// binaryOperations(9, false, 1);
// binaryOperations(10, false, 1);

// binaryOperations(9, "true", 1);
// binaryOperations(10, "true", 1);
// binaryOperations(9, NaN, 1);
// binaryOperations(10, NaN, 1);
// binaryOperations(9, "1", 1);
// binaryOperations(10, "1", 1);
// binaryOperations(9, "true", "true");
// binaryOperations(10, "true", "true");
// binaryOperations(9, "true", true);
// binaryOperations(10, "true", true);

// binaryOperations(9, {
//     valueOf() {
//         return 10;
//     }
// }, 1);

// let a = {
//     a: "a"
// };
// let b = a;
// binaryOperations(9, b, a);
// binaryOperations(10, b, a);

// binaryOperations(9, null, undefined);
// binaryOperations(10, null, undefined);
// binaryOperations(9, 2, NaN);
// binaryOperations(9, NaN, 3);
// binaryOperations(9, NaN, NaN);

// //Equality Operators -- End

// //Conditional Operator -- Start
// let someValue = 10;

// someValue == 11 ? console.log("Value is 11") : console.log("value is 10");
// //Conditional Operator -- End

//For loop
let i;
for (let j = 10, i = 0; i < 5 && j >= 0; i++, j--) {
    console.log(i, j);
}

let object = new Object();
object.a = 1;
object.b = 2;
let keys = Object.keys(object);
for (let k = 0; k < keys.length; k++) {
    console.log(keys[k]);
    console.log(object[keys[k]]);
}
console.log('-------------')
object.a
object['a']
for (let key in object) {
    console.log(key);
    console.log(object[key]);
}

let arr = [11, 22, 33, 44, 55];
for (let v in arr) {
    console.log(v, " - ", arr[v]);
}

for (let v = 0; v < arr.length; v++) {
    if(arr[v] == 44) {
        continue;
    }
    console.log(v, " - ", arr[v]);
    // if(arr[v] == 22) {
    //     break;
    // }
}

for(let v of arr){
    console.log(v);
}

function printHeader(operation) {
    console.log(`--------------- ${operation} ---------------`);
    console.log("Operand : Operand Type : Result");
}

//type  : 0 -> Unary Increment, 1: Unary Decrement, 2: Unary Plus, 3 : Unary Minus, 4 : Logical NOT, 5 : Double Logical NOT
function unaryOperations(type, v) {
    switch (type) {
        case 0:
            console.log(`${v} : ${typeof v} : ${++v}`);
            break;
        case 1:
            console.log(`${v} : ${typeof v} : ${--v}`);
            break;
        case 2:
            console.log(`${v} : ${typeof v} : ${+v}`);
            break;
        case 3:
            console.log(`${v} : ${typeof v} : ${-v}`);
            break;
        case 4:
            console.log(`${v} : ${typeof v} : ${!v}`);
            break;
        case 5:
            console.log(`${v} : ${typeof v} : ${!!v}`);
            break;
    }
}
// 0 -> Logical AND 1 -> Logical OR 2 -> Multiplication 3 -> Division 4 -> modulus 5 -> Add 6 -> Sub 7 -> less than 8 -> greater than 9 -> Equal 10 -> Identically Equal
function binaryOperations(type, op1, op2) {
    switch (type) {
        case 0:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of LOGICAL AND : ${op1 && op2} of type ${typeof (op1 && op2)}`);
            break;
        case 1:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of LOGICAL OR : ${op1 || op2} of type ${typeof (op1 || op2)}`);
            break;
        case 2:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of multiplication : ${op1 * op2} of type ${typeof (op1 * op2)}`);
            break;
        case 3:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of division : ${op1 / op2} of type ${typeof (op1 / op2)}`);
            break;
        case 4:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of modulus : ${op1 % op2} of type ${typeof (op1 % op2)}`);
            break;
        case 5:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of addition : ${op1 + op2} of type ${typeof (op1 + op2)}`);
            break;
        case 6:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of subtraction : ${op1 - op2} of type ${typeof (op1 - op2)}`);
            break;
        case 7:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of less than : ${op1 < op2} of type ${typeof (op1 < op2)}`);
            break;
        case 8:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of greater than : ${op1 > op2} of type ${typeof (op1 > op2)}`);
            break;
        case 9:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of equal : ${op1 == op2} of type ${typeof (op1 == op2)}`);
            break;
        case 10:
            console.log(`Operand 1 : ${op1} --> ${typeof op1}`);
            console.log(`Operand 2 : ${op2} --> ${typeof op2}`);
            console.log(`Result of identically equal : ${op1 === op2} of type ${typeof (op1 === op2)}`);
            break;
    }
}

function someFunc(a,b,c) {
    let result = a + b + c;
    return result;
}

let s = someFunc(1,2,3);
console.log(s);