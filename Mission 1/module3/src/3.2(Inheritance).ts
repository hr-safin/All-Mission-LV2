{
    // OOP --> Inheritance


    class Person{
        name : string
        age : number
        address : string

        constructor(name : string, age: number, address : string){
            this.name = name,
            this.age = age,
            this.address = address
        }

        getSleep(numberOfHours : number){
            console.log(`${this.name} will sleep for ${numberOfHours} hours`)
        }

    }


    class Student extends Person{
        

        constructor(name : string, age: number, address : string){
            super(name, age, address)
        }
    }


    //Instance

    const student1 = new Student("Mr.student1", 23, "mohanagar")
    student1.getSleep(23)


    class Teacher extends Person{
        designation : string

        constructor(name : string, age: number, address : string, designation : string){
            super(name, age, address)
            this.designation = designation
            
        }

        takeClass(howMany : number){
            console.log(`${this.name} will be taking ${howMany} classes today`)
        }
    }


    //Instance

    const teacher1 = new Teacher("Mr. Johon", 23, "mohanagar", "Professor")
    teacher1.takeClass(5)
    












}