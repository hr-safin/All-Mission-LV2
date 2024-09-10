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
//console.log(person)
//console.log(person)

//2.Problem 2: Implement Inheritance
//2.Problem: Create a Student class that extends the Person class. Add a property studentId to the Student class.

class Student extends Person{
    studentId : number;

    constructor(name : string, age : string , gender : string, studentId : number){
        super(name, age, gender);
        this.studentId = studentId;
    }
}

const student1 = new Student("Nur", "23", "female", 232323)
const student2 = new Student("Nur", "23", "female", 232323)
//console.log(student1)
//console.log(student2)


//Problem-2 : Create an interface Animal with methods eat and sleep. Implement this interface in a Dog class.


interface Animal{
    eat() : void;
    sleep() : void;
}

class Dog implements Animal{
   
    eat() : void{
        console.log("Dog is eating")
    }

    sleep(): void {
        console.log("Dog is sleeping")
    }
}

const dog1 = new Dog()

dog1.eat()
dog1.sleep()

