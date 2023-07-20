let myName: string = "Alex"
let age: number;
let isLoading: boolean;
let album: any;
let postId: string | number;
let regex: RegExp = /\w+/g

age = 30
isLoading = false

function sum(a: number, b: number) {
    return a + b
}

let stringArr = ["A", "B", "C"]
let unionArr = ["A",24,"ewf"]
let mixedArr = ["asdw", 2412, false]

stringArr[1] = "D"
stringArr.push("Last")

unionArr[2] = 0
unionArr.unshift("Abc")

let bandName: string[] = []
bandName.push("Band Name 1")

// Tuple
let tuple1: [string, string, number];
tuple1 = ["a", "b", 123]

// Objects
type TestObject = {
    id: string,
    name?: string,
    age: number,
    identifier: (string | number),
    collection: (string | number)[],
    active?: boolean,  // By putting "?" makes active property optional
}

// Interface and type is almost the same for basics

// interface TestObject {
//     id: string,
//     name: string,
//     age: number,
//     identifier: (string | number),
//     collection: (string | number)[],
//     active?: boolean,  // By putting "?" makes active property optional
// }

let object1: TestObject = {
    id: "124aswfq",
    // name: "Dave",
    age: 49,
    identifier: 12,
    collection: ["1sac23", "1fasdf", 342]
}

const greetPerson = (testObject: TestObject) => {

    if (testObject.name) { //To Check if name is provided since it is set to optional
        return `Greetings ${testObject.name.toUpperCase()}, Welcome`
    }

    return "Hello!"
}

console.log(greetPerson(object1))

// Enums

enum Grade {
    F,
    E,
    D,
    C,
    B,
    A,
}

console.log(Grade.A)

enum Grade1 {
    F = 1,
    E,
    D,
    C,
    B,
    A,
}

console.log(Grade1.A)