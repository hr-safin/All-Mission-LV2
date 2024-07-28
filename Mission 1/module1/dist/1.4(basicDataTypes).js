"use strict";
// Basic Data Types in typescript
//string
let fruits = "Apple";
//number
let number = 12;
//boolean
let isAdmin = true;
//undefined
let x = undefined;
//null
let y = null;
let d;
d = 123;
//array
let arrayOfNumber = [12, 3, 4];
let arrayOfName = ["safin", "hasibur", "rahman safin"];
arrayOfName.push("munira");
//tuple ---> order > types of values > we can control the order
let ageOfNumber = [34, "Hasibur rahman safin", true];
ageOfNumber[0] = 44;
// console.log(ageOfNumber)
// if data types do not match, TS will throw an error
let firstName = "Hasibur Safin"; // explicit type, string type
//firstName = 33
let secondName = "Hasibur Rahman Safin"; // inferred to type string
// secondName = 33
