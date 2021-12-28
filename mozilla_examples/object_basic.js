// const objectName = {
//     member1Name: member1Value,
//     member2Name: member2Value,
//     member3Name: member3Value
//   };

//Declaration of  object----

//   let object1 ={
//       "Name": "Vaishnavi",
//       "Surname": "Toshniwal",
//       "Age" : 23,
//       "Work" : "IT",
//       }

//       // setting object members
//       object1.Age =30;
//       object1.Name = "Vishu";
//       object1.hello = function(){
//           console.log("Hello Everyone");
//       }

 
//   //Dot notation ----
//   console.log(object1.Name);
//   console.log(object1.Surname);
//   console.log(object1.Age);
//  console.log(object1.hello());
//   //Sub-namespaces

//   let object2={
//       name:['Vaishnavi','Toshniwal']
//   }
//   console.log(object2.name[0]);
//   console.log(object2.name[1]);
  
  
  let object3={
      "age" :"23",
      name:{
          "First": "vaishnavi",
          "Last" : "Toshniwal"
      },  
  }
  object3.age =30;
  console.log(object3.age);
  console.log(object3['name']['Last']);


//   let myDataName = nameInput.value;
//   let myDataValue = valueInput.value;
//   object3[myDataName] = myDataValue;

//   let myDataName ="height";
//   let myDataValue ="1.70m";
//   object3[myDataName]=myDataValue;

//   console.log("setting object members");
//   console.log(object3.height);
//bracket notation

// console.log(object1['Name']);
// console.log(object1['Surname']);
// console.log(object1['Age']);

//   console.log(object3.name.First);
//   console.log(object3.name.Last);

//   console.log("bracket output");
//   console.log(object3['name']["First"]);
//   console.log(object3['name']['Last']);
 

//   object1.custom="Custom"

//  object1.nested={
//      'name':'sumit',

//  }
//  console.log(object1.nested.name);
//  console.log(object1['nested']['name']);