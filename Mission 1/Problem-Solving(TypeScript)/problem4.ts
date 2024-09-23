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



}