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



}