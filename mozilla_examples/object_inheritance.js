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
    console.log(this.name);

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

// Teacher.prototype.greeting = function () {
//     let prefix;

//     if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
//         prefix = 'Mr.';
//     } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
//         prefix = 'Ms.';
//     } else {
//         prefix = 'Mx.';
//     }


//     console.log('Hello. My name is ' + prefix + ' ' + this.name.lastname + ', and I teach ' + this.subject + '.');
// }



//Teacher.prototype.constructor = Teacher
let t = new Teacher('Vaishnavi', 'Toshniwal', 23, 'female', 'sketching', 'drawing');
let person = new Person('GAuri', 'Sarda', 18, 'female', 'writting', 'hindi');
console.log(person.name);
person.greeting();
t.greeting()

console.log(Teacher.someProperty)
// person.greeting();

// let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
// han.greeting();
// // Hi! I'm Han

// // let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
// // leia.farewell();