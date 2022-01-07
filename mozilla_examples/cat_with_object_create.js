let cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Hello , said '+ this.name + ' the '+ this.breed);
    }
  }
cat.greeting();

let cat2 = Object.create(cat);

console.log(cat2.name);
cat2.name = "kitty";
cat2.greeting();