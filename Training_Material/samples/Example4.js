// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let curr_age = 23;
let max_age = 60;
let esti_amount = 50;
let days_in_a_year = 365;

let restof_age = max_age - curr_age;
console.log(restof_age);


let total_leftdays;
total_leftdays = days_in_a_year * restof_age;
console.log(total_leftdays);
let Amount_totaleat = total_leftdays * esti_amount;
console.log(Amount_totaleat);
// esti_amount * ((max_age-curr_age)*365)
console.log(`You will need ${esti_amount * ((max_age - curr_age) * 365)} to last you until the ripe old age of ${max_age}`);

//50 * 60 = 3000 - 23
// a * b + c * d =  