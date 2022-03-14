const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

//To clone an object:
//Old style
const another = {};
for (let key in circle) another[key] = circle[key];
//equivalent to another['radius'] = circle ['radius'];
console.log(another);

//Newer approach
const another1 = Object.assign({}, circle);
console.log(another1);

//To add another property to the ones copying
const another2 = Object.assign(
  {
    color: "yellow",
  },
  circle
);
console.log(another2);

// another clearner way to clone an object:
const another3 = { ...circle };
console.log(another3);
