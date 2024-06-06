import { Login, User } from "./interface"; // recommended default import syntax
// import * as UserLogin from './interface';  // alias import

interface Address {
  street: string;
  city: string;
}

class Employee implements Login {
  // class Employee implements UserLogin.Login {    //using import * as
  #id: number; // private id, native syntax
  protected name: string;
  // address: string;
  address: Address;
  //   id!: number;       // add ! if no constructor
  //   name!: string;
  //   address!: string;
  //   constructor(){}       // ts only allow either default constructor or parameterized constructor
  static getEmployeeCount(): number {
    // static member: accessible with class name
    return 50;
  }
  // getter & setter
  get empId(): number {
    // getter method
    return this.#id;
  }
  set empId(id: number) {
    // setter method
    this.#id = id;
  }

  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    // this.id = id;       // use if private id instead of #id
    this.name = name;
    this.address = address;
  }
  login(): User {
    return { name: "John", age: 20, id: 1, email: "" };
  }
  getNameWithAddress(): string {
    // function method
    // return this.name + " " + this.address;
    return `${this.name} works at ${this.address}`; // string literal for convenient concate
  }
}

let john = new Employee(1, "John", { street: "whereami 1", city: "whore you" });
john.empId = 100;

class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }
  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

let address = john.getNameWithAddress();
let mike = new Manager(2, "Mike", { street: "whoami", city: "whatami" });
Employee.getEmployeeCount(); // call static method with class name without needing a new instance

// john.id = 1;                 // use with id!
// john.name = "John";
// john.address = "whereami 1";

console.log(john);
console.log(address);
console.log(mike.getNameWithAddress());
console.log(john.empId);
