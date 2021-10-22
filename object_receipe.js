// Create an object to hold information on your favorite recipe. It should have properties for title 
// (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:

let receipe ={
    "title":"pasta",
    "servings":2,
    "ingredients":["vegetables","pasta sauce","water"]
}
console.log("title:" ,receipe.title);
console.log("servings",receipe.servings);
console.log("Ingredients:")
for (let i=0;i<=receipe.ingredients.length;i++){
    console.log(receipe.ingredients[i])
}