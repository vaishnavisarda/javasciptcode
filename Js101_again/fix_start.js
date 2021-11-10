// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

function fixStart(arg){
    let ans =arg.charAt(0);
    return ans + arg.slice(1).replace(new RegExp(ans ,'g'),"*");

}

console.log(fixStart("bobbby"));