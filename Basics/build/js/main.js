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
    collection: ["1sac23", "1fasdf", 342]
};
const greetPerson = (testObject) => {
    if (testObject.name) { //To Check if name is provided since it is set to optional
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
