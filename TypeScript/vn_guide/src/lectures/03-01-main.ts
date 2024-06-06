// const uses literal types if undeclared; let can insinuate primitive types
let count0 = 1;
const count = 1;    // const count = 1

const channelName = 'ayy lmao';     // const channelName: 'ayy lmao'

const isActive = false;     // const isActive: false

const student = {           // can update properties
    id: 1,
    name: 'John Doe'
}

const student0 = {          // cannot update properties
    id: 1,
    name: 'John Doe'
} as const

const numberList = [1, 2, 3]
const numberListAsConst = [1, 2, 3] as const

// Type Assertion
function getStatusName(state: 'active') {
    console.log(state);
}

// let s = 'active';   // let s: string
// const s = 'active';
// let s : 'active' = 'active';

let s = 'active';
getStatusName(s as 'active');   // Type Assertion (overlapping types: subset/superset)

