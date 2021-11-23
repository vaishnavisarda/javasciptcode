let a1 = {};

let a2 = {
    b: "b",
    c: 1
};

console.log(typeof a1)
console.log(typeof a2)
console.log(a2.b)
console.log(a2.c)

a2.d = "d";
console.log(a2.d);

let objectWithDifferentDataTypes = {
    numProperty: 1,
    stringProperty: "this is a string property",
    boolProperty: true,
    array: ["array1", "array2"],
    function1: function (arg) {
        console.log("This is a function on object");
        return 20;
    },
    nestedObject: {
        propOnNestedObject: "This is a nested property"
    }
};

console.log(objectWithDifferentDataTypes.numProperty);
console.log(objectWithDifferentDataTypes.boolProperty);
console.log(objectWithDifferentDataTypes.stringProperty);
console.log(objectWithDifferentDataTypes.array);
console.log(objectWithDifferentDataTypes.array[0]);
console.log(objectWithDifferentDataTypes.array[1]);
console.log(objectWithDifferentDataTypes.function1());
console.log(objectWithDifferentDataTypes.nestedObject.propOnNestedObject);

objectWithDifferentDataTypes.dynamicProp = "This is a dynamic property";
console.log(objectWithDifferentDataTypes.dynamicProp);

let key = "numProperty";
console.log(objectWithDifferentDataTypes.key);
console.log(objectWithDifferentDataTypes[key]);
console.log(objectWithDifferentDataTypes.boolproperty);
console.log(objectWithDifferentDataTypes["boolproperty"]);
console.log(objectWithDifferentDataTypes["boolProperty"]);
console.log(objectWithDifferentDataTypes["stringProperty"]);
console.log(objectWithDifferentDataTypes["array"]);
console.log(objectWithDifferentDataTypes["array"][0]);
console.log(objectWithDifferentDataTypes["array"][1]);
console.log(objectWithDifferentDataTypes["function1"]());
console.log(objectWithDifferentDataTypes.function1());
//objectWithDifferentDataTypes["function1"]() => objectWithDifferentDataTypes.function1()
console.log(objectWithDifferentDataTypes["nestedObject"]["propOnNestedObject"]);
console.log(objectWithDifferentDataTypes["nestedObject"].propOnNestedObject);
console.log(objectWithDifferentDataTypes.nestedObject["propOnNestedObject"]);
console.log(objectWithDifferentDataTypes.nestedObject.propOnNestedObject);
//objectWithDifferentDataTypes["nestedObject"] => objectWithDifferentDataTypes.nestedObject
objectWithDifferentDataTypes["dynamicPropSubscript"] = "This is a dynamic property with subscript notations";
console.log(objectWithDifferentDataTypes["dynamicPropSubscript"]);
console.log(objectWithDifferentDataTypes.dynamicPropSubscript);

objectWithDifferentDataTypes.stringProperty = "This is a new string property";

console.log(objectWithDifferentDataTypes["stringProperty"]);

objectWithDifferentDataTypes.stringProperty = objectWithDifferentDataTypes.stringProperty + ". This is appended string";
console.log(objectWithDifferentDataTypes["stringProperty"]);

console.log(Object.keys(objectWithDifferentDataTypes));

let keys = Object.keys(objectWithDifferentDataTypes);

for (let i = 0; i < keys.length; i++) {
    console.log("Key : ", keys[i]);
    console.log("Value : ", objectWithDifferentDataTypes[keys[i]]);
}

//Array of objects

let object1 = {
    o: "This is object1 property",
    toString: function () {
        return "Object1";
    }
}

let object2 = {
    o: "This is object2 property",
    toString: function () {
        return "Object2";
    }
}

let object3 = {
    o: "This is object3 property",
    toString: function () {
        return "Object3";
    }
}

console.log(object1.toString())
console.log(object1.toString() + "");
console.log(object1);

let arr = [object1, object2, object3];

console.log(arr[0].o);
console.log(arr[0] + "");
console.log(arr[1].o);
console.log(arr[1] + "");
console.log(arr[2].o);
console.log(arr[2] + "");

let foundObject = arr.find(function (arg) {
    return ((arg.o) == arr[1].o);
});

console.log(foundObject);

function inputObject(arg) {
    console.log(arg);
    let someProperty = arg.inProperty;
    let output = {
        outProperty: someProperty
    }
    return output;
}

let inputObj = {
    inProperty: "This is a property"
};
let inputNum = 1;

let outputObject = inputObject(inputObj);

console.log(outputObject);

let lizzieTheCat = {
    age: 18,
    furColor: "grey",
    likes: ["catnip", "milk"],
    birthday: { "month": 7, "day": 17, year: 1994 }
}

function describeCat(cat) {
    console.log("This cat is " + cat.age + " years old with " + cat.furColor + " fur.");
}

describeCat(lizzieTheCat);

let a = "some value";
let b = function() {
    
}