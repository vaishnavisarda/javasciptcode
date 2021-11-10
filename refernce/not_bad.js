// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

function notBad(sent){
    let not =sent.indexOf("not");
    let bad = sent.indexOf("bad");
    if( not == -1 || bad == -1 || bad < not){
        return sent;
    }
    return sent.slice(0, not) + "good" + sent.slice(bad +3);
}

console.log(notBad("This is not bad"));
console.log(notBad("This is not so bad"));
console.log(notBad("This food is bad !!"));