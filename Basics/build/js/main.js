"use strict";
let myName = "Alex";
let age;
let isLoading;
let album;
let postId;
let regex = /\w+/g;
age = 30;
isLoading = false;
function sum(a, b) {
    return a + b;
}
let stringArr = ["A", "B", "C"];
let unionArr = ["A", 24, "ewf"];
let mixedArr = ["asdw", 2412, false];
stringArr[1] = "D";
stringArr.push("Last");
unionArr[2] = 0;
unionArr.unshift("Abc");
let bandName = [];
bandName.push("Band Name 1");
// Tuple
let tuple1;
tuple1 = ["a", "b", 123];
// Interface and type is almost the same for basics
// interface TestObject {
//     id: string,
//     name: string,
//     age: number,
//     identifier: (string | number),
//     collection: (string | number)[],
//     active?: boolean,  // By putting "?" makes active property optional
// }
let object1 = {
    id: "124aswfq",
    // name: "Dave",
    age: 49,
    identifier: 12,
    collection: ["1sac23", "1fasdf", 342],
};
const greetPerson = (testObject) => {
    if (testObject.name) {
        //To Check if name is provided since it is set to optional
        return `Greetings ${testObject.name.toUpperCase()}, Welcome`;
    }
    return "Hello!";
};
console.log(greetPerson(object1));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 0] = "F";
    Grade[Grade["E"] = 1] = "E";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
var Grade1;
(function (Grade1) {
    Grade1[Grade1["F"] = 1] = "F";
    Grade1[Grade1["E"] = 2] = "E";
    Grade1[Grade1["D"] = 3] = "D";
    Grade1[Grade1["C"] = 4] = "C";
    Grade1[Grade1["B"] = 5] = "B";
    Grade1[Grade1["A"] = 6] = "A";
})(Grade1 || (Grade1 = {}));
console.log(Grade1.A);
// Literal types
let userName;
userName = "Dave";
function add(a, b) {
    return a + b;
}
function logMsg(msg) {
    console.log(msg);
}
let subtract = (c, d) => {
    return c - d;
};
let mutiply = (e, f) => {
    return e * f;
};
logMsg(mutiply(4, 76));
// optional function parameters
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
// Default function paramters
const sumAll = (a = 35, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(undefined, 4));
// Rest parameteres
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(43, 7, 3, 1, 6));
// Never type - Only use when throwing an error or to handle undefined
const errMsg = (msg) => {
    throw new Error(msg);
};
const isNumber = (a) => {
    return typeof a === "number" ? true : false;
};
const numbeOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return errMsg("Undefined type");
};
let a = "abc";
let b = a; // Convert type a (string) to type Two (string | number) <-- Less specific
let c = a; // Convert type a (string) to type Three ("abc") <-- More specific
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let testAddOrConcat = addOrConcat(4, 3, "concat");
// To use assertion to convert number to string (Avoid using it)
341;
// Assertion with DOM
const img = document.querySelector("img"); // Non null assertion
const myImg = document.getElementById("img");
// Classes
class Student {
    constructor(name, age, country, language = "TypeScript") {
        this.name = name;
        this.age = age;
        this.country = country;
        this.language = language;
        this.name = name;
        this.age = age;
        this.country = country;
        this.language = language;
    }
    getAge() {
        return this.age;
    }
}
const Dave = new Student("Dave", 32, "England", "Python");
console.log(Dave.getAge());
class School extends Student {
    constructor(schoolName, name, age, country) {
        super(name, age, country);
        this.schoolName = schoolName;
        this.schoolName = schoolName;
    }
    getLanguage() {
        return `${this.name} uses ${this.language}`;
    }
}
const Jacob = new School("webDev", "Jacob", 24, "Singapore");
console.log(Jacob.getLanguage());
class SoftwareDeveloper {
    constructor(name, language, experience) {
        this.name = name;
        this.language = language;
        this.experience = experience;
        this.name = name;
        this.language = language;
        this.experience = experience;
    }
    project(projectName) {
        return `${this.name} is working on ${projectName}`;
    }
}
const David = new SoftwareDeveloper("David", "C++", 5);
console.log(David.project("AI"));
// The static keyword means the count doesn't apply to a single instance of the class but apply to the class directly. Therefore it is keeping track of the count across all isntance of the class. Can be use to track number of instance of the class.
class counter {
    static getCount() {
        return counter.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++counter.count; // <-- ++ on the left will make sure id starts with 1 first. If ++ on the right id will start with 0.
    }
}
counter.count = 0;
const Michael = new counter("Michael");
const John = new counter("John");
console.log(counter.count);
console.log(Michael.id);
// Getter and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Params not an array of strings");
    }
}
const rockBand = new Bands();
rockBand.data = ["Band 1", "Band 2"]; // Setter
console.log(rockBand.data); // Getter
rockBand.data = [...rockBand.data, "Rocky"]; // Setter
console.log(rockBand.data); //Getter
const stockLevel = {
    case: 234,
    laptop: 34,
    computer: 31,
};
const todayStock = (currentStock) => {
    let totalStock = 0;
    for (const product in currentStock) {
        totalStock += currentStock[product];
    }
    return totalStock;
};
console.log(todayStock(stockLevel));
const pupil1 = {
    name: "Daivd",
    GPA: 3.5,
    classes: ["Computing", "Mathematics"],
};
// keyof create specific type for the key in pupil1 using the Pupil interface. (For example the name in pupil1 will have a type name)
for (const key in pupil1) {
    console.log(`${key} : ${pupil1[key]}`);
}
// Can also referce using its own type
Object.keys(pupil1).map((key) => {
    console.log(pupil1[key]);
});
function logPupilKey(pupil, key) {
    console.log(`${key} : ${pupil[key]}`);
}
logPupilKey(pupil1, "name");
// Generics Function
// Instead of specifing which type the argument and output will be. T is being used to indicate the type therefore the argument and output will have the same type.
const echoString = (msg) => {
    return msg;
};
// Check if obj passed in is an object. It is dynamically changing the argument type dependent on the input.
const isType = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
};
// function to check if its an object or array with elements within.
const isTrue = (arg) => {
    // Check if its an empty array
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    else if (isType(arg) && !Object.keys(arg).length) {
        // Check if its an empty object
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const studentNumber = (studentNumber) => {
    return studentNumber;
};
console.log(studentNumber({ id: 53, name: "David" }));
const fetchUserData = (users, // T has an array type
key // Type of Key associated with each key
) => {
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
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject([341]);
console.log(store.state);
store.state = ["swdd", 2141, false];
console.log(store.state);
