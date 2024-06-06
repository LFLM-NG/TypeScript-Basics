// Intersection Type
interface BusinessPartner {
    // name: number;   // overlapping property name must be same type
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

// Intersection using Type
type Employee = BusinessPartner & Identity & Contact;
type Customer = BusinessPartner & Contact;

// Intersection using Interface
// interface Employee extends Identity, Contact {}
// interface Customer extends BusinessPartner, Contact {}

const e: Employee = {
    name: 'John Doe',
    id: 1,
    email: '.',
    phone: '.',
    credit: 1,
}

// Interface allows adding new properties, but not Type Alias (interface, not type)
interface Student {
    id: number;
    name: string;
}
// declaration merging
interface Student {
    age?: number;
}

const alice: Student = {
    id: 1,
    name: 'Alice',
}
