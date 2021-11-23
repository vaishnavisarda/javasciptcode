let arr = [1,2,3,4,5];

console.log(typeof arr);

console.log(arr);

let arr1 = new Array(10);

arr1[0] = 1;
arr1[5] = 2;

console.log(arr1);

for(let i of arr) {
    console.log(i);
}

for(let i = 0; i< arr.length;i++){
    console.log(`Value : ${arr[i]}`);
    console.log(`Index : ${i}`);
}

let arrStr = ["Sumit", "Vaishnavi", "Toshniwal"];
let str = "sumit";

console.log(arrStr)

console.log(Array.isArray(arrStr));
console.log(Array.isArray(str));