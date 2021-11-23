let lizzieTheCat = {
    age: 18,
    furColor: 'grey',
    meow: function() {
      console.log('meowww');
    },
    eat: function(food) {
      console.log('Yum, I love ' + food);
    },
    sleep: function(numMinutes) {
      for (var i = 0; i < numMinutes; i++) {
        console.log('z');
      }
    }
  };

  let prop=Object.keys(lizzieTheCat);
  let value=Object.values(lizzieTheCat)
  for(let i=0;i<=prop ;i++){
    for(let j=0; j<=value;j++){
     
    }
    console.log(prop[i], value[i]);
  }
 
