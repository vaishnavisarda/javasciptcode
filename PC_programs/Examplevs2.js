//Output your fortune to the screen like so: 
//"You will be a X in Y, and married to Z with N kids."

let x="Engineer";
let y= "two years";
let z= "Sumit";
let printkids = false;
let N= 2;
// let stmt1="you will be an "+x;
// let stmt2=" in "  +y;
// let stmt3= " and married to "+z;
// let stmt4= " with " +N +" kids";
// let mult=`stmt1
// stmt2
// stmt3
// stmt4`
// let comb=`${stmt1} and ${stmt2} ${stmt3} ${stmt4}`;
// console.log(comb);
//console.log(stmt1 +  stmt2 + stmt3 +stmt4);
console.log("You will be an " +x +    " in " +y + " and married to " +z + " with " +N +  " kids");
console.log(`You will be an ${x}
 in ${y} and married to ${z} with ${printkids == true ? N : "empty"} kids`);

let firstName = "Vaishnavi";
let middleName = "Sumit";
let lastName = "Toshniwal";
console.log(`${firstName} ${middleName} ${lastName}`);
//Vaishnavi Sumit Toshniwal