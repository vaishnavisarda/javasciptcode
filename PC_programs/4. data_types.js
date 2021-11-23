// Primitive Data Types : Undefined, Null, Boolean, Number, String, and Symbol.
// Complex Data Type : Object

// let someVar = 10;
// console.log(typeof someVar);
// someVar="XYZ";
// console.log(typeof someVar);

// //------------ start of typeof operator
// // "undefined" if the value is undefined
// let undefVar;
// let typeofVar = typeof undefVar;
// console.log("Type of undefined is ", undefined);
// console.log("Type of undefined is ", typeof undefined);

// console.log(undefined == undefined)
// console.log(undefVar == undefined)
// console.log(undefined == "undefined")
// console.log(typeof(undefined) == "undefined")
// console.log(typeofVar == "undefined")
// console.log("Type of undefVar is ", undefVar);
// console.log("Type of undefVar is ", typeof undefVar);

// console.log("Type of typeofVar is ", typeof typeofVar);
// // "boolean" if the value is a Boolean
// let boolVar = false;
// console.log("Type of boolVar is ", typeof boolVar);
// // "string" if the value is a string
// let stringVar = "This is a string";
// console.log("Type of stringVar is ", typeof stringVar);
// // "number" if the value is a number
// let numVar = 1.5;
// console.log("Type of numVar is ", typeof numVar);
// // "object" if the value is an object (other than a function) or null
// let obj = {};
// console.log("Type of obj is ", typeof obj);
// let nullVar = null;
// console.log("Type of null", typeof nullVar);
// // "function" if the value is a function
// let functionVar = function () {

// };
// console.log("Type of functionVar is ", typeof functionVar);
// // "symbol" if the value is a Symbol
// let symVar = Symbol();
// console.log("Type of symVar is ", typeof symVar);
// //------------ end of typeof operator

//------------ start of undefined type
// let uninitializedVar;

// console.log(uninitializedVar);
// //console.log(undeclaredVar);
// console.log(typeof undeclaredVar);

// console.log(uninitializedVar == undefined);
// console.log(uninitializedVar == "undefined");
// //console.log(undeclaredVar == undefined);

// console.log(typeof uninitializedVar);
// console.log(typeof undeclaredVar);

// if (uninitializedVar) {
//     console.log("truthy")
// } else {
//     console.log("falsy")
// }

// if (!uninitializedVar) {
//     //?????
//     console.log("Inside if");
// }

// // if (undeclaredVar) {
// //     //????
// // }
// //Best Practice - As many other scenarios can give falsy values
// if (uninitializedVar == undefined) {
//     //???
//     console.log("Inside if 1");
// }



//let uninitializedVar = undefined; // Bad Practice


//------------ end of undefined type

//------------ start of null type
// let nullInit = null;

// console.log(typeof nullInit);

// console.log(undefined == nullInit);
// console.log(null == nullInit);

// if (nullInit) {
//     console.log("trythy");
// } else {
//     console.log("falsy");
// }

// //Best Practice
// if (nullInit == null) {
//     console.log("trythy");
// } else {
//     console.log("falsy");
// }

// if (!nullInit) {
//     //??????
// }
//------------ end of null type

//------------ start of Boolean type
// console.log(false == 1);
// console.log(true == 0);

// //Converting to boolean
// let message = "Hello world!";
// let messageAsBoolean = Boolean(message);

// //let message = "Hello world!";
// if (message) {
//     console.log("Value is true");
// }
//So following are important
convertValue("", 0);
convertValue("Some value", 0);
convertValue("false", 0);
convertValue("true", 0);
convertValue(true, 0);
convertValue(false, 0);
convertValue(1, 0);
convertValue(0, 0);
convertValue(NaN, 0);
convertValue({ a: "s" }, 0);
convertValue({}, 0);
convertValue(null, 0);
convertValue(undefined, 0);

// //------------ end of Boolean type

// //------------ start of Number type
// let intNum = 1;

// let octalNum = 076;
// console.log(octalNum);f
// let octalNum1 = 079;
// console.log(octalNum1);
// let octalNum2 = 08;
// console.log(octalNum2);

// let hexNum = 0x1;
// let hexNum1 = 0x1F;
// let hexNum2 = 0x21;

// console.log(hexNum2);

// let floatNum = 1.1;
// let floatNum2 = 0.1;
// let floatNum3 = .1;
// console.log(floatNum3);
// let floatNum4 = 1.;
// console.log(floatNum4);
// let floatNum5 = 10.0;
// let floatNum6 = 3.125e7;

// // let a = 0.15;
// // let b = 0.15;

// // let a = 0.05;
// // let b = 0.25;

// let a = 0.1;
// let b = 0.2;
// if (a + b == 0.3) { // avoid!
//     console.log("You got 0.3.");
// }

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.POSITIVE_INFINITY)

// let result = Number.MAX_VALUE + Number.MAX_VALUE;
// console.log(isFinite(result));

//Nan

//let nanValue = 10 / 0;
// let nanValue = "some" / 2;
// console.log(nanValue);
// console.log(nanValue == NaN);
// console.log(NaN == NaN);
// console.log(NaN == 2);
// console.log(isNaN(NaN));

let numericConvObj = {
    valueOf: function () {
        console.log("Called valueOf returning NaN");
        return NaN;
        // console.log("Called valueOf returning a number");
        // return 10;
    },
    toString: function () {
        console.log("Called toString");
    }
};

// //Anything not convertible to number is Nan
// console.log("With Number");
// convertValue(NaN, 1);
// convertValue(10, 1);
// convertValue(11.5, 1);
// convertValue(0xA, 1);
// convertValue(076, 1);
// convertValue("10", 1);
// convertValue("", 1);
// convertValue("011", 1);
// convertValue("+11", 1);
// convertValue("-11", 1);
// convertValue("blue", 1);
// convertValue("11.5", 1);
// convertValue("11.5abc", 1);
// convertValue("1154abc", 1);
// convertValue("11.5.6", 1);
// convertValue("3.12345e+3", 1);
// convertValue(true, 1);
// convertValue(false, 1);
// convertValue(undefined, 1);
// convertValue(null, 1);
// convertValue(numericConvObj, 1);

// //Using parseInt
// console.log("With parseInt");
// convertValue(NaN, 2);
// convertValue(10, 2);
// convertValue(11.5, 2);
// convertValue(0xA, 2);
// convertValue(076, 2);
// convertValue("10", 2);
// convertValue("", 2);//Notice
// convertValue("011", 2);
// convertValue("+11", 2);
// convertValue("-11", 2);
// convertValue("blue", 2);
// convertValue("11.5", 2);
// convertValue("11.5abc", 2);//Notice
// convertValue("1154abc", 2);//Notice
// convertValue("11.5.6", 2);//Notice
// convertValue("3.12345e+3", 2);
// convertValue(true, 2);
// convertValue(false, 2);
// convertValue(undefined, 2);
// convertValue(null, 2);
// convertValue(numericConvObj, 2);

// let num1 = parseInt("10", 2); // 2 - parsed as binary
// let num2 = parseInt("10", 8); // 8 - parsed as octal
// let num3 = parseInt("10", 10); // 10 - parsed as decimal
// let num4 = parseInt("10", 16); // 16 - parsed as hexadecimal

// console.log(num1, num2, num3, num4);

// //Using parseFloat
// console.log("With parseFloat");
// convertValue(NaN, 3);
// convertValue(10, 3);
// convertValue(11.5, 3);
// convertValue(0xA, 3);
// convertValue(076, 3);
// convertValue("10", 3);
// convertValue("", 3);
// convertValue("011", 3);
// convertValue("+11", 3);
// convertValue("-11", 3);
// convertValue("blue", 3);
// convertValue("11.5", 3);
// convertValue("11.5abc", 3);
// convertValue("1154abc", 3);
// convertValue("11.5.6", 3);
// convertValue("3.12345e+3", 3);
// convertValue(true, 3);
// convertValue(false, 3);
// convertValue(undefined, 3);
// convertValue(null, 3);
// convertValue(numericConvObj, 3);



// //------------ end of Number type

// //------------ start of String type

// let firstName = "Vaishnavi";
// // let firstName = `Vaishnavi`;
// // let firstName = 'Vaishnavi';
// //let firstName = 'Vaishnavi";

// //Immutable nature

// let str = "First String";
// str[0] = "S";
// console.log(str);
// let otherStr = str.replace("First", "Second");

// console.log(str, otherStr);

// convertValue("", 4);
// convertValue("Some value", 4);
// convertValue("false", 4);
// convertValue("true", 4);
// convertValue(true, 4);
// convertValue(false, 4);
// convertValue(1, 4);
// convertValue(0, 4);
// convertValue(NaN, 4);
// convertValue({ a: "s", toString: function () { return "string " + this.a; } }, 4);
// convertValue({}, 4);
// //convertValue(null, 4);
// //convertValue(undefined, 4);

// convertValue("", 5);
// convertValue("Some value", 5);
// convertValue("false", 5);
// convertValue("true", 5);
// convertValue(true, 5);
// convertValue(false, 5);
// convertValue(1, 5);
// convertValue(0, 5);
// convertValue(NaN, 5);
// convertValue({ a: "s", toString: function () { return "string " + this.a; } }, 5);
// convertValue({}, 5);
// convertValue(null, 5);
// convertValue(undefined, 5);

//Template Literal Strings
// let myMultiLineString = 'first line\n' +
// 'second line';
// let myMultiLineTemplateLiteral = `first line
// second line`;
// console.log(myMultiLineString);
// // first line
// // second line"
// console.log(myMultiLineTemplateLiteral);
// // first line
// // second line
// console.log(myMultiLineString === myMultiLineTemplateLiteral); // true

// let firstPart = "Vaishnavi";
// let secondPart = "Toshniwal";

// let concatenatedString = firstPart + " " + secondPart;

// let concatenatedStringWithLiteral = `${firstPart}  ${secondPart}`

// let printsecond = false;
// {
//     let concatenatedStringWithLiteral = `${firstPart}  ${printsecond ? secondPart : "not printing second"}`

//     console.log(concatenatedStringWithLiteral);
// }

// console.log(concatenatedStringWithLiteral);

// let a = 6;
// let b = 9;

// function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
//     console.log(strings);
//     console.log(aValExpression);
//     console.log(bValExpression);
//     console.log(sumExpression);
//     return 'foobar';
// }
// let untaggedResult = `${a} + ${b} = ${a + b}`;
// let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
// // ["", " + ", " = ", ""]
// // 6
// // 9
// // 15
// console.log(untaggedResult); // "6 + 9 = 15"
// console.log(taggedResult); // "foobar"

// // \u00A9 is the copyright symbol
// console.log(`\u00A9`); // ©
// console.log('\u00A9'); 
// console.log(String.raw`\u00A9`); // \u00A9

// console.log(String.raw`first line
// second line`);


//------------ end of String type

// //------------ start of Symbol type
// //------------ end of Symbol type

// //------------ start of Object type

// let obj = new Object();

// // let obj1 = new Object({
// //     a: "1",
// //     b: "2",
// //     valueOf: function() {
// //         return parseInt(this.a) + parseInt(this.b);
// //     },
// //     toString:function() {
// //         return this.a + " " + this.b;
// //     }
// // })

// let obj1 = {
//     a: "1",
//     b: "2",
//     valueOf: function() {
//         return parseInt(this.a) + parseInt(this.b);
//     },
//     toString:function() {
//         return this.a + " " + this.b;
//     }
// };
// console.log(obj1);
// console.log(obj1.toString());
// console.log(obj1.valueOf());
// console.log(obj1.hasOwnProperty("a"));
// console.log(obj1.hasOwnProperty("b"));
// console.log(obj1.hasOwnProperty('c'));
// console.log(Object.keys(obj1));
// console.log(Object.entries(obj1));

// for (let key in obj1) {
//     console.log(key);
// }

// for (let [key, value] of Object.entries(obj1)) {
//     console.log(key, value);
// }
// //------------ end of Object type

// //0 - Boolean, 1 - Number(With Number), 2 - Number(With parseInt)
// //3 - Number(With parseFloat), 4- toSTring() 5 - String
// //
function convertValue(v, type) {
    switch (type) {
        case 0://For Boolean
            console.log(v, "is evaluated to", Boolean(v));
            // if (Boolean(v)) {
            //     console.log(v, "is evaluated to true");
            // } else {
            //     console.log(v, "is evaluated to false");
            // }
            break;
        case 1://For Number
            console.log(v, "is evaluated to", Number(v));
            break;
        case 2://For parseInt
            console.log(v, "is evaluated to", parseInt(v));
            break;
        case 3://For parseFloat
            console.log(v, "is evaluated to", parseFloat(v));
            break;
        case 4://For toString
            console.log(v, "is evaluated to ", v.toString());
            break;
        case 5://For String
            console.log(v, "is evaluated to ", String(v));
            break;
    }
}