"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", age: 20, id: 1, email: "" };
let employee = { name: "John", id: 1, email: "", salary: 1000 };
// Object Destructuring
// user.name;      // accessing object properties
// user.email;
let { name: userName, email: userLogin } = {
    name: "John",
    age: 20,
    id: 1,
    email: "",
}; // object destructuring, same function as above codes
// name: userName - renaming properties
// Array Destructuring
// make array
let users = [
    { name: "John", id: 1, email: "" },
    { name: "John1", id: 2, email: "" },
    { name: "John2", id: 3, email: "" },
];
// destructure array
let [user1, user2, ...restUsers] = [
    { name: "John", id: 1, email: "" },
    { name: "John1", id: 2, email: "" },
    { name: "John2", id: 3, email: "" },
    { name: "John3", id: 4, email: "" },
    { name: "John4", id: 5, email: "" },
    { name: "John5", id: 6, email: "" },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 5);
console.log(result);
