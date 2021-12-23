//Example 1

var global = 1;

{
    global = 5
}

function functionCall() {
    global = global + 2;
    console.log(global);
}

functionCall();
console.log(global);
// Example 2

var global1 = "Global";

function functionCall1() {
    global1 = "This is a " + global1;
    console.log(global1);
}

global1 = "This is " + global1;
functionCall1();
functionCall1();
console.log(global1);
functionCall1();

//Example 3
var global2 = "Vaishnavi";

var global3 = "Sumit"

var global4;

console.log(global2, global3, global4);

function appendSurname() {
    console.log(global4);
    global4 = global2 + global3 + "Toshniwal";
}

console.log(global4);

//Example 4
console.log(global5);

var global5 = "Print before declaring";

console.log(global5);