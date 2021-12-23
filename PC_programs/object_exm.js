// let myCats = [
//     {name: "Lizzie",
//      age: 18},
//     {name: "Daemon",
//      age: 1}
//   ];

//   for (let i = 0; i < myCats.length; i++) {
//     var myCat = myCats[i];
//     console.log(myCat.name + ' is ' + myCat.age + ' years old.');
//   }
let year = 2021;
let name = "xyz";
let lizzieTheCat = {
  "age": 18,
  "furColor": "grey",
  likes: ["catnip", "milk"],
  birthday: { "month": 7, "day": 17, year: 1994 },
  year: 2022,
  //name:name
  name

}
{
  let year = 2023;
}


console.log(lizzieTheCat)
console.log(lizzieTheCat.birthday[lizzieTheCat.year]);
console.log(lizzieTheCat["year"]);

function describeCat(cat) {
  console.log(`Birthdate of cat is  ${cat["birthday"]["day"]}-${cat.birthday.month}-${cat.birthday.year} `);
  console.log("This cat is " + cat["age"] + " years old with " + cat.furColor + " fur.");
}
console.log(typeof lizzieTheCat);
console.log(typeof lizzieTheCat.birthday);
console.log(typeof lizzieTheCat["birthday"]);
describeCat(lizzieTheCat);


let a = {b : 10};
console.log(a);
a = {c : 11, z : 11};
console.log(a.b, a.c);
let l = 10;
b = l;

let z = {
  y : b 
}

console.log(z)