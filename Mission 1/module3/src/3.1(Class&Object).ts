{
  // oop ---> class and object

  class User {
    // public name : string;
    // public age : number;
    // public address : string
   
    // Parameter properties
    constructor(public name : string, public age : number, public address : string){

        // Initialization
        // this.name = name
        // this.age = age
        // this.address = address
    }

    makeDream(){
        console.log(` ${this.name} who is ${this.age} years old wants to go to united states of america`)
    }

  }

  // Lets create instance

  const user1 = new User("hasibur rahman safin", 23, "rampura mohanagar project")

  const user2 = new User("Nur-Al Munira Mahi", 22, "Jatra Bari")

  user1.makeDream()
  user2.makeDream()


  class Info{
    
   // Parameter properties
    constructor(public name : string, public age : number, public id : number, public address : string, public email : string){}
  }

  //Lets create instance
  const info1 = new Info("hasibur rahman safin", 23, 2133,"mohanagar", "ss@gmail.com")
  console.log(info1)
  console.log(info1.email)
  console.log(info1["address"])
  











}