{//Problem1 --- 

interface Person {
    name: string;
    age: number;
    location: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person: Person = { name: 'John', age: 30, location: 'New York' };

// Works fine
console.log(getProperty(person, 'name'));



function getConstrainedProperty<K extends keyof Person & ('name' | 'location')>(
    obj: Person,
    key: K
): Person[K] {
    return obj[key];
}

// Now the following works as expected:
console.log(getConstrainedProperty(person, 'name')); // John
console.log(getConstrainedProperty(person, 'location')); // New York
console.log(getConstrainedProperty(person, 'location')); // New York


function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const mergedObj = merge({ name: 'Alice' }, { age: 30 });

// Works fine:
console.log(mergedObj.name); // Alice
console.log(mergedObj.age);  // 30



function merge2<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Now this works the same as before:
const validMerge = merge2({ name: 'Alice' }, { age: 30 });
console.log(validMerge.name); // Alice
console.log(validMerge.age);  // 30

// The following now produces a compile-time error:
const invalidMerge = merge(10, { age: 30 }); // Error: Argument of type 'number' is not assignable to parameter of type 'object'


function updateObject<T extends object>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates };
}

const person2 = { name: 'Alice', age: 30 };

// We can update some properties without providing all:
const updatedPerson = updateObject(person, { age: 31 });
console.log(updatedPerson.name); // Alice
console.log(updatedPerson.age);  // 31


function wrapInArray<T>(x: T | T[]): T[] {
    return Array.isArray(x) ? x : [x];
}

const single = wrapInArray(5); // [5]
const multiple = wrapInArray([1, 2, 3]); // [1, 2, 3]


type Response2<T> = {
    status: number;
    payload: T;
};

const userResponse: Response2<{ id: number; name: string }> = {
    status: 200,
    payload: { id: 1, name: 'Alice' }
};




type Bio ={
    name : string;
    age : number
}

function bioData(bio : Bio){
    return `My name is ${bio.name} and i am ${bio.age} years old`
} 

console.log(bioData({
    name : "Hasibur Rahman Safin",
    age : 23
}))



 //Class and object

 class User{
    name : string
    age : number
    address : string

    constructor(name : string, age : number, address : string){
        this.name = name
        this.age = age
        this.address = address
    }

    hasCamera(){
        console.log(`${this.name} has a wonderful camera`)
    }
}

//Lets create an instance

const user1 = new User("Safin", 34, "Rampura Mohanagar project")

user1.name = "Hasibur Rahman Safin"
//console.log(user1)

//user1.hasCamera()



interface Shape{
    getArea : () => number
}

class Rectangle implements Shape{
    public constructor(protected readonly width : number, protected readonly height : number){

    }

    public getArea() : number{
        return this.width * this.height
    }
}

class Square extends Rectangle{
    public constructor(public width : number){
        super(width, width)
    }

    // GetArea Inherited from rectangle
    
}

const area = new Rectangle(12,24)
const area1 = new Square(12)
console.log(area1)
console.log(area1.getArea())



class Counter{
    static counter : number = 0

   static increment(){
       return Counter.counter = Counter.counter + 1
   }

   static decrement(){
       return Counter.counter = Counter.counter - 1
   }
}


const count1 = new Counter()

console.log(Counter.increment()) // ---> Same Memory 
console.log(Counter.increment())

// Another example

class Calculator{

    static add(num1 : number , num2 : number){
        return num1 + num2
    }

    static subtract(num1 : number , num2 : number){
        return num1 - num2
    }
}

const result1 = Calculator.add(45,32)
const result2 = Calculator.subtract(100,30)
console.log(result1)
console.log(result2)



class StringUtils{
    static capitalize(str : string)  {
        //return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        const spitArr = str.split(" ")
        let newArr = []
        for(let str of spitArr){
            if(typeof str === "string"){
                const firstLetterUpper = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
                
                newArr.push(firstLetterUpper)
              
            } 
            else{
                console.log("Wrong typed input please provide string input")
            } 
        }
        const makeStr = newArr.join(" ")
        return makeStr
    }
}

const capital = StringUtils.capitalize("john doe")

console.log(capital)


interface Shape{
    area() : number
}

// class Circle implements Shape{
//     radius : number
//     constructor(radius : number){
//         this.radius = radius
//     }

//     area(): number {
//         return  Math.PI * this.radius * this.radius
//     }
// }

// const circle = new Circle(23)

class Rectangle implements Shape{
    height: number;
    weight : number

    constructor(height : number , weight : number){
        this.height = height
        this.weight = weight
    }
    
    area(): number {
        return this.height * this.weight
    }
}

const calculation = (shape : Shape) => {
    return shape.area()
}

const circle = new Circle(5)
const rectangle = new Rectangle(10,5)

console.log(calculation(circle).toFixed(2))
console.log(calculation(rectangle))



interface Vehicle{
    start() : void;
    stop() : void
}

class Car implements Vehicle{
    start(): void {
        console.log("The car is starting it's engine")
    }

    stop(): void {
        console.log("The car is stopped it's engine")
    }
}

class Bike implements Vehicle{
    start(): void {
        console.log("The bike is starting it's engine")
    }
    stop(): void {
        console.log("The bike is stopped it's engine")
    }
}

function driveVehicle(vehicle : Vehicle){
    vehicle.start()
    vehicle.stop()
}

const car = new Car()
const bike = new Bike()

driveVehicle(car)
console.log("------------------------------")
driveVehicle(bike)




interface Details{
    study() : void
    sleep() : void
}

class Student1 implements Details{
    study(): void {
        console.log("Student-1 studies for 8 hours everyday")
    }

    sleep(): void {
        console.log("Student-1 sleeps 7 hours a day")
    }
}


}