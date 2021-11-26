// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let objectwithrecipedetails={
    title:"pav-bhaji",
    servings:2,
    ingredients:["tomato","onion","potato","pav"],
    
}
console.log(objectwithrecipedetails.title);
console.log(objectwithrecipedetails["servings"]);
let keys=Object.keys(objectwithrecipedetails);
console.log(keys[2]);
//console.log(Object.keys(objectwithrecipedetails));
console.log(objectwithrecipedetails.ingredients[0]);
console.log(objectwithrecipedetails.ingredients[1]);
console.log(objectwithrecipedetails.ingredients[2]);
console.log(objectwithrecipedetails.ingredients[3]);