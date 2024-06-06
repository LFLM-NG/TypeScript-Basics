"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    //   id!: number;       // add ! if no constructor
    //   name!: string;
    //   address!: string;
    //   constructor(){}       // ts only allow either default constructor or parameterized constructor
    static getEmployeeCount() {
        // static member: accessible with class name
        return 50;
    }
    // getter & setter
    get empId() {
        // getter method
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        // setter method
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    constructor(id, name, address) {
        // class Employee implements UserLogin.Login {    //using import * as
        _Employee_id.set(this, void 0); // private id, native syntax
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        // this.id = id;       // use if private id instead of #id
        this.name = name;
        this.address = address;
    }
    login() {
        return { name: "John", age: 20, id: 1, email: "" };
    }
    getNameWithAddress() {
        // function method
        // return this.name + " " + this.address;
        return `${this.name} works at ${this.address}`; // string literal for convenient concate
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, "John", { street: "whereami 1", city: "whore you" });
john.empId = 100;
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
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
