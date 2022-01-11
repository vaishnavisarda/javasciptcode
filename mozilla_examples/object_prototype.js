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

  let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
  person1.__proto__.__proto__.__proto__

  console.log(Person.prototype)
  console.log(Object.prototype)

  console.log(person1.bio())
  console.log(person1.valueOf())

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