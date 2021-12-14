// Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function  subset(str){
  let ans=[];

  for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length+1;j++){
      ans.push(str.slice(i,j))
    }
  }
  return ans;
}

 console.log(subset("vaishnavi"));
//  let str ="Dog";
//  console.log(str.slice(0,1));
//  console.log(str.slice(0,2));
//  console.log(str.slice(0,3));
//  console.log(str.slice(1,2));
//  console.log(str.slice(1,3));
//  console.log(str.slice(2,3));