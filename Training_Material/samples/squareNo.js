
// // Write a function called squareNumber that will take one argument (a number), 
// // square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// // Bonus: Round the result so there are only two digits after the decimal.
// // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// // Take half of the number and store the result.
// // Square the result of #1 and store that result.
// // Calculate the area of a circle with the result of #2 as the radius.
// // Calculate what percentage that area is of the squared result (#3).


//  function squareNumber(a){
//      let res=a*a;
//      console.log(`The result of squaring number ${a} is ${res} `);
//      return(res);
//  }

// //squareNumber(10);

// function halfNum(b){
//     let half=b/2;
//     console.log(`Half of ${b} is ${half}`);
//     return half;
// }

// //halfNum(25);

//  function percentOf(c,d){
//      let per=c/d*100;
//    console.log(`${c} is ${per}% of ${d}`);
//    return per;

//  }

// // percentOf(5,35);

//  function areaOfCircle(e){
//      let area=3.14*e*e;
//      console.log(`The area for a circle with radius ${e} is ${area}`);
//       return area;
//  }

//  //areaOfCircle(25);

// // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// // Take half of the number and store the result.
// // Square the result of #1 and store that result.
// // Calculate the area of a circle with the result of #2 as the radius.
// // Calculate what percentage that area is of the squared result (#3).


// function oper(s){
//     let half=halfNum(s);
//     //console.log(`Half of ${s} is ${half}`);
//     //halfNum(s);
     
//     let sq=squareNumber(half);
//     //console.log(sq);
//     let ar=areaOfCircle(sq);

//     let perc=percentOf(sq, ar);
    
// }


// oper(8);

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

function DrEvil(amount){
    //console.log(amount);
    if(amount==1000000){
        
        //console.log(amount+ "Dollars (pinky)");
       return amount+"Dollars(pinky)";
    }
    else{
        console.log(amount+"Dollars");
        return amount+"Dollars";
    }
}

let op=DrEvil(1000000);
console.log(op);

