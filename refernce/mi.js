//Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing //out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:


//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// //Look up the JavaScript string reference to find methods which may be useful!


function mixUp(arg1,arg2){
    return arg2.slice(0,2) + arg1.slice(2) + " " + arg1.slice(0,2) +arg2.slice(2);

}
console.log(mixUp("pox","mid"));
console.log(mixUp("dog","bag"));
console.log(mixUp("rellution","povenue"));