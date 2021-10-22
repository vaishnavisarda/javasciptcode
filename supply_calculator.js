// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".


let curr_age = 23;
let max_age= 75;
let amount=5;
let total = (amount *365) * (max_age-curr_age);
console.log(`You will need ${total} to last you until the ripe old age of ${max_age}`)