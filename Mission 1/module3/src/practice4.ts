{
    // Class and object -->

    // class Hello{
    //     name : string;
    //     age : number;
    //     address : string;

    //     constructor(name : string, age : number, address : string){
    //         this.name = name
    //         this.age = age
    //         this.address = address
    //     }

    //     getBalance(){
    //         console.log("Hello World")
    //     }
    // }

    //const hello = new Hello("s", 23, "ss")
    
    //const hello1 = new Hello("s", 23, "ss")
    
    //const hello2 = new Hello("s", 23, "ss")
    
    //const hello3 = new Hello("s", 23, "ss")




    //Class and object

    // class User{
    //     name : string
    //     age : number
    //     address : string

    //     constructor(name : string, age : number, address : string){
    //         this.name = name
    //         this.age = age
    //         this.address = address
    //     }

    //     hasCamera(){
    //         console.log(`${this.name} has a wonderful camera`)
    //     }
    // }

    //Lets create an instance

    const user1 = new User("Safin", 34, "Rampura Mohanagar project")

    user1.name = "Hasibur Rahman Safin"
    //console.log(user1)

    //user1.hasCamera()


    //Inheritance

    interface Shape{
        getArea : () => number
    }

    // class Rectangle implements Shape{
    //     public constructor(protected readonly width : number, protected readonly height : number){

    //     }

    //     public getArea() : number{
    //         return this.width * this.height
    //     }
    // }

    // class Square extends Rectangle{
    //     public constructor(public width : number){
    //         super(width, width)
    //     }

    //     // GetArea Inherited from rectangle//
        
    // }
    // class Square extends Rectangle{
    //     public constructor(public width : number){
    //         super(width, width)
    //     }

    //     // GetArea Inherited from rectangle
        
    // }

    //const area = new Rectangle(12,24)
    //const area1 = new Square(12)
    //console.log(area1)
    //console.log(area1.getArea())


    // More example of inheritance

    // class Person{
    //     name : string
    //     age : number
    //     address : string

    //     constructor(name : string, age : number, address : string){
    //         this.name = name
    //         this.age = age
    //         this.address = address
    //     }

    //     sleepTime(hr : number){
    //         console.log(`${this.name} sleeps ${hr} hours everyday`)
    //     }
    // }


    // class Student extends Person{
    //     subject : string
    //     constructor(name : string, age : number, address : string,subject : string){
    //         super(name, age, address)
    //         this.subject = subject
    //     }

    //     haveClass(many : number){
    //         console.log(`${this.name} has ${many} classes today`)
    //     }
    // }

    const student1 = new Student("Hasibur Rahman Safin",24, "Rampura Mohanagar Project", "Computer Science")
    console.log(student1)

    // type guard using typeof and in

    const greet = (name : string | number) => {
        if(typeof name === "string" ){
            console.log(`hello, ${name.toUpperCase()}`)
        }
        else{
            console.log(`hello, ${name}`)
        }
    }

    greet("Hasibur")
    greet(32)

    // In Guard

    type NormalUser = {
        name : string
    }

    type AdminUser = {
        name : string,
        role : string
    }

    const getUser = (user : NormalUser | AdminUser) => {
        if("role" in user){
            console.log(`My name is ${user.name} and his role is ${user.role}`)
        }
        else{
            console.log(`My name is ${user.name} and he is a normal user`)
        }
    }


    const normalUser : NormalUser = {
        name : "Jonson"
    }

    const adminUser : AdminUser = {
        name : "Safin",
        role : "ADMIN"
    }

    getUser(normalUser)
    getUser(adminUser)


    // Type Guard using instance of 


    class Animal{
        name : string

        constructor(name : string){
            this.name = name
        }
    }

    class Dog extends Animal{
        breed : string
        constructor(name : string, breed : string) {
            super(name)
            this.breed = breed
        }
    }

    class Cat extends Animal{
        color : string
        constructor(name : string, color : string){
            super(name)
            this.color = color
        }
    }


    const displayInfo = (animal : Dog | Cat) => {
        if(animal instanceof Dog){
            console.log(`The dog name is ${animal.name} and breed is ${animal.breed}`)
        }
        else{
            console.log(`The cat name is ${animal.name} and color is ${animal.color}`)
        }
    }

    const dog = new Dog("Mighty", "small")
    console.log(dog)
    const cat = new Cat("Cutu", "Brown")
    console.log(cat)

    //Creating custom type guard

    interface Car{
        make : string;
        model : string
    }

    interface Truck{
        make : string;
        capacity : string
    }

    function isCar(vehicle : Car | Truck) : vehicle is Car{
        return "model" in vehicle
    }

    function displayVehicleInfo(vehicle : Car | Truck){
        if(isCar(vehicle)){
            console.log(`The car is made by ${vehicle.make} and model is ${vehicle.model}`)
        }else{
            console.log(`The truck is made by ${vehicle.make} and capacity is ${vehicle.capacity} `)
        }
    }


    const car : Car = {
        make : "Germany",
        model : "S series"

    }

    const truck : Truck = {
        make :  "Austrailia",
        capacity : "10 tone"
    }

    displayVehicleInfo(car)
    displayVehicleInfo(truck)

    //Access Modifiers

    // Public Modifiers

    class Animals{
        public name : string;
        constructor(name : string){
            this.name = name
        }

        makeSounds(){
            console.log("HAHAHHAHA")
        }
    }

    const animal1 = new Animals("dog")
    console.log(animal1.name)
    animal1.makeSounds()


    class StudentAccount{
        public id : number;
        public name : string;
        private _balance : number

        constructor(id : number, name : string, _balance : number){
            this.id = id
            this.name = name
            this._balance = _balance
        }

        addDeposite(amount : number){
            this._balance = this._balance + amount
        }
    }

    const studentAccount1 = new StudentAccount(2121, "Safin", 100)
    console.log(studentAccount1)
    studentAccount1.addDeposite(500)
    console.log(studentAccount1)

    class BankAccount{
        public id : number;
        public name : string;
        protected _balance : number

        constructor(id : number, name : string, _balance : number){
            this.id = id
            this.name = name
            this._balance = _balance
        }

        //Setter -----> we can call it as mutator

        set addDeposite(amount : number){
            this._balance = this._balance + amount
        }
        showBalance(){
            console.log(`The total balance is ${this._balance}`)
        }
    }

    class TeacherAccount extends BankAccount{
        public constructor(id : number, name : string, _balance : number ){
            super(id, name, _balance)
        }
    }

    const teaceher1 = new TeacherAccount(2311, "Mokless", 50000)
    console.log(teaceher1)

    teaceher1.addDeposite= 50000
    console.log(teaceher1)

    //Getter and Setter

    class Studant{
        private name : "Hasibur Rahman Safin";
        private age : number;
        private address : string
        constructor(name : "Hasibur Rahman Safin", age : number, address : string){
            this.name = name
            this.age = age
            this.address = address
        }

        //getter ---> we call it accessor as well

        get showName(){
            return this.name
        }
    }

    let student = new Studant("Hasibur Rahman Safin", 24, "Mohanagar")

    console.log(student.showName)

    

















    
}


