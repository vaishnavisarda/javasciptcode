

// function createObject(name){
//     let object={
//         "name": name,
//         greeting : function(){
//             console.log("Hi I am " +this.name)
//         }
//     }
//     return object;
// }

// let vObject = createObject("vaishnavi")
// vObject.greeting();

// let sObject = createObject("sumit");
// sObject.greeting();

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
let vObjectC = new Person("Vaishnavi","Toshniwal",23,"female",["sketching","painting","dancing"]);
vObjectC.greeting();
vObjectC.interests[1];
vObjectC.bio();

let sObjectC = new Person("Sumit","Toshniwal",28,"male",["Irritating vaishnavi","flute","cricket"]);
sObjectC.greeting();
sObjectC.interests[1];
sObjectC.bio();
