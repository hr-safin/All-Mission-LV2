{
    // Static in oop

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


    const user1 = new Counter()

    console.log(Counter.increment()) // ---> Same memory
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
            }
            const makeStr = newArr.join(" ")
            return makeStr
        }
    }

    const capital = StringUtils.capitalize("john doe")

    console.log(capital)

    // Polymorphism in typescript

    interface Shape{
        area() : number
    }

    class Circle implements Shape{
        radius : number
        constructor(radius : number){
            this.radius = radius
        }

        area(): number {
            return  Math.PI * this.radius * this.radius
        }
    }

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


    // Abstraction ---> interface -- abstract class


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

    class Student2 implements Details{
        study(): void {
            console.log("Student-2 studies for 6 hours everyday")
        }

        sleep(): void {
            console.log("Student-2 sleeps 9 hours a day")
        }
    }

    const student1 = new Student1()

    console.log("------------------Abstraction-------------------")
    student1.study()

    // Abstract class


    abstract class File{
        abstract pdf() : void
        abstract jpg() : void
    }


    class Document1 extends File{
        pdf(): void {
            console.log("The file is in pdf format")
        }

        jpg(): void {
            console.log("The file is in jpg format")   
        }
    } 


    const document1 = new Document1()
    document1.jpg()


    // Encapsulation in typescript

    class BankAccount{
        private _balance : number;

        constructor(_balance : number){
            this._balance = _balance
        }

        private deposit(amount : number){
            
            if(amount > 0){
                this._balance += amount
            }else{
                console.log("Deposit amount must be positive")
            }
        }

        private withdraw(amount : number){
            if(amount < this._balance){
                this._balance -+ amount
            }
            else{
                console.log("Insufficient balance please deposit")
            }
        }
    }

    const deposit = new BankAccount(200)
    const withdraw = new BankAccount(100)
    console.log(deposit)
    console.log(withdraw)





















}