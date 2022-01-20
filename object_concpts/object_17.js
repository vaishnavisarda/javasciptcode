// Write a JavaScript function to check whether an object contains given property
// console.log(checkIfPropertyExists(obj, property))
// true if property exist
// otherwise false


function checkIfPropertyExists(object, propertyName) {
    for(let key in object) {
        if(key == propertyName) {
            return true;
        }
    }
    return false;
}

console.log(checkIfPropertyExists({
    "name" : "xyz"
}, "name"));

console.log(checkIfPropertyExists({
    "name" : "xyz"
}, "gender"));