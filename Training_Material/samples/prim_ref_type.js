// // let num = 5; //num -> 0001 | 5
// // let num1 = num; // num1 -> 0002 | 5

// // num++;
// // console.log(num);
// // console.log(num1);

// // num1++;
// // console.log(num);
// // console.log(num1);

// // let obj = new Object(); // obj -> 0001 | {}
// // //let obj = {};

// // let obj2 = obj; // obj2 -> 0001 

// // obj.name = "Object";
// // console.log(obj.name);
// // console.log(obj2.name);

// // obj2.name = "Object2";
// // console.log(obj.name);
// // console.log(obj2.name);

// // function passByValue(arg) {
// //     //let arg = value;
// //     arg++;
// //     //arg = arg + 1;
// //     console.log(arg);
// //     return;
// // }

// // function passByReference(arg) {
// //     arg.value++;
// //     console.log(arg.value);
// //     return;
// // }

// // function newReference(arg) {
// //     //let arg = object
// //     arg.value++;//0006 | {value: 2}
// //     arg = new Object();//arg -> 0007 | {value : 11}
// //     arg.value = 10;
// //     arg.value++;
// //     console.log(arg.value);
// //     return;
// // }

// // let value = "1";//0004 | 1
// // let object = {
// //     value: 1
// // }; // 0006 | {value:1}
// // //arg = value;
// // passByValue(value);//arg -> 0005 | 2
// // console.log(value);
// // //arg = object
// // passByReference(object);//arg -> 0006
// // console.log(object.value);
// // //arg = object
// // newReference(object);//arg -> 0006
// // console.log(object.value);

// // let str = "this is a string";
// // str.name = "Name of string";//not allowed
// // console.log(str.name)

// // let arr = [4, 5, 6]; // arr -> 0008 | 4|5|6
// // let arr1 = arr;//arr1 -> 0008
// // let plainObject = {
// //     value : 1
// // }
// // let dateObject = new Date();

// // arr1[0] = 10;
// // arr[1] = 13;
// // console.log(typeof arr);
// // console.log(typeof plainObject);
// // // console.log(arr);
// // // console.log(arr1);
// // // console.log(Array.isArray(arr));
// // console.log("Types : ");
// // console.log(plainObject instanceof Object);
// // console.log(plainObject instanceof Array);
// // console.log(plainObject instanceof Date);
// // console.log(arr instanceof Array);
// // console.log(dateObject instanceof Date);

// // console.log("Object : ");
// // console.log(arr instanceof Object);
// // console.log(dateObject instanceof Object);
// // console.log(dateObject instanceof Array);

// // console.log(dateObject);


// // let str1 = new String("This ");
// // str1.name = "some";
// // let str2 = "This";

// // console.log(typeof str1);
// // console.log(typeof str2);
// // console.log(str1.name);
// // console.log(str1 instanceof String);

// // number -> Number
// // string -> String
// // boolean -> Boolean
// //let num = new Number(1);
// let num = 1;
// let num1 = new Number(1);

// console.log(typeof num);
// console.log(typeof num1);
// console.log(num instanceof Number);
// console.log(num1 instanceof Number);
// console.log(Number.MAX_VALUE);
// console.log(Number.isInteger(1))
// console.log(Number.isInteger(1.0))
// console.log(Number.isInteger(1.1))

// let floatNum = 1.1;
// console.log(floatNum.toExponential());

let str = "This is a string";//primitive
let strObj = new String("This is a string");//Reference

console.log(typeof str)
console.log(typeof strObj)
console.log(str instanceof String)
console.log(strObj instanceof String)
console.log(str.length)

//Immutability
let strReplaced = str.replace("This", "That");
console.log(str);
console.log(strReplaced);

let strRemoveA = str.replace("a", "");
console.log(str);
console.log(strRemoveA);

let str1 = str.concat(" Some more string");
console.log(str1);

let exampleStr = "silly";
//let exampleStr = "I silly boy";
//let exampleStr = "I am silly";
let isLy = exampleStr.endsWith("ly");
let includesLy = exampleStr.includes("ly");

console.log(str.charAt(0));
console.log(str.charCodeAt(0))

//RegExp
let patt = /w3schools/i;
let patt1 = new RegExp("w3schools", "i");

console.log(typeof patt);
console.log(typeof patt1);

console.log(patt instanceof RegExp)
console.log(patt1 instanceof RegExp)
console.log(patt instanceof Object)
console.log(patt1 instanceof Object)

let statement = "12345This is a stringI assessment 1s \" \n 6s 3s. 123456 90343 1234567890 and not that. 12345";

let result = statement.match(/i/ig);
console.log(result.length);
result = statement.match(new RegExp("i", "gi"));
console.log(result.length);
result = statement.match(new RegExp("[i ]s", "gi"));
console.log(result);
result = statement.match(new RegExp("[is]", "gi"));
console.log(result);
result = statement.match(/[is]/gi);
console.log(result);
result = statement.match(/[is]/gi);
console.log(result);
result = statement.match(/[^is]/gi);
console.log(result);
result = statement.match(/[0-9][0-9]/g);
console.log(result);
result = statement.match(/[0-9][0-9]/);
console.log(result[0]);
result = statement.match(/([0-9]|[0-9])/gi);
console.log(result);

result = statement.match(new RegExp("([ae]|[0-5])s", "gi"));
console.log(result);
result = statement.match(new RegExp(".", "gi"));
console.log(result);

result = statement.match(new RegExp("\\w", "gi"));
console.log(result);

result = statement.match(new RegExp("\\s", "gi"));
console.log(result);

result = statement.match(new RegExp("\\bTh", "gi"));
console.log(result);

result = statement.match(new RegExp("^[0-9]+", "gi"));
console.log(result);