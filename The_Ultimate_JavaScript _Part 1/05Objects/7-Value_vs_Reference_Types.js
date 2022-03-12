//When we use an object that object is not stored in this variable
//but somewhere else in the memory and the address of that memory
//is stored inside that variable

let x1 = 10; //10 is stored inside of x variable
let y1 = x1;
x1 = 20;
//x & y are independent variables
//here x1=20 and y1=10

//When having an object and property called 'value'
let x2 = { value: 10 };
let y2 = x2;
x2.value = 20;
//in the console typying x1 (enter) is equal to 20 and y2 too

//Therefore:
//Primitives are copied by their value
//Objects are copied by their reference

//That's why this program doesn't increase:
let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number);

//But this one increases from 10 to 11
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);

In JS we have the
Value types (primitives): number, string, boolean, symbol, undefined & null
Reference types (objects): object, function, array
