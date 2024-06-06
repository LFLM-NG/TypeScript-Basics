// String
let lname: string;

lname = "John";

let newname = lname.toUpperCase();

console.log(newname);

// Number
let age: number;
age = 20;
age = 20.9;

let dob = "25";
let result = parseInt(dob);

// Boolean
let isValid: boolean = false;
console.log(isValid);

// Array
let empList: string[];
empList = ["John", "John1", "John2"];
let numList: Array<number>;
numList = [1, 2, 3, 4, 5];
// let newNum = numList[5];     // cannot detect out of range index at compile
let results = numList.filter((num) => num > 2);
let emp = empList.find((emp) => emp === "John");
let sum = numList.reduce((acc, num) => acc + num);
let num = numList.find((num) => num === 2);
console.log(results);
console.log(num);
console.log(emp);
console.log(sum);

// Enum
const enum Color { // const will give the number value when converted to js
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;

// Tuple
let swapNumbs: [number, number];
function swapNumber(num1: number, num2: number): [number, number] {
  return [num2, num1];
}
swapNumbs = swapNumber(10, 20);
swapNumbs[0];
// swapNumbs[2];       // Tuple can detect out of range index at compile vs Array

// any
let department;
department = "IT";
department = 10;
// Avoid any if possible
