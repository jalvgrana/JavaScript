// const circle = {
//     radius: 1,
//     location: {
//       x: 1,
//       y: 1,
//     },
//     isVisible: true,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// const circle2 = {
//     radius: 1,
//     location: {
//       x: 1,
//       y: 1,
//     },
//     isVisible: true,
//     draw: function () {
//       console.log("draw");
//     },
//   };

//To avoid this, we do factory functions:

//longer version
function createCircle(radius) {
  return {
    radius: radius, //when key and value are the same can be simplified
    draw: function () {
      console.log("draw");
    },
  };
}

const circle0 = createCircle(0);
console.log(circle0);

//Shorter version
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//testing code: VStudio terminal and node [name_of_file]
