// Constructor Fuction
// creates objects
// using pascal notation

function Circle(radius){
 this.radius=radius;
 this.draw=function(){
   console.log('This will create a circle');
 };
}
const circle1= new Circle(2);
console.log(circle1);