// Write a JavaScript function to retrieve all the values of an object's properties. 
// ["Vaishnavi","Toshniwal","Sumit","BCA"]

let myobject = {
  "name": "Vaishnavi",
  "surname": "Toshniwal",
  "husband": "Sumit",
  "study": "BCA",

  prop() {
    return `[ myobject ]`;
  }
};

function all_values(obj) {
  // Way 1 :
  // let values = [];

  // for (let key in obj) {
  //   if (typeof obj[key] !== 'function') {
  //     values.push(obj[key]);
  //   }
  // }
  // return values;

  // //Way 2
  // let values = Object.values(obj)
  // return values;

  // //WAy 3
  // let keys = Object.keys(obj);
  // let values= [];

  // for(let i = 0; i < keys.length; i++) {
  //   values.push(obj[keys[i]]);
  // }
  // return values;
}


console.log(all_values(myobject));