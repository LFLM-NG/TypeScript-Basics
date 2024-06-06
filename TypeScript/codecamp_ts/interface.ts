// to retain type (usually for backend/API), use classes for return types

// define a type
// interface does not exist in js
export interface User {
  name: string;
  age?: number; // optional
  id: number;
  email: string;
}

let user: User = { name: "John", age: 20, id: 1, email: "" };
// let user: User = { name: "John", id: 1, email: "" };

// extending interface
interface Employee1 extends User {
  //class and interface also cannot share name
  salary: number;
}

let employee: Employee1 = { name: "John", id: 1, email: "", salary: 1000 };

// interface method definition
// import/export to use outside file
export interface Login {
  login(): User; // class implements the method
}

// Object Destructuring
// user.name;      // accessing object properties
// user.email;
let { name: userName, email: userLogin }: User = {
  name: "John",
  age: 20,
  id: 1,
  email: "",
}; // object destructuring, same function as above codes
// name: userName - renaming properties

// Array Destructuring
// make array
let users: User[] = [
  { name: "John", id: 1, email: "" },
  { name: "John1", id: 2, email: "" },
  { name: "John2", id: 3, email: "" },
];
// destructure array
let [user1, user2, ...restUsers]: User[] = [
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
