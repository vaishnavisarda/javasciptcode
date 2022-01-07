let person1 =new Object();

person1.name ="Vaishnavi";
person1.age =23,
person1.greeting= function(){
    console.log("Hello I am "+this.name +".");
}

person1.greeting();

let person2 =Object.create(person1);

person2.name;
person2.greeting();
// let person2 =new Object({
//     name :"Vaishnavi",
//     age : 23, 
//     greeting:function(){
//         console.log("Hello I am "+this.name + ".");
//     }
// });
// person2.greeting();