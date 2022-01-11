function Person(first, last, age, gender, interests) {

    // property and method definitions
  
  }
  
  let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
  
  Person.prototype.farewell = function() {
    return (this.name.first + ' has left the building. Bye for now!');
  };

  console.log(Person);