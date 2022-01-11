function Person(firstname,lastname,age,gender,interests){
    this.name={
       "firstname":firstname,
       "lastname":lastname
    };
    //let pronoun;
    //this.pronoun=pronoun;
    this.gender = gender,
    this.age =age,
    this.interests = interests;

 
    if(this.gender=="female"){
        this.pronoun = "She";
    }
    else{
        this.pronoun ="He";
    }

   
}

Person.prototype.farewell = function(){
  console.log(`${this.name.firstname} has left building`);
}

Person.prototype.greeting = function(){
    console.log("Hi I am " +this.name.firstname );
}


Person.prototype.bio = function() {
    console.log(this.name.firstname + ' ' + this.name.lastname + ' is ' + this.age + ' years old.' +this.pronoun+ ' likes ' + this.interests+ '.',);
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

person1.greeting()
person1.bio()
person1.farewell()