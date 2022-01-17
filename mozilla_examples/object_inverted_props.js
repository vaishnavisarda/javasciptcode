let obj10 = {
    "initial": "initial value"
};
console.log(obj10.name);
console.log(obj10.initial);
console.log(obj10);
obj10.name = "c";
console.log(obj10.name);
console.log(obj10);
obj10["name1"] = "name1"
console.log(obj10);
console.log(Object.keys(obj10))
let keys = Object.keys(obj10);
console.log(obj10.initial);
//console.log(obj10["initial"]);

let x = "initial";
//console.log(obj10[x]);
let arr = ['', 'initial'];
// <property name> -----> Value
//console.log(obj10[arr[1]]);
for (let i = 0; i <= keys.length - 1; i++) {
    //console.log(obj10[keys[0]]);
    //console.log(keys[i] + "------->" + obj10[keys[i]])
    
    let key = obj10[keys[i]];
    //console.log(key);
    let val = keys[i];
    //console.log(val);
    // console.log("Key as Value and Value as Key");
    // console.log(key +"----->"+ val);
}
   let obj_new = {

   }
   for (let i = 0; i <= keys.length - 1; i++) {
    let key = obj10[keys[i]];
    let val = keys[i];
    obj_new[key]=val;
   }
    console.log("New Object as key and value shuffle");
    console.log(obj_new);