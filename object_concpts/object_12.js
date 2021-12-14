// Write a JavaScript function to parse an URL
var url = "https://geeksforgeeks.org:3000/pathname/?search=query";
      
// Created a parser using createElement() method
// console.log(url);

let parser= new URL(url);
parser.href = url;
console.log(parser.hostname);
console.log(parser.port);
console.log(parser.host);
console.log(parser.protocol);
console.log(parser.pathname);
console.log(parser.search);

  