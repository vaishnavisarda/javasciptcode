
let obj ={
    "name":"Vaishnavi",
    "surname" : "Toshniwal",
    "husband" : "Sumit",
    "study" :"BCA"
}

let keys = Object.keys(obj);
let list = [];

for(let i = 0; i < keys.length; i++) {
    list.push([keys[i]+" : " +obj[keys[i]]]);
}

console.log(list);