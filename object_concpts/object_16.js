// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys. 
// {
//    xyz:"name",
//    abc: "gender",
//    20: age
//}
let obj = {
    name: "xyz",
    gender: "abc",
    age: 20
};

let target = {};

let keys = Object.keys(obj);

for(let i = 0; i < keys.length; i++) {
    target[obj[keys[i]]] = keys[i];
}

console.log(target)