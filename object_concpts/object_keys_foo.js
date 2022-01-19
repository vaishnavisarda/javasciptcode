const myObj = Object.create({}, {
    getFoo: {
      value: function () { return this.foo; }
    }
  });
  myObj.foo = 1;
  console.log(Object.keys(myObj)); // console: ['foo']
  myObj.getFoo();