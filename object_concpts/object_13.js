// Write a JavaScript function to retrieve all the names of object's own and inherited properties

function properties(arg){
  let props = [];

  for(let key in arg) {
    props.push(key);
  }

  return props;
  
}

// function Student(name) {
//   this.name = name;
// }
// Student.prototype.rollno = true;
// console.log(properties(new Student("Sara")));

function Person(firstname, lastname, age, gender, interests) {
  this.name = {
      "firstname": firstname,
      "lastname": lastname
  };
  //let pronoun;
  //this.pronoun=pronoun;
  this.gender = gender,
      this.age = age,
      this.interests = interests;

  if (this.gender == "female") {
      this.pronoun = "She";
  }
  else {
      this.pronoun = "He";
  }


}

Person.prototype.greeting = function () {
  console.log("Hi I am " + this.name.firstname);
}

function Teacher(firstname, lastname, age, gender, interests, subject) {
  Person.call(this, firstname, lastname, age, gender, interests)
  this.subject = subject;
}
Teacher.someProperty = "Some Property";
Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(
  Teacher.prototype,
  'constructor',
  {
      value: Teacher,
      enumerable: false,
      writable: true
  }
);

console.log(properties(new Teacher('Vaishnavi', 'Toshniwal', 23, 'female', 'sketching', 'drawing')))