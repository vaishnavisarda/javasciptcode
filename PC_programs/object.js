// let person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

  let aboutMe = {
    hometown: "Pasadena, CA",
    hair: "brown"
  };
  console.log(aboutMe.hair);
aboutMe.hair = "blue";
aboutMe.gender = "female";
  let myHometown = aboutMe.hometown;
  console.log(myHometown);
  //Or using "bracket notation" (like arrays):
  
  //let myHair = aboutMe["hair"];
  //Non-existent properties will return undefined:
  let property = "gender";
  let gender="abc";
  let myGender1 = aboutMe["gender"];
  console.log("myGender1 - ",myGender1);
  let myGender2 = aboutMe[gender];
  console.log("myGender2 - ", myGender2);
  let myGender3 = aboutMe[property];
  console.log("myGender3 - ", myGender3);
  let myGender4 = aboutMe[aboutMe.gender];
  console.log("myGender4 - ", myGender4);
  let myGender5 = aboutMe.gender;
  console.log("myGender5 - ", myGender5);
  //Properties can also be accessed with variable keys
  
  let myProperty = "hair";
  let myHair = aboutMe[myProperty];
  console.log(myHair);
  console.log(aboutMe);