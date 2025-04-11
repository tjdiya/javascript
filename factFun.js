// example for Facory function.
// it reurns an object.

function createCircle(radius){
    return{  
      radius,
      draw(){
          console.log('This will create circle');
      }
    };
      
   }
  const circle1= createCircle(2);
  console.log(circle1);
  console.log(circle1.draw());