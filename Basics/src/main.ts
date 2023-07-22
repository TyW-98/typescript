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

// Index Signatures

// interface Stock {
//   case: number,
//   lptop: number,
//   computer: number
// }

// Image if the key and value is not known at this instance then can create interface object using the following
// interface Stock {
//   [key: string]: number;
// }

// This would allow to set predefined keys while at the same time allowing users to add keys in the future
// In this example, case, laptop and computer is always required and any additional keys can be added later.
interface Stock {
  [key: string]: number;
  case: number;
  laptop: number;
  computer: number;
}

const stockLevel: Stock = {
  case: 234,
  laptop: 34,
  computer: 31,
};

const todayStock = (currentStock: Stock): number => {
  let totalStock = 0;

  for (const product in currentStock) {
    totalStock += currentStock[product];
  }

  return totalStock;
};

console.log(todayStock(stockLevel));

interface Pupil {
  name: string;
  GPA: number;
  classes?: string[];
}

const pupil1: Pupil = {
  name: "Daivd",
  GPA: 3.5,
  classes: ["Computing", "Mathematics"],
};

// keyof create specific type for the key in pupil1 using the Pupil interface. (For example the name in pupil1 will have a type name)
for (const key in pupil1) {
  console.log(`${key} : ${pupil1[key as keyof Pupil]}`);
}

// Can also referce using its own type
Object.keys(pupil1).map((key) => {
  console.log(pupil1[key as keyof typeof pupil1]);
});

function logPupilKey(pupil: Pupil, key: keyof Pupil): void {
  console.log(`${key} : ${pupil[key]}`);
}

logPupilKey(pupil1, "name");

// Generics Function
// Instead of specifing which type the argument and output will be. T is being used to indicate the type therefore the argument and output will have the same type.
const echoString = <T>(msg: T): T => {
  return msg;
};

// Check if obj passed in is an object. It is dynamically changing the argument type dependent on the input.
const isType = <T>(obj: T): boolean => {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
};

interface BooleanCheck<T> {
  value: T;
  is: boolean;
}

// function to check if its an object or array with elements within.
const isTrue = <T>(arg: T): BooleanCheck<T> => {
  // Check if its an empty array
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  } else if (isType(arg) && !Object.keys(arg as keyof T).length) {
    // Check if its an empty object
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

interface HasID {
  id: number;
}

const studentNumber = <T extends HasID>(studentNumber: T): T => {
  return studentNumber;
};

console.log(studentNumber({ id: 53, name: "David" }));

const fetchUserData = <T extends HasID, K extends keyof T>(
  users: T[], // T has an array type
  key: K // Type of Key associated with each key
): T[K][] => {
  //Returns a type of T with the type of K key
  return users.map((user) => {
    return user[key];
  });
};

const testUser = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(fetchUserData(testUser, "name"));

// Generic Classes
class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject<(string | number | boolean)[]>([341]);
console.log(store.state);
store.state = ["swdd", 2141, false];
console.log(store.state);
