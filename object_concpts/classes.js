class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log("My name is "+this.name);

    }
}

let persone = new Person("XYZ");
persone.introduceSelf()
persone.name = "Changed"
console.log(persone.name);