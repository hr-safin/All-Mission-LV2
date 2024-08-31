
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

console.log(printPerson(safin))
