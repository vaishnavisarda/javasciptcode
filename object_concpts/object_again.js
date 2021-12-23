// // function Person(first,last,age,gender,interests){
// //     this.name ={
// //         first,
// //         last
// //     };
// //    this.age=age
// //     this.gender=gender
// //    this.interests =interests;
// //    console.log(age)
// // // };
// //    function Brick(){
// //        this.width =10;
// //        this.height =20;
// //    }

// //    function BlueGlassBrick(){
// //        Brick.call(this);

// //        this.opacity =0.5;
// //        this.color = "blue";
// //    }

// // const person ={};
// // console.log(person);


// const person={
//     name:['Vaishnavi','Gauri'],
//     age :23,
//     gender : 'female',
//     interestd : ['music','sketing'],

//     bio: function(){
//         console.log(this.name[0]+' '+ this.name[1]+'is' + this.age + 'years old.He likes' + this.interests[0]+ 'and' +  this.interests[1]+ '.'); 
//     },
//     greeting : function(){
//         console.log('Hi ! I\'m' + this.name[0] + '.');
//     }
// };


// let cat = {
//     name: 'Vaishnavi',
//     color: 'white',
//     greeting: defGreeting,
//     color: 'black'
// }

// function defGreeting() {
//     console.log('Hi I am  greeting1 ' + this.name + '.' + this.name1);
//     return 1;
// }

// // Put your code here
// console.log(cat.name);


// console.log(cat.color);

// console.log(cat.greeting);
// cat.greeting()
// //this = {}
// console.log(defGreeting());
// //this = cat
// console.log(cat.greeting());
// console.log(defGreeting.call(cat));
// //this = {
// // name : "name"
// //}
// console.log(defGreeting.call({
//     name: "Sumit"
// }));

// console.log(cat.greeting.call({
//     name: "name"
// }));

let object ={
    "a":1,
    "b":2,
    "c":3
}
console.log(object["a"]+":"+ Object.keys(object));
console.log(object["b"]);
console.log(object["c"]);


// for(let i=0;i<array.length-1;i++){
  console.log(Object.keys(object));
  console.log(Object.values(object));
// key as value ,value as key  let object ={  1:"a",2:"b,3:"c}

let object1 ={}
