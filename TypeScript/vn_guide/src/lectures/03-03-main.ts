// return type
function sayHello() {
    console.log('Hello There');
}

function sum(a: number, b: number) {
    return a + b;
}
// Explicit return type
function sum1(a: number, b: number): number {
    return a + b;
    // return a + b.toString;
}

// Optional and default parameter
// Optional
function getLength(numberList?: number[]) {
// meaning: function getLength(numberList?: number[] | undefined): number {
    return Array.isArray(numberList) ? numberList.length : 0;
}
// Default
function getLength1(numberList: number[] = []) {
// meaning: function getLength1(numberList?: number[]): number {
    return Array.isArray(numberList) ? numberList.length : 0;
}
// Cannot have both Optional and Default Operators
// function getLength2(numberList?: number[] = []) {
//         return Array.isArray(numberList) ? numberList.length : 0;
//     }

// void type
function noop() {
    return;
}

// never type
type NewType = number & string;

function fail(msg: string): never {
    throw new Error(msg);
}

function fn(x: string | number) {
    if (typeof x === 'string') {

    } else if (typeof x === 'number') {

    } else {
        x;
    }
}

// Destructuring Parameter
function createStudent(id: number, name: string, age: number) {
    console.log(id, name, age)
}

createStudent(1, 'Bob', 18);

// using destructuring by making objects
// method 1
function createStudent1(student: {id: number, name: string, age: number}) {
    const {id, name, age} = student;
    console.log(id, name, age)
}
createStudent1({
    id: 1,
    name: 'Bob',
    age: 18,
});
// method 2
function createStudent2({id, name, age}: {id: number, name: string, age: number}) {
    console.log(id, name, age)
}
createStudent2({
    id: 1,
    name: 'Bob',
    age: 18,
});
// method 3
interface Student1 {
    id: number;
    name: string;
    age: number;
}
function createStudent3({id, name, age}: Student1) {
    console.log(id, name, age)
}
createStudent3({
    id: 1,
    name: 'Bob',
    age: 18,
});
