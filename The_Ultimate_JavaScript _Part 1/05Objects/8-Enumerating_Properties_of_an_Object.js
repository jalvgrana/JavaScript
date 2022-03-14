const circle = {
  radius: 1, //(radius) property
  draw() {
    // (draw) method
    console.log("draw");
  },
};

//simplest way to enumerate the properties of an object
for (let key in circle) console.log(key, circle[key]);

//for-of loop:
//Gives an error → it is not iterable
//Just arrays and maps are iterable, but not objects
for (let key of circle) console.log(key);

//but here it works because transforms into an array
for (let key of Object.keys(circle)) console.log(key);

//to change key for entry, select & F2
//the array gives the first element the key and the second the value
for (let entry of Object.keys(circle)) console.log(entry);

//to check if a given property or method exists in an object
if ("radius" in ciricle) console.log("yes");
