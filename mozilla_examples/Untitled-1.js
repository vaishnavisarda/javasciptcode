let f = "vaishnavi", l = "toshniwal";

//First Implementor

let firstImplementor = {
    name: `${f} , ${l}`,
    greeting: function() {
        console.log(`Hi I am ${this.name}`);
    }
}

//Second Implementor

let secondImplementor = {
    name: {
        first : f,
        last : l
    },
    greeting: function() {
        console.log(`Hi I am ${this.name.first}, ${this.name.last}`);
    }
}