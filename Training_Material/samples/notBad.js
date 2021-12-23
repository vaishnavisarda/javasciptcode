/*
Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'*/

function notBad(sentence) {
let str=sentence.replace(/not( (\w* )*)bad/gi,"good");
console.log(str);
return str;
}

//( \w* )( \w* )

let input = [
    'This dinner is not bad',
    'This dinner is not  bad',
    'This dinner is not a bad',
    'This dinner is not that bad!', 
    'This movie is not so bad!', 
    'This movie is not very much bad!', 
    'This movie is not very  much bad!', 
    'This dinner is bad!'
];

for (let i of input) {
    console.log(`${i}  ---> ${notBad(i)}`);
}