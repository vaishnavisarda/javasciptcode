

let person={
    name:['Vaishnavi','Toshniwal'],
    age :23,
    gender : 'female',
    interests : ['music ','sketing'],

    bio: function(){
      console.log(this.name[0]+' '+ this.name[1]+' is ' + this.age + ' years old.She likes ' + this.interests[0]+ 'and ' +  this.interests[1]+ '.'); 
    },
    greeting : function(){
        console.log('Hi ! I\'m ' + this.name[0] + '.');
    }
};

console.log(person.name);
console.log(person.name[0]);
console.log(person.age);
console.log(person.interests[1]);
person.bio()
person.greeting()
