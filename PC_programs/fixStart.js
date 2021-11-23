//Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//fixStart('babble'): 'ba**le'
function fixStart(str){
//let str="tattoo";
let str2=str.slice(0,1);
// console.log(str2);
let str1=str.slice(1,str.length);
//console.log(str1);

let res=str1.replace(new RegExp(str.charAt(0),"g"),"*");
//console.log(res);
let finaltext=str2+res;
 //console.log(finaltext);
return finaltext;

}
let text=fixStart("popppopo");
console.log(text);