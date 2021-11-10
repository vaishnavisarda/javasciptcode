// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(arg){

    if(arg == 'es'){
        return "Hola, Mundo";
    }
    else if(arg == 'fr'){
        return "Bonjour tout le monde";
        
    }
    else {
        return "hello World";
    }
    
}
console.log(helloWorld('es'));
console.log(helloWorld('en'));
console.log(helloWorld('fr'));