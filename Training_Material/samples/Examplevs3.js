//Store your birth year in a variable.
"use strict"
let Birth_year=1998;
//console.log(Birth_year);

//Examplevs4
//Store a future year in a variable.

let future_year=2025;
//console.log(future_year);

//Calculate your 2 possible ages for that year based on the stored values.
//For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
var current_age;
//let possible_age;
current_age=future_year-Birth_year;
//console.log(current_age);
//possible_age=current_age-1;
//console.log(current_age);

console.log(`I will be either ${current_age-1} or ${current_age} in ${future_year}`);