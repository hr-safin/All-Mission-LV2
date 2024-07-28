// Basic Data Types in typescript

//string
let fruits : string = "Apple"
let fruits2 : string = "Orange"

//number
let number : number = 12
let number2 : number = 12

//boolean
let isAdmin : boolean = true
let isAdmin2 : boolean = true

//undefined
let x : undefined = undefined
let x2 : undefined = undefined

//null
let y : null = null
let y2 : null = null

let d : number ;

d= 123

let c : string;
c="New Jersey Institute Of technology"


//array
let arrayOfNumber : number[]  = [12,3,4]
let arrayOfNumber2 : number[] = [1,23,4]
arrayOfNumber2.push(19)

let arrayOfName : string[] = ["safin", "hasibur", "rahman safin"]

arrayOfName.push("munira")

//tuple ---> order > types of values > we can control the order

let ageOfNumber : [number, string, boolean] = [34, "Hasibur rahman safin", true]

ageOfNumber[0] = 44

let info : [ string, string, number] = ["safin", "njit", 2024]
info[0] = "hasibur rahman safin"

// console.log(ageOfNumber)

// if data types do not match, TS will throw an error

let firstName : string = "Hasibur Safin"; // explicit type, string type

//firstName = 33

let secondName = "Hasibur Rahman Safin" // inferred to type string

// secondName = 33
