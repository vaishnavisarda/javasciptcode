//Create a function called verbing. 
//It should take a single argument, a string. 
//If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

// verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'
function verbing(str) {
    if (str.length >= 3 && !str.endsWith("ing")) {
        console.log(str + "ing");
        return (str+"ing");
    }


    if (str.endsWith("ing")) {
        console.log(str + "ly");
        return (str+"ly");
    }

    if (str.length < 3) {
        console.log(str);
        return str;
    }
}

let input = ["walk", "walking", "go", "do", "ing", "bring"];

for(let i of input) {
    let output=verbing(i);
    console.log(i + " = "+ output);
}

