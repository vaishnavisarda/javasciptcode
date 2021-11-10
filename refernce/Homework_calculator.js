// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

function squareNumber(num){
    let square = num*num;
    console.log(`The result of squaring the number ${num} is ${square}`);
}

function halfNumber(num1){
    let result =num1/2;
    console.log(`Half of ${num1} is ${result}`);
}

function percentOf(arg1,arg2){
let ans=arg1/arg2*100;
console.log(`${arg1} is ${ans} % of ${arg2}`);

}
function  areaOfCircle(value){
    let area =3.14*value*value;
    console.log(`The area for a circle with radius ${value} is ${area}`);
}


squareNumber(4);
halfNumber(8);
percentOf(2,10);
areaOfCircle(6);
