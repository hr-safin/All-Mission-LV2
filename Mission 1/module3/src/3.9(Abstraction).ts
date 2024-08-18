{
    // Abstraction : 1. Interface 2.abstract

    // Idea
    interface Vehicle1{
        startEngine() : void;
        stopEngine() : void;
        move() : void
    }

    // const vehicle1 : Vehicle1 = {
    //     name : "BMW",
    //     model : 2018
    // }

    // real implementation
    class Car implements Vehicle1 {
        startEngine(): void {
            console.log("I am starting the engine")
        }

        stopEngine(): void {
            console.log("I am stopping the engine")
        }

        move(): void {
            console.log("I am moving so fast")
        }

        testDrive() : void{
            console.log(" I am on a test drive")
        }
    }

    const toyotaCar = new Car()
    toyotaCar.startEngine()


    // Abstract Class
 
    // Idea
    abstract class Car2{
        abstract startEngine(): void 

        abstract stopEngine(): void 

        abstract move(): void 

        abstract testDrive() : void
    }

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log("I am starting the car engine")
        }

        stopEngine(): void {
            console.log("I am stopping the car engine")
        }

        move(): void {
            console.log("I am moving the car")
        }

        testDrive(): void {
            console.log("I am on a test drive")
        }
    }

   














}