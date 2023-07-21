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

// Assertions
type One = string;
type Two = string | number;
type Three = "abc";

let a: One = "abc";
let b = a as Two; // Convert type a (string) to type Two (string | number) <-- Less specific
let c = a as Three; // Convert type a (string) to type Three ("abc") <-- More specific

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let testAddOrConcat: string = addOrConcat(4, 3, "concat") as string;

// To use assertion to convert number to string (Avoid using it)
341 as unknown as string;

// Assertion with DOM
const img = document.querySelector("img")!; // Non null assertion
const myImg = document.getElementById("img") as HTMLImageElement;

// Classes
class Student {
  constructor(
    public readonly name: string,
    private age: number,
    public readonly country: string,
    protected language: "TypeScript" | "Python" | "JavaScript" = "TypeScript"
  ) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.language = language;
  }

  public getAge(): number {
    return this.age;
  }
}

const Dave = new Student("Dave", 32, "England", "Python");
console.log(Dave.getAge());

class School extends Student {
  constructor(
    public schoolName: string,
    name: string,
    age: number,
    country: string
  ) {
    super(name, age, country);
    this.schoolName = schoolName;
  }

  public getLanguage() {
    return `${this.name} uses ${this.language}`;
  }
}

const Jacob = new School("webDev", "Jacob", 24, "Singapore");
console.log(Jacob.getLanguage());
// console.log(Jacob.language) <-- Protected so only can be accessed within the Student class or School sub class
// console.log(Jacob.age) <-- Private so can only be accessed within the Student class

interface Developer {
  name: string;
  language: "TypeScript" | "Python" | "JavaScript" | "C++";
  experience: number;
  project(projectName: string): string;
}

class SoftwareDeveloper implements Developer {
  constructor(
    public readonly name: string,
    public language: "TypeScript" | "Python" | "JavaScript" | "C++",
    public experience: number
  ) {
    this.name = name;
    this.language = language;
    this.experience = experience;
  }

  public project(projectName: string) {
    return `${this.name} is working on ${projectName}`;
  }
}

const David = new SoftwareDeveloper("David", "C++", 5);
console.log(David.project("AI"));

// The static keyword means the count doesn't apply to a single instance of the class but apply to the class directly. Therefore it is keeping track of the count across all isntance of the class. Can be use to track number of instance of the class.
class counter {
  static count: number = 0;

  static getCount(): number {
    return counter.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++counter.count; // <-- ++ on the left will make sure id starts with 1 first. If ++ on the right id will start with 0.
  }
}

const Michael = new counter("Michael");
const John = new counter("John");

console.log(counter.count);
console.log(Michael.id);

// Getter and Setters
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Params not an array of strings");
  }
}

const rockBand = new Bands();
rockBand.data = ["Band 1", "Band 2"]; // Setter
console.log(rockBand.data); // Getter
rockBand.data = [...rockBand.data, "Rocky"]; // Setter
console.log(rockBand.data); //Getter
