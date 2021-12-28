function Person(first,last,age,gender,interests){
    this.name ={
        first,
        last
    };
   this.age=age
    this.gender=gender
   this.interests =interests;
   console.log(age)
 };
   function Brick(){
       this.width =10;
       this.height =20;
   }

   function BlueGlassBrick(){
       Brick.call(this);

       this.opacity =0.5;
       this.color = "blue";
   }

const person ={};
console.log(person);
