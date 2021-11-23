// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun,number){
    if(number>=2){
        return `${number} ${noun}s`;
    }
    else{
        return`${number} ${noun}`;
    }
}

console.log(pluralize("apple",3));
console.log(pluralize("mango",1));
console.log(pluralize("fruit",10));
console.log(pluralize("tree",0));
console.log(pluralize("kiwi",2));