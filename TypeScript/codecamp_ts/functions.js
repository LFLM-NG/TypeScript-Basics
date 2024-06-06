"use strict";
// function format 1: named function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
// function format 2: arrow function
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
// function format 3: function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
// optional parameter
function add1(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
    //   (?): if num3 exist (:):else
}
console.log(add1(2, 3));
console.log(add1(2, 3, 5));
// required parameter
const sub1 = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub1(2, 3)); // default 10
console.log(sub1(2, 3, 5)); // use new value
// rest parameter
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[5, 6, 7]));
console.log(add2(2, 3, 5, 6, 7, 8, 9, 10));
// generic function
function getItems(items) {
    // T:Type (placeholder)
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
// let concatResult = getItems([1, 2, 3, 4, 5]);       // can infer type
let concatString = getItems(["a", "b", "c", "d", "e"]);
