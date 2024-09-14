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

// What if you want to ensure only specific keys can be passed?
// E.g., allow only 'name' or 'location', not 'age'

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

// The following gives a compile-time error:
//console.log(getConstrainedProperty(person, 'age')); // Error: Argument of type '"age"' is not assignable

function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const mergedObj = merge({ name: 'Alice' }, { age: 30 });

// Works fine:
console.log(mergedObj.name); // Alice
console.log(mergedObj.age);  // 30







}
