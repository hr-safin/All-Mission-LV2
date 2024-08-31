
// Basic Type

//1 ---> Write a function add(a: number, b: number): number that takes two numbers and returns their sum.

function sum(a : number, b : number) : number{
   return a + b
}
//console.log(sum(12,23))

//2 ---> Write a function greet(name: string): string that takes a string and returns a greeting message.

function greet(name : string) : string {
    return `hello, My name is ${name}`
}
// console.log(greet("Safin"))



//Interface

//3 ---> Define an interface Person with properties name (string) and age (number). Then, create a function printPerson(person: Person): string that returns a string describing the person.

interface Person{
    name : string;
    age : string;
}

function printPerson(person : Person){
    return `My name is ${person.name} and i am ${person.age} years old`
}

const safin : Person = {
    name : "Hasibur Rahman Safin",
    age : "23"
}

//console.log(printPerson(safin))

//4---

interface Person2{
    name : string;
    age : number;
    address? : string
}

function details(person : Person2) {
    let result = `${person.name} is ${person.age} years old `

    if(person.address){
        result += `They live at  ${person.address}`
    }
    return result
}

let newInfo : Person2 = {
    name : "Hasibur Rahman Safin",
    age : 23,
    address : "Sirajganj"
}

//console.log(details(newInfo))

//5---Create an enum Color with values Red, Green, and Blue. Write a function getColorName(color: Color): string that returns the name of the color.

enum Color{
    red,
    blue,
    black
}

function getColor(color : Color){
    return Color[color]
}

//console.log(getColor(Color.black))

//6----Write a function formatValue(value: string | number): string that returns a formatted string depending on whether the input is a string or a number.

function formatValue(value : string | number)  {
   if(typeof value === "string"){
    return `The type of value is ${typeof value}`
   }
   else{
    return `The type of value is ${typeof value}`
   }
}

console.log(formatValue("23"))
