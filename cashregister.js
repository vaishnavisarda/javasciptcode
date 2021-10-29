// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//  Input
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
let cart = {  
     "pant":2000,
     "shirts":1500,
     "kurti":650,
     "salwar":700,
     "nigthsuit":800
}  
function cashRegister(cart){
    let items=Object.keys(cart);
    let sum=0;

    for(let i = 0;i< items.length; i++) {
        let Name = items[i];
        let Price = cart[Name];
        sum +=Number.parseFloat(Price);
      
    }
    return sum;
    
}
console.log(cashRegister(cart));
