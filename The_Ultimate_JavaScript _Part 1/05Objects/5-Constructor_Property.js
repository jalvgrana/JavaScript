//Every object has a construction property and
//and that references the function that used to create the object.

new String(); // but we use instead '', "", ``
new Boolean(); // but we use instead true, false
new Number(); // but we use instead 1,2,3,...

//Factory Functions-
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

circle.constructor;
