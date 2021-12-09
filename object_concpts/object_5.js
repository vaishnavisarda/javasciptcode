// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// // where r is the radius and h is the height of the cylinder.

function cylinder(radius,height,pie){
    this.radius =radius;
    this.height = height;
    this.pie =pie;
    this.volume =function(){
        return this.radius *this.radius*this.height*this.pie
    }
}

let ans=new cylinder(8,20,3.14);
console.log(ans.volume());

