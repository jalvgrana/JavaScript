//In JS functions are objects that

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

//Circle. muestra en VS todo los "circle objects"
//Circle.name → returns name of the functions
//Circle.length → returns the number of arguments, 1 in this case
//Circle.constructor → to know who created this object

const another = new Circle(1);

const Circle1 = new Function(
  "radius",
  `this.radius = radius;
this.draw = function () {
  console.log("draw");
};`
);

//Circle.call() → to call a function
//Circle.call({}, 1) and const another = new Circle(1) are equivalent
//Without the new operator 'this' will point to 'window'
//Circle.apply({}, [1,2,3]) to pass the arguments in an array
