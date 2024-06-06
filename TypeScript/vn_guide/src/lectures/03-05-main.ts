// Generics

// interface Student2 {
//     id: number;
//     name: string;
// }
// const numberList1: Array<number> = [1, 2, 3];
// const wordList1: Array<string> = ['ayy', 'lmao'];

// const studentList: Array<Student2> = [
//     {id: 1, name: 'Jane'},
//     {id: 2, name: 'John'},
// ]
//Generics : var<type parameter>

interface List<T> { //T: Type, K: Key, V: Value
// interface List<T, K> { //T: Type, K: Key, V: Value
    length: number;
    [index: number]: T;
    // [index: number]: T | string;
}

const numberList1: List<number> = [1, 2, 3];
const wordList1: List<string> = ['ayy', 'lmao'];
// const wordList1: List<string, number> = ['ayy', 'lmao'];
// const numberList: List<number> = [1, 2, 3, '']
const studentList: List<Student3> = [{ id: 1, name: 'John'}];

interface Student3 {
    id: number;
    name: string;
}

// keyof operator
// type StudentKeys = keyof Student3;
// const keys: StudentKeys = ''

// typeof operator
console.log(typeof 'ayy lmao');     // 'string'
console.log(typeof 1);              // 'number'
console.log(typeof true);     // 'boolean'
console.log(typeof {});     // 'object'
console.log(typeof []);     // 'object'
console.log(typeof function() {});     // 'function'
console.log(typeof window !== 'undefined');     // true on client, false on server

// mapped types; union type, cannot use interface
type MappedTypes = {
    [Key in keyof Student3]: boolean;
}
