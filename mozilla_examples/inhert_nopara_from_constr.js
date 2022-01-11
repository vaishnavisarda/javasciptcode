// function Brick(){
//     this.width=10;
//     this.height=20;
// }

// function callFromBrick(){
//     Brick.call(this);


//     this.opacity=0.5;
//     this.color='blue';
// }

let person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"
  