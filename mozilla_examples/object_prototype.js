//1.
//function Person(){}
//Person.prototype.constructor=Person
//Person.prototype.proto=Object.prototype
//2.
//let a = {x :"x"}
//let a = new Object({
//    x: "x"
//})
  //a.__proto__ == Object.prototype
  //3.
  //Object.prototype.__proto__ = null
  //4.
  //proto is on object and prototype is on function
  //5.
  //person1.__proto__.__proto__/Person.prototype.proto
  //This points to parent function's prototype
  //6. Only the property from prototype are inherited to child classes and not the direct properties
  //7. Only the property from prototype are accessible by tthe object of a function AND NO DIRECT PROPERTIES DEFINED ON FUNCTION
  //8. Object.create can be used to create an object from prototype as other object
  //9. person1.constructor points to the function with which the objectwas created and can be used to create the other objects with similar function


  
  
function Person(firstname,lastname,age,gender,interests){
    this.name={
       "firstname":firstname,
       "lastname":lastname
    };
    //let pronoun;
    //this.pronoun=pronoun;
    this.gender = gender,
    this.age =age,
    this.interests = interests,
    this.greeting = function(){
        console.log("Hi I am " +this.name.firstname );
    }
 
    if(this.gender=="female"){
        this.pronoun = "She";
    }
    else{
        this.pronoun ="He";
    }

    this.bio = function() {
        console.log(this.name.firstname + ' ' + this.name.lastname + ' is ' + this.age + ' years old.' +this.pronoun+ ' likes ' + this.interests+ '.',);
    }
   
}

Person.prototype.farewell = function(){
  console.log(`${this.name.firstname} has left building`);
}

  let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
// person1.__proto__ == Person.prototype
// person1.__proto__.__proto__ == Person.prototype.__proto__
// person1.__proto__.__proto__ == Object.prototype
// Object.prototype.__proto__ == null
// person1.__proto__.__proto__.__proto__

Person.keys ="Person Keys"
  person1.__proto__.__proto__.__proto__
  Person.keys
  Object.keys
  person1.keys
  //person1.keys="person instance keys"
  //person1.keys() --> undefined
  //Object.prototype.keys
  Person.keys
  Object.keys
  person1.keys
  console.log(Person.prototype)
  console.log(Object.prototype)
  //Object.keys()

  console.log(person1.bio())
  console.log(person1.valueOf())
  person1.farewell();

  let a = {x :"x"}
  let obj = new Object({
      x: "x"
  })

  let b = {y : "x"}

  //a.__proto__ == Object.prototype
  //Object.prototype.__proto__ = null

  a.x
  a.__proto__.__proto__
  debugger;

Array
let arr = [1,2,3]
Array.isArray
arr.concat

String
let str = "my string"
String.raw
str.split()

Date
let date = new Date()
Date.now()
date.getDate()

let person2 = Object.create(person1);

debugger
