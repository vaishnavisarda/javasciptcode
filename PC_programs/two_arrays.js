let letters = ["e", "l", "e", "p", "h", "a", "n", "t"];
let guessed_letters = ["_", "_", "_", "_", "_", "_", "_", "_"];
let saved_letters = [];
//let matchFound

let amount = 0;
function printArray() {
    console.log(guessed_letters);
}


function compare_arr() {
    let matchFound = true;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] != guessed_letters[i]) {
            matchFound = false;
            break;
        }
    }
    if (matchFound) {

        console.log(" Congratulations you have  successfully guessed the word");
        console.log(`Your total rewarding amount is ${amount}`);
    }
    else {
        console.log("guess another letter");
    }
}

/**
 * Input -> arg -> letter
 * 1) Check if letter already guessed
 * if yes -> return true
 * if no -> return false
 * 
 */
function checkIfLetterAlreadyGuessed(letter) {
    for (i = 0; i < saved_letters.length; i++) {
        if (saved_letters[i] == lettter) {
            return;
        }
        else {

        }
    }
}

function guessLetter(arg) {
    let match = false;

    console.log("array of saved letters" + saved_letters);
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] == arg) {
            match = true;
            guessed_letters[i] = arg;
            //arg.find(letters);


        }

    }
    let random_reward = Math.round(Math.random() * 100)
    if (match == true) {
        amount = amount + random_reward;
        console.log("You have successfully guessed the letter");
        console.log(`You won reward of  rupees ${random_reward}`);
        compare_arr();
        printArray();
    }
    else {
        amount = amount - random_reward;
        console.log(`you lose ${random_reward} rupees`);
        console.log("no match found");
    }
}


console.log("guessing");
guessLetter("a")
console.log("guessing");

guessLetter("c")
//No match found
console.log("guessing");
guessLetter("p")
console.log("guessing");

guessLetter("o")
//Guess another letter -> _ o _
console.log("guessing");

guessLetter("d")
//Guess another letter -> d o _
console.log("guessing");
guessLetter("h")
console.log("guessing");
guessLetter("l")
console.log("guessing");
guessLetter("z")
console.log("guessing");
guessLetter("e")

console.log("guessing");
guessLetter("y")

console.log("guessing");
guessLetter("t")
console.log("guessing");
guessLetter("y")
console.log("guessing");
guessLetter("n")



//Congratulations you have successfully guessed the word -> d o g