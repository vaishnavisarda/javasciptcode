
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns Language name for that language code, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.


function helloWorld(l){
    if(l=="es"){
        return "Spanish";    
    }
    if(l=="de"){
        return "German";
    }
    else{
        return "English";
    }
   }
   
   console.log(helloWorld("es"));
   console.log(helloWorld("de"));
   console.log(helloWorld("en"));