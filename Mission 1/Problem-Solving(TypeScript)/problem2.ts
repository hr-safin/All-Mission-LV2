//1 Problem: Create a Person class with properties name, age, and gender. Initialize the class with a constructor.

class Person{
    name : string;
    age : string;
    gender : string;

    constructor(name : string, age : string, gender : string){
        this.name = name
        this.age = age
        this.gender = gender
    }
}

const person = new Person("safin", "24", "male")
console.log(person)