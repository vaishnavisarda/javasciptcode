let arr1=[1,2,3,4]
let arr2=[1,2,3,4]
let matchFound = true;

for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] != arr2[i]){
        matchFound=false;
        break;
    }
}

if(matchFound) {
    console.log("Array has matched");
} else {
    console.log("Array has not  matched");
}
