// When we call any function with new
// 1. Execute the function with 
// let this = {}
// 2. this.__proto__ = Person.prototype
// 3. return this

function Person(first, last, age, gender, interests) {

    // property and method definitions
    this.age = age;

  }
  let nPerson = Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
  let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
  
  Person.prototype.farewell = function() {
    return (this.name.first + ' has left the building. Bye for now!');
  };



  console.log(Person);