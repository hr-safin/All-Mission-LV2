
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

//7---Create a generic function identity<T>(arg: T): T that returns the input argument without any modification.

function identity<T>(arg : T) : T{
    return arg
}

//console.log(identity<number>(23))
//console.log(identity<string>("Typescript"))

//8 ---Write a generic function logArray<T>(arr: T[]): void that logs each element of the array.

function logArray<T>(array : T[]) : void{
    array.forEach(elem => {
        console.log(elem)
    })
}

//logArray<number>([1,2,2,3])
//logArray<string>(["safin", "mahi"])

//9---- Define a class Rectangle with properties width and height. Add a method area(): number that returns the area of the rectangle.

class Rectangle{
    height : number;
    weight : number;

    constructor(height : number, weight : number){
        this.height = height
        this.weight = weight
    }

    area(){
        
        return   this.height * this.weight
    }
}

const rectangle1 = new Rectangle(12,5)

console.log(rectangle1.area())


//10---Create a class Square that extends Rectangle and initializes both width and height to the same value.


class Square extends Rectangle{
    constructor(side : number){
        super(side, side);
    }
}

const square1 = new Square(5)

//console.log(square1.area())


//11----- Write an async function fetchData(url: string): Promise<any> that fetches data from a given URL and returns the result.

async function fetchData(url:string) : Promise<any> {
    try{
       const response = await fetch(url)
       const data = await response.json()
       return data
    } catch(error){
        console.log(error)
    }
}

//fetchData('https://jsonplaceholder.typicode.com/todos/1')
    //.then(data => console.log(data))

//13---Create a type alias Point for an object with x and y properties (both numbers). Write a function distance(p1: Point, p2: Point): number that calculates the distance between two points.

type Point = {
    height : number;
    weight : number;
}

function rectangle(value : Point){
    return value.height * value.weight
}


const basicMath : Point = {
    height : 12,
    weight : 6
}

//console.log(rectangle(basicMath))


//14---- Create an interface Car with make, model, and year properties. Make make and model readonly.

interface Car{
   readonly brand : "Toyota";
    year : string;
    model : string;

}


const car : Car = {
    brand : "Toyota",
    year : "2016",
    model : "X7"
}

//console.log(car)


//16---- Write a function swap that takes a tuple of two elements and returns a new tuple with the elements swapped.


function swap<T,X>(arr : [T,X]) : [X,T]{
    return [arr[1], arr[0]]
}

//console.log(swap(["1",1]))

//17---Create a generic interface Pair<T, U> that has two properties, first and second, both of type T and U respectively. Write a function makePair that creates and returns a Pair.


interface Pair<T,U>{
    first : T;
    second : U;
}


function makePair<T,U>(first : T, second: U){
    return {first, second}
}

//console.log(makePair<number, string>(123, "safin"))


//18---Write a generic function getProperty that takes an object and a key, and returns the value of the key. Add a constraint to ensure that the key exists in the object.

function getProperty<T,K extends keyof T>(obj : T, key : K){
    return obj[key]
}

const person1 =  { name : "Hasibur Rahman Safin", age : 20, gender : "male"}
console.log(getProperty(person1, "name"))


//19----  Create a generic class Box<T> that can store a value of type T. Add methods to get and set the value.

class Box<T>{
    
    private value : T;
    constructor(value : T){
        this.value = value
    }

    getValue() : T {
        return this.value
    }

    setValue( value : T)  {
        this.value = value
    }
}


const firstValue = new Box<number>(30)

//console.log(firstValue.getValue())

firstValue.setValue(100)
//console.log(firstValue.getValue())

//20--- Create a generic type alias Result<T> that represents an object with success (boolean) and value (T) properties. Write a function wrapInResult that takes a value of type T and returns a Result<T>.

type Result<T> = {
    success : boolean;
    value : T
}

function wrapInResult<T>(value : T){
    return {success : true, value}
}

const results = wrapInResult<number>(42);
//console.log(results)


//21----- Write a function reverseString(s: string): string that takes a string and returns the reversed string.

function reverseString(word : string) : string {
    return word.split("").reverse().join("")
}

console.log(reverseString("Safin"))