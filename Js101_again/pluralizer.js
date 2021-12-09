
    // Write a function named pluralize that:
    //     takes 2 arguments, a noun and a number.
    //     returns the number and pluralized form, like "5 cats" or "1 dog". 
    // Call that function for a few different scores and log the result to make sure it works.
    // Bonus: Make it handle a few collective nouns like "sheep" and "geese". 
function pluralize(num,noun){
    if(num>1){
        return (`${num} ${noun}s`);
    }
    else{
        return (`${num}  ${noun}`);
    }
}
console.log(pluralize( "5"," monkey"));
console.log(pluralize( "1"," rat"));
console.log(pluralize( "3"," cat"));
console.log(pluralize( "0"," bat"));
console.log(pluralize( "2"," sheep"));
console.log(pluralize( "1"," geese"));