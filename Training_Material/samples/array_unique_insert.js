//Write a program to add an element to array if it does not exist in array.
//push
let unique_value_array = [];

function printArray() {
    console.log("Array is : ", unique_value_array);
}

function insertUniqueValue(value) {

}

insertUniqueValue(1);
printArray();//[1]
insertUniqueValue(2);
printArray();//[1,2]
insertUniqueValue(3);
printArray();//[1,2,3]
insertUniqueValue(1);
printArray();//[1,2,3]
insertUniqueValue(4);
printArray();//[1,2,3,4]
insertUniqueValue(5);
printArray();//[1,2,3,4,5]
insertUniqueValue(3);
printArray();//[1,2,3,4,5]
insertUniqueValue(5);
printArray();//[1,2,3,4,5]
insertUniqueValue(10);
printArray();//[1,2,3,4,5,10]
insertUniqueValue(11);
printArray();//[1,2,3,4,5,10,11]
insertUniqueValue(8);
printArray();//[1,2,3,4,5,10,11,8]
insertUniqueValue(10);
printArray();//[1,2,3,4,5,10,11,8]