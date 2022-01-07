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

  console.log(Person.prototype)
  console.log(Object.prototype)

  console.log(person1.bio())
  console.log(person1.valueOf())
