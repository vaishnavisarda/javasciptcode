// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

let arrayString = ["chocolate", "ice-craem", "maggie", "pav-bhaji", "pasta","hello","World"];
// for (let i = 1; i < arrayString.length; i++) {
//    // console.log("Running for i = ", i);
//     if (i == 1) {
//         console.log(`${i}st ${arrayString[i]}`);
//         continue;
//     }

//     if (i == 2) {
//         console.log(`${i}nd  ${arrayString[i]}`);
//         continue;
//     }
//     if (i == 3) {
//         console.log(`${i}rd ${arrayString[i]}`);
//     }

//     else 
//     {
//         console.log(`${i}th ${arrayString[i]}`);
//     }
// }

// for (let i = 1; i < arrayString.length; i++) {
//     // console.log("Running for i = ", i);
//      if (i == 1) {
//          console.log(`${i}st ${arrayString[i]}`);  
//      }

//      else if (i == 2) {
//          console.log(`${i}nd  ${arrayString[i]}`);

//      }
//      else if (i == 3) {
//          console.log(`${i}rd ${arrayString[i]}`);
//      }

//      else 
//      {
//          console.log(`${i}th ${arrayString[i]}`);
//      }
//  }

for (let i = 1; i < arrayString.length; i++) {
    // console.log("Running for i = ", i);
    switch (i) {
        case 1:
            console.log(`${i}st ${arrayString[i]}`);
            break;
        case 2:
            console.log(`${i}nd  ${arrayString[i]}`);
            break;
        case 3:
            console.log(`${i}rd ${arrayString[i]}`);
            break;
        default:
            console.log(`${i}th ${arrayString[i]}`);
            break;
    }
}
console.log("Out of for loop")