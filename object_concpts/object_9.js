// Write a JavaScript program to calculate the area and perimeter of a circle. Go to the editor
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user. 

function circle(radius){
    let area = 3.14*radius*radius;
    console.log(area);
    let perimeter = 2*3.14*radius;
    console.log(perimeter);
}
 circle(10);