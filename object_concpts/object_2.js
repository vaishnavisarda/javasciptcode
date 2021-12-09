// write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


let student ={
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
}
console.log("Before deleting the roll no. property");
console.log(student);
console.log("After deleting the roll no. property")
delete student.rollno;
console.log(student);