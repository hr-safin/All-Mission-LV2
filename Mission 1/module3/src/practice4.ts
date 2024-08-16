{
    // Class and object 

    class Hello{
        name : string;
        age : number;
        address : string;

        constructor(name : string, age : number, address : string){
            this.name = name
            this.age = age
            this.address = address
        }

        getBalance(){
            console.log("Hello World")
        }
    }

    const hello = new Hello("s", 23, "ss")




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


    //Inheritance

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


    // More example of inheritance

    class Person{
        name : string
        age : number
        address : string

        constructor(name : string, age : number, address : string){
            this.name = name
            this.age = age
            this.address = address
        }

        sleepTime(hr : number){
            console.log(`${this.name} sleeps ${hr} hours everyday`)
        }
    }


    class Student extends Person{
        subject : string
        constructor(name : string, age : number, address : string,subject : string){
            super(name, age, address)
            this.subject = subject
        }

        haveClass(many : number){
            console.log(`${this.name} has ${many} classes today`)
        }
    }

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
    








}