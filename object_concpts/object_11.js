// Write a JavaScript function to print all the methods in an JavaScript object. Go to the editor
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]



   function  all_properties(arg){
      let ownProperties = Object.getOwnPropertyNames(arg);
      let allProperties =[];
      for(let i=0;i<=ownProperties.length;i++){
         if(typeof arg[ownProperties[i]] =='function'){
            allProperties.push(ownProperties[i]);
         }
      }
    
    return allProperties;
   } 
    



   
   console.log(all_properties(Array));

    
       
       