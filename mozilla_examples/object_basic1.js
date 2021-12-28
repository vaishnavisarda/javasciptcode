
let cat = {
    name: 'Vaishnavi',
    color: 'white',
    greeting: defGreeting,
    color: 'black'
}

function defGreeting() {
    console.log('Hi I am  greeting1 ' + this.name + '.' + this.name1);
    return 1;
}

console.log(cat.name);


console.log(cat.color);

console.log(cat.greeting);
cat.greeting()
// //this = {}
// console.log(defGreeting());
// //this = cat
// console.log(cat.greeting());
// console.log(defGreeting.call(cat));
// //this = {
// // name : "name"
// //}
// console.log(defGreeting.call({
//     name: "Sumit"
// }));

// console.log(cat.greeting.call({
//     name: "name"
// }));
