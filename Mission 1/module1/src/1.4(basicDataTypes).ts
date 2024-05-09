// Basic Data Types in typescript

//string
let fruits : string = "Apple"

//number
let number : number = 12

//boolean
let isAdmin : boolean = true

//undefined
let x : undefined = undefined

//null
let y : null = null

let d : number ;

d= 123


//array

let arrayOfNumber : number[]  = [12,3,4]

let arrayOfName : string[] = ["safin", "hasibur", "rahman safin"]

arrayOfName.push("munira")

//tuple ---> order > types of values > we can control the order

let ageOfNumber : [number, string, boolean] = [34, "Hasibur rahman safin", true]

ageOfNumber[0] = 44

// console.log(ageOfNumber)

// if data types do not match, TS will throw an error

let firstName : string = "Hasibur Safin"; // explicit type, string type

//firstName = 33

let secondName = "Hasibur Rahman Safin" // inferred to type string

// secondName = 33
