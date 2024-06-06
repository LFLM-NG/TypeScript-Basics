// Utility types

// Partial<Type> : all properties of Type set to optional, return a type representing all subsets of a given type
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate};
}

const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
}

const todo2 = updateTodo(todo1, { 
    description: 'throw out trash',
})

// Required<Type>: all properties of Type set to required; opposite of Partial
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = {a: 5};
// const obj2: Required<Props> = {a:5};

// Readonly<Type>: all properties of Type set to readonly; propertires cannot be reassigned

interface Todo1 {
    title: string;
}

const todo3: Readonly<Todo1> = {
    title: 'Delet inactive users',
}
// todo3.title = 'Hello';

// Record<Keys,Type>: object type - property keys are Keys, property values are Types; used to map properties of one type to another
interface CatInfo {
    age: number;
    breed: string;
}

type Catname = 'miffy' | 'boris' | 'mordred';

const cats: Record<Catname, CatInfo> = {
    miffy: { age:10, breed: 'Persian' },
    boris: { age:5, breed: 'Maine Cooon' },
    mordred: { age:16, breed: 'British Shorthair' },
}
cats.boris;

// Pick<Type, Keys>: construct a type by picking set of properties Keys (string literal or union of string literals) from Type
interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo2, 'title' | 'completed'>;

const todo4: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
todo4;

// Omit<Type, Keys>: construct a type by picking all properties from Types then removing Keys (string literal or union of string literals)
interface Todo3 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview1 = Omit<Todo3, 'description'>;

const todo5: TodoPreview1 = {
    title: 'Clean room',
    completed: false,
    createdAt: 1337,
}
todo5;

// ReturnType<Type>: construct a type consisting of the return type of function Type
declare function f1(): { a: number, b: string};


type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s:string) => void>;
type T2 = ReturnType<<T>() => T>;
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
type T4 = ReturnType<typeof f1>;
type T5 = ReturnType<any>;
type T6 = ReturnType<never>;
// type T7 = ReturnType<string>;
