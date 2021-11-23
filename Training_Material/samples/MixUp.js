// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
function mixUp(str1, str2) {
    // let str1="Suishnavi";
    //let str2 ="Vamit";
    //var res= str1.split("S");
    //console.log(res);
    let str3 = str1.slice(0, 2);
    let str5 = str1.slice(2, str1.length);
    //console.log("str5 is ",str5);
    //console.log("str3 is ", str3);
    let str6 = str2.slice(2, str2.length);
    //console.log("str6 is ",str6);

    let str4 = str2.slice(0, 2);
    //console.log("str4 is",str4);
    let sumit = str3 + str6;
    // console.log(sumit);
    let vaishnavi = str4 + str5;
    // console.log(vaishnavi);
    let str = vaishnavi + " " + sumit;
    // console.log(str);
    return str;

}

let os = mixUp('poxtureofsometext', 'midcastforsomevideo');

console.log("Long String ( " + os + " )")

os = mixUp("Suishnavi", "Vamit");
console.log("Our name ( " + os + " )")
