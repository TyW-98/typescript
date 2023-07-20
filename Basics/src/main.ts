let myName: string = "Alex";
let age: number;
let isLoading: boolean;
let album: any;
let postId: string | number;
let regex: RegExp = /\w+/g;

age = 30;
isLoading = false;

function sum(a: number, b: number) {
  return a + b;
}

let stringArr = ["A", "B", "C"];
let unionArr = ["A", 24, "ewf"];
let mixedArr = ["asdw", 2412, false];

stringArr[1] = "D";
stringArr.push("Last");

unionArr[2] = 0;
unionArr.unshift("Abc");

let bandName: string[] = [];
bandName.push("Band Name 1");

// Tuple
let tuple1: [string, string, number];
tuple1 = ["a", "b", 123];

// Objects
type TestObject = {
  id: string;
  name?: string;
  age: number;
  identifier: string | number;
  collection: (string | number)[];
  active?: boolean; // By putting "?" makes active property optional
};

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
  collection: ["1sac23", "1fasdf", 342],
};

const greetPerson = (testObject: TestObject) => {
  if (testObject.name) {
    //To Check if name is provided since it is set to optional
    return `Greetings ${testObject.name.toUpperCase()}, Welcome`;
  }

  return "Hello!";
};

console.log(greetPerson(object1));

// Enums

enum Grade {
  F,
  E,
  D,
  C,
  B,
  A,
}

console.log(Grade.A);

enum Grade1 {
  F = 1,
  E,
  D,
  C,
  B,
  A,
}

console.log(Grade1.A);

// Type Aliases
type stringOrNumberArray = (string | number)[];

interface Product {
  name: string;
  price: number;
  quality: stringOrNumberArray;
}

// Literal types
let userName: "Dave" | "John" | "Alex";
userName = "Dave";

function add(a: number, b: number): number {
  return a + b;
}

function logMsg(msg: any): void {
  console.log(msg);
}

let subtract = (c: number, d: number): number => {
  return c - d;
};

// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

let mutiply: mathFunction = (e, f) => {
  return e * f;
};

logMsg(mutiply(4, 76));

// optional function parameters
const addAll = (a: number, b: number, c?: number) => {
  if (c) {
    return a + b + c;
  }
  return a + b;
};

// Default function paramters
const sumAll = (a: number = 35, b: number, c: number = 2) => {
  return a + b + c;
};

logMsg(sumAll(undefined, 4));

// Rest parameteres
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(43, 7, 3, 1, 6));

// Never type - Only use when throwing an error or to handle undefined
const errMsg = (msg: string): never => {
  throw new Error(msg);
};

const isNumber = (a: any): boolean => {
  return typeof a === "number" ? true : false;
};

const numbeOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return errMsg("Undefined type");
};
