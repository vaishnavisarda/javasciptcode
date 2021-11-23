// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
// // Input
// var cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty)); // 60.55
let shopping ={
    "shirts":"300",
    "pants":"700",
    "tie":"250",
    "kurtis":"600"
}

function cashRegister(obj){
    let total = 0;
    let items=Object.keys(obj);

    for(let i=0;i<items.length;i++){
        let itemName = items[i];
        let itemPrice = obj[itemName];
        total += Number.parseFloat(itemPrice);
    }
    return total;
}
console.log(cashRegister(shopping));