// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese"


function pluralize(num,noun){
    if(num >1 && noun !="sheep" && noun !="geese"){
        return num + noun +'s';
    }
    else{
        return num + noun; 
    }
}
console.log("I have "+pluralize(0,'dog'));
console.log("I have "+pluralize(10,'cat'));
console.log("I have "+pluralize(5,'rat'));
console.log("I have "+pluralize(1,'peacock'));