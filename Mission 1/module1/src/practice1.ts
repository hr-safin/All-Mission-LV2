// special type 

// any type ---> we should avoid this any type at any cost
let u : any  = true

u = "Hasibur rahman safin"

u = [1,2,3]

// unknown

const getMeterKilo = (value : unknown)  => {

    if(typeof value === "number"){
        const kilometer = value / 1000
        console.log({kilometer})

    }
    else if(typeof value === "string"){
        const result = value.split(" ")
        const [num] = result
        const kilometer = parseFloat(num) / 1000
        console.log({kilometer})
    }
    else{
        console.log("You are give a wrong type")
    }
}

getMeterKilo(3000)
getMeterKilo("3000")

// Array

const names : string[] = []
names.push("Safin")


// ReadOnly
const user : readonly string[] = ["Hello", "Safin"]

//Type Inference

const numbers = [1,2,3,4,5]
numbers.push(6)
console.log(numbers)

let singleNumber : number = numbers[0]

console.log(singleNumber)


//Tuple -- type array and it determine its length and order matter in tuple

let ourTuple : [number, string, undefined];

ourTuple = [12,"sadin",undefined]



let mixedArray : [number, string, undefined, null]
mixedArray = [ 12, "safin", undefined, null]

console.log(mixedArray)

const newArray : readonly [number, string, number, boolean] = [5, "safin", 23, true]

console.log(newArray)

//Named Tuple

const namedTuple : [x : number, y: string] = [21301, "safin"]
const namedTuple2 : [a : number, b : string] = [2322, "mahi"]

// Destructuring Tuple 

const nameList = ["safib","Hello"]

const [a,b] = nameList
console.log(a,b)


// Object 

const student1 : {
    name : string;
    age : number;
    college : "New Jersey Institute Of Technology";
    email? : string  // Optional Property
} = {
  name : "Hasibur Rahman Safin",
  age : 23,
  college : "New Jersey Institute Of Technology",
}

//Type Inference in object

const bio = {
    name : "Hello world"
}

bio.name = "Hasibur Rahman Safin"

// Type Alias

type User = {
    name : string;
    age : number;
    college : string;
    dream : string
}


const user1 : User = {
    name : "Hasibur rahman safin",
    age : 23,
    college : "New Jersey Institute Of Technology",
    dream : "go to usa and become a software engineer"
}


const user2 : User = {
    name : "Nur Al Munira Mahi",
    age : 22,
    college : "Montclair State University",
    dream : "Go to US"
}

const userList = {
    ...user1,
    ...user2
}
console.log(userList)

type Nam = string
type RollNumber = number

const nam : Nam = "Hasibur Rahman Safin"
const rollNumber : RollNumber = 21312312

const nam2 : Nam = "Mahi"
const rollNumber2 : RollNumber = 24131
