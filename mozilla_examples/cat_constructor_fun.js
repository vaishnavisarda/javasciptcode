function Cat(name,breed,color){
    this.name =name,
    this.breed = breed,
    this.color = color,
    this.greeting = function() {
      console.log('Hello , said '+ this.name + ' the '+ this.breed + ' cat , with '+this.color +' color');
    }
    console.log(this.name)
  }

  let cat1 =new Cat("Kitty","Cymric","black");
  cat1.greeting();
  let cat2 = new Cat("Bertie","wild","white");
  cat2.greeting();