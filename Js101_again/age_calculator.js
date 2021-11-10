// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.


let birth_year = 1998;
let future_year =2023;
let possible_age=future_year-birth_year;
console.log(`I will be either ${possible_age-1} or ${possible_age} in ${future_year}`);