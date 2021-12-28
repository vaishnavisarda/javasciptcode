// In this task you are provided with an object literal, and your tasks are to

// Store the value of the name property inside the catName variable, using bracket notation.
// Run the greeting() method using dot notation (it will log the greeting to the browser DevTools' console).
// Update the color property value to black.


let cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
}
cat.greeting();
let catName =cat['name'];
console.log(cat['name']);
cat.color='black';
console.log(cat.color);



// Don't edit the code below here

console.log(`The cat's name is ${ catName }.`);
console.log(`The cat's color is ${ cat.color }.`);