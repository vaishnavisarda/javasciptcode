//Case Sensitive

// let a = "s";

///Let a="s"; Not possible due to case sensitivity

// let A = "S";

// console.log(a);
// console.log(A);

//Identifier naming conventions
// let _a = "starting with underscore";
// let $a = "starting with dollar";

//let 1a; - Invalid Variable
//let #a - Invalid Variable
// let @a; - Invalid Variable
// let aBc="";
// let ABC18="";

//Comments

//
//
/*

*/


// {
//     let temp = "s";
//     console.log(temp);
//     var temp_v = "v";
//     console.log(temp_v);
// }
// //console.log(temp);
// console.log(temp_v);

// func1()
// //Reserved  Keywords
// let myObject = {
//     let: 1
// }

// console.log(myObject.let);

// //Block of statements
// if (true) {

// }

// if (true)
//     console.log()


// //Single variable for all types
// var n = 1;
// var s = "string";
// var date = new Date();
// var uninitializedVar;
// var nullVar = null;

// console.log("number : ", n, typeof n);
// console.log("string : ", s, typeof s);
// console.log("date : ", date, typeof date);
// console.log(uninitializedVar, " : ", typeof uninitializedVar);
// console.log(nullVar, " : ", typeof nullVar);

// //Changing the type of variable on the fly
// var str = "this is a string"

// console.log("str : ", str, " type : ", typeof str);
// str = str + 1 + 2 + 3;
// console.log("str : ", str, " type : ", typeof str);
// //Recommended
// str = 100
// console.log("str : ", str, " type : ", typeof str);
// str = str + 1 + 2 + 3;
// console.log("str : ", str, " type : ", typeof str);

//Local and Global
//console.log(global);
// var global;
// console.log(global);
// var global = "this is a global variable"; // Initialization

// console.log(global);
// global = "Global Var";
// function localVarExample() {
//     var local = "this is a local variable"; // Initialization
//     console.log("Inside fucntion", local);
//     {
//         console.log("Inside block", local);
//     }
//     // global = global + " changed";
//     console.log("Inside fucntion", global);
//     global = "This is new global variable";
//     console.log("Inside fucntion", global);
// }

// localVarExample();
// console.log(global);
//console.log(local);

// {
//     global = "This is block scoped changed global variable";
// }
// console.log(global);

//Variable Hoisting
//console.log(local1);
//var global5;
// console.log(global5);

// var global5 = "Print before declaring";

// console.log(global5);

// function varHosting() {
//     console.log(local1);
//     var local1 = 5;
// }

// varHosting();

//variable let
// {
//     var custName = "ABC";
//     //let custNameWithLet = "ABC";

// }
// console.log(custName);
// //console.log(custNameWithLet);


// function exampleFunct() {
//     let inFunVar="ABC"
// }

//console.log(inFunVar);

// var multiDecl = "First";
// var multiDecl = "Second";

// //let letMultiDecl = "First";
// let letMultiDecl = "Second";

// {
//     let letMultiDecl = "Third";

// }
// No variable hosting
// console.log(a);
// let a="ABC";
// {
//     let c = 3;
// }

//let a = b; error
// b=3

// console.log(b+1);

// {
//     let c = 3
// }

// let a = c;

// function functScope() {
//     d = 5;
// }

// let a = d;



// for (var i = 0; i < 5; ++i) {
// for (let i = 0; i < 5; ++i) {
//     // do loop things
// }
// console.log(i);
// ------------ end of let


//------------- start of const

//const constVar;
const constVar1 = 5;
//constVar1 = 10;
//constVar1 = constVar1 + 1;
//constVar1 += 1;

const constObj = {};
constObj.a = "Property a";
//constObj = {a : "Property a"}

let initByConst = constVar1;

initByConst += 1

// const redConst = 10;
// const redConst = 20;

// for (const i = 0; i < 10; ++i) {} 

// let i = 0;
// for (const j = 7; i < 5; ++i) {
//  console.log(j);
// }
let objForIn = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
for (const key in objForIn) {
    console.log(key, objForIn[key]);
}

for (const value of [1, 2, 3, 4, 5]) {
    console.log(value);
}

//------------- end of const

//------------- start Best Practices const let var
//1. Don’t Use var
//2. Prefer const Over let
//------------- end Best Practices const let var




