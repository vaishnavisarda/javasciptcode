
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

// mixUp('mix', pod'): 'pox mid'
// mixUp('dog', 'dinner'): 'dig donner'

function mixUp(str1,str2){
    let string1=str1.slice(0,2);
    let string_1=str1.slice(2,6);

    let string2 = str2.slice(0,2);
    let string_2 = str2.slice(2,6);

    console.log(`${string1}${string_2},${string2}${string_1}`);
}

mixUp("digggy","donner");