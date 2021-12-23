// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// let a = 1;
// let arr = [a];
// let arr = [1];
let arr = [{
    title: "One Night At Call  the Centre",
    author: "Chetan Bhagat",
    alreadyRead: true
}, {
    title: "Autobiography Of Mahatma Gandhi",
    author: "Mahatma Gandhi",
    alreadyRead: false
}, {
    title: "One Indian Girl",
    author: "Chetan Bhagat",
    alreadyRead: true
}];
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i].title);
    if (arr[i].alreadyRead == true) {
        console.log("you have already read " + arr[i].title);
    }
    else {
        console.log("You still have to read " + arr[i].title);
    }

    //console.log(arr[i].title +" by "+arr[i].author);
}
