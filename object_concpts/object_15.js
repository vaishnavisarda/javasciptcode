let obj ={
    "name":"Vaishnavi",
    "surname" : "Toshniwal",
    "husband" : "Sumit",
    "study" :"BCA"
}
let ans =Object.keys(obj).map((key)=>[key , obj[key]]);

console.log(ans);