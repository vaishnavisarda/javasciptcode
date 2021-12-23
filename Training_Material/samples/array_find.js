let arr = ["a", "c", "b", "d"];

let output = arr.find(function (arg) {
    console.log("Calling for : ", arg)
    return arg == "z";
});

console.log(output);