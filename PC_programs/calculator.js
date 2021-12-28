
"use strict"
let a=10;
let b=20;
let c,f,g,h;
c=a+b;
f=a-b;
g=a*b;
 h=a/b;
// console.log(c);
// console.log(f);
// console.log(g);
// console.log(h);
let ADD = 0;
let SUB = 1;
let MULT = 2;
let DIV = 3;
// 0 -> Addition,1->Sub, 2->Multi,3->Div
let cond=ADD;
//console.log(cond);
if(cond==ADD){
    console.log(c);
}

if(cond==SUB){
    console.log(f);
}

if(cond==MULT){
    console.log(g);
}
if(cond==DIV){
    console.log(h);
}
