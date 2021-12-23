// Write a JavaScript program to sort an array of JavaScript objects. Go to the editor
// Sample Object :

// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];


let library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

library.sort(function(a,b){
    return a.libraryID-b.libraryID
});


function sort_object(){
  console.log(library[0].title+ " " + library[0].author + " "+
  library[0].libraryID );
  
  console.log(library[1].title+ " " + library[1].author + " "+
  library[1].libraryID)
  
  console.log(library[2].title+ " " + library[2].author + " "+
  library[2].libraryID);
}

sort_object();

