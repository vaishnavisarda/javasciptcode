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
let library =[
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

           var sort_by = function(field_name, reverse, initial){

            var key = initial ?
                function(x)
                      {
                        return initial(x[field_name]);
                      } :
                function(x) 
                      {
                        return x[field_name];
                      };
         
            reverse = !reverse ? 1 : -1;
         
            return function (x, y) {
                return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
              } ;
         };
         
         
         var newobj = library.sort(sort_by('libraryID', true, parseInt));
         
         console.log(newobj)
         var sort_by = function(field_name, reverse, initial){
         
            var key = initial ?
                function(x)
                      {
                        return initial(x[field_name]);
                      } :
                function(x) 
                      {
                        return x[field_name];
                      };
         
            reverse = !reverse ? 1 : -1;
         
            return function (x, y) {
                return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
              } ;
         };
         
         
         var newobj = library.sort(sort_by('libraryID', true, parseInt));
         
         console.log(newobj)
        //    console.log(library.sort());
