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







}
