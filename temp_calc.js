// C to F
// (0°C × 9/5) + 32 = 32°F

// F to C
// (32°F − 32) × 5/9 = 0°C

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let celcius =20;
let fahra_value =(celcius * 9/5)+32;
console.log(`${celcius} °C to ${fahra_value} °F`);
let fahra=40;
let celc_value =((fahra -32) * 5)/9 ;
console.log(`${fahra} °F to ${celc_value}`);
