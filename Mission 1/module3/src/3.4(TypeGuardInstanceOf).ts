{

    // Type Guard Instance Of
    // Instance of guard

    class User{
        name : string
        age : number
        address : string

        constructor(name : string, age : number, address : string){
            this.name = name
            this.age = age
            this.address = address
        }

        sleepWell(){
            console.log("I am sleeping well")
        }

        
    }


    class John extends User{
        constructor(name : string, age : number, address : string){
            super(name,age, address)
        }

        sleepingTime(hours : number){
            console.log(`Mr/Mrs ${this.name}'s sleeping hour is ${hours} hours a day`)
        }
    }

    class Mia extends User{
        constructor(name : string, age : number, address : string){
            super(name,age, address)
        }

        studyTime(hours : number){
            console.log(`Mr/Mrs ${this.name} study for ${hours} hours a day`)
        }
    }


    const john = new John("jhon hasan", 23, "USA")
    // john.sleepingTime(3)
    const mia = new Mia("Mia saheb", 22, "Barishal")
    // mia.studyTime(5)
    const user1 = new User("Hasibur Rahman Safin", 23, "America")
    
    const IsJohn = (user : User) : user is John => {
        return user instanceof John
    }

    const IsMia = (user : User) : user is Mia => {
        return user instanceof Mia
    }

    const getUser = (user : User) => {
        
        if(IsJohn(user)){
            user.sleepingTime(5)
        }
        else if(IsMia(user)){
            user.studyTime(7)
        }else{
            user.sleepWell()
        }
    }

    getUser(john)
    getUser(mia)
















}