function caller() {
    console.log(this.name)
    console.log(this.name1)
}
// caller()
// this = {
//  
// }
caller();
// caller()
// this = {
//    name: "overridden now"
// }
caller.call({
    name: "overridden now",
    name1:"other name"
});