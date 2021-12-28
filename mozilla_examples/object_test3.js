let cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Hello , said '+ this.name + ' the '+ this.breed);
    }
  }
cat.greeting();
  let cat2 = {
    name : 'Kitty',
    breed : 'black-white',
    color : 'black',
    greeting: function() {
      console.log('Hello , said '+ this.name + ' the '+ this.breed);
    }
  }

cat2.greeting();
  