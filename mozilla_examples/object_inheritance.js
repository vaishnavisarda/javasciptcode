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
    console.log(this.name);
 
    if(this.gender=="female"){
        this.pronoun = "She";
    }
    else{
        this.pronoun ="He";
    }

   
}

Person.prototype.greeting = function(){
    console.log("Hi I am " +this.name.firstname );
}


function Teacher(firstname,lastname,age,gender,interests,subject){
    Person(firstname,lastname,age,gender,interests)

    this.subject=subject;
    console.log("Before")
    console.log(this.name);
    console.log("After")
    //console.log(this.age);
   
    //console.log(this.subject);
   
   //console.log(this.gender);
     //onsole.log(this.interests);
}

let t=new Teacher('Vaishnavi','Toshniwal',23,'female','sketching','drawing');
// let person =new Person('GAuri','Sarda',18,'female','writting','hindi');

// person.greeting();

// let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
// han.greeting();
// // Hi! I'm Han

// // let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
// // leia.farewell();