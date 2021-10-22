//Basics Of Javascript
//varibales,functions,params,return,for loops,if-else,objects,JSON
//ESS javascript or  ES6
//typescript --->transpile

//Inbuilt modules: os,http,https,fs,events
let os = require('os');
let cal=require('./calculator');
let user=require('./user');
console.log("Hello World to Node.js");
console.log("os type"+os.type());
console.log("Host name"+ os.hostname());
console.log("tmp dir"+ os.tmpdir());

console.log("Sum of 2 nums"+ cal.sum(20,30));
console.log("value of Pi:"+ cal.pi);
 

let userObj= new user("Vaishnavi",23);
console.log("User Name"+ userObj.getName());  
