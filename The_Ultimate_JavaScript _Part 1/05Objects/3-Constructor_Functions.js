//Constructor Functional constructor

//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
