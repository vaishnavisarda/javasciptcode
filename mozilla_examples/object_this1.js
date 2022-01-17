// 1. Value of this depends on how the function is called
// Note : All the this values defined are explicitly declared before the function call for function to use
// 2. Independent function call: this=<global object>
// Example :
// function f1() {
// let this = <global object>
//}
// f1()
// 3. Function call on an object
// Example :
// let obj = {
//    f1: function() {
// let this = <obj>
//}
//}
// this = <obj>
// obj.f1()
// 4. Function call with new
// function C(){
// let this = {}
//}
// let c1 = new C()
// this = <{}>
// 5. .call
// function f1() {
// let this = <custom_value>
//}
// f1.call(<custom_value>)
// this = custome_value
// 6. apply and bind
//7. We can't modify the global object. and hence also not the this of independent function call


let cat = {
    name: 'Vaishnavi',
    color: 'white',
    greeting: defGreeting,
    color: 'black'
}

function defGreeting() {
    //let this = ;
    //console.log("Default inside fun : ", this.default)
    this.some = "def";
    return 1;
}


//this =<global this>
defGreeting();
cat.greeting();
defGreeting.call(cat);

defGreeting.call({
    name: "Sumit"
});

console.log(cat.greeting.call({
    name: "name"
}));

let greet = new defGreeting();

function inner() {
    this.some = "some inner"
}

let a = {
    name: "something"
};

inner.call(a)

function C() {
    this.name = "C";
    this.some="some";
}

let c = new C();

function sPerson() {
    this.name = "person name"
}

function sTeacher() {
    sPerson()
    this.subject = "subject name"
}

let t = new sTeacher();

function sTeacher1() {
    sPerson.call(this);
    this.subject = "subject name";
}

let t1 = new sTeacher1();