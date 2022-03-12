const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.size = "big";
circle.draw = function () {};
delete circle.size;
console.log(circle);
