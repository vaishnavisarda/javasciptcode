// //let a=[1,2,3,4,5];

// let a = 12345;
// console.log(a.length);
// //let a="12345";
// for(let i=0;i<a.length;i++){
//     console.log(typeof a[i]);
// }



// let arr =[1,2,3,5,6,4];
// let sum =0;
// for(let i=0;i<arr.length;i++){
// sum+= arr[i];
// console.log(sum);
// }

// let num ="12345";
// let num =12345;
// let num = [1,2,3,4,5]
// console.log(num)

let value = 2568,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);