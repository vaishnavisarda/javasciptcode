// function Person(first,last,age,gender,interests){
//     this.name ={
//         first,
//         last
//     };
//    this.age=age
//     this.gender=gender
//    this.interests =interests;
//    console.log(age)
// // };
//    function Brick(){
//        this.width =10;
//        this.height =20;
//    }

//    function BlueGlassBrick(){
//        Brick.call(this);

//        this.opacity =0.5;
//        this.color = "blue";
//    }

// const person ={};
// console.log(person);


const person={
    name:['Vaishnavi','Gauri'],
    age :23,
    gender : 'female',
    interestd : ['music','sketing'],

    bio: function(){
        console.log(this.name[0]+' '+ this.name[1]+'is' + this.age + 'years old.He likes' + this.interests[0]+ 'and' +  this.interests[1]+ '.'); 
    },
    greeting : function(){
        console.log('Hi ! I\'m' + this.name[0] + '.');
    }
};
