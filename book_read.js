// Create an array of objects, where each object describes a book and has properties for the title (a string), author
//  (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book,
//   log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the
//    output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" 
// by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.

let books=[{
    "title":"Five point someone",
    "author":"Chetan Bhagat",
    "alreadyread" :true
},
{
    "title":"autobiography of Mahatma Gandhi",
    "author":"Mahatma Gandhi",
    "alreadyread": false
}];

for (let i=0;i<books.length;i++){
    let book =books[i];
    let book_info= book.title + " by " + book.author ;
    if(book.alreadyread ==true){
        console.log(`you already read ${book_info}`);
    }
    else{
        console.log(`you still need to read ${book_info}`);
    }
} 