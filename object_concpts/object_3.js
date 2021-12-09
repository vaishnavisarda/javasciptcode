// Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 }; 

let student ={
    name: "David Rayy",
    sclass : "VI",
    rollno :12
}
// console.log("length of name");
// console.log(student.name.length);
// console.log("length of sclass");
// console.log(student.sclass.length);
// console.log("length of rollno");
// console.log(student.rollno.length);
console.log("Length of object");
console.log(Object.keys(student).length);

