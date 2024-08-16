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








}