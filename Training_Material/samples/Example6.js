// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let celci=45;
//°C to °F	Divide by 5, then multiply by 9, then add 32
//°F to °C	Deduct 32, then multiply by 5, then divide by 9
let feherenheit;
feherenheit=celci/5*9+32;
console.log(feherenheit);
console.log(`${celci} Celcius is ${feherenheit} Feherenheit`);
let celsiu;
celciu=((feherenheit-32)*5/9);
console.log(celciu);
console.log(`${feherenheit} Feherenheit is ${celciu} Celcius`)