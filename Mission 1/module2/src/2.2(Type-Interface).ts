{
    // Interface

    type User1 = {
        name : string;
        age : number
    }
    type UserWithRole = User1 & {role : string}

    interface User2 {
        name : string;
        age : number
    }

    interface UserWithRole2 extends User2{
        role : string
    }



    const user1 : UserWithRole2 = {
        name : "Hasibur Rahman Safin",
        age : 24,
        role : "FullStack Developer"
    }

    // Js --> object, array --> object , function ---> object

    type Roll1 = number[]


    interface Roll2 {
        [index : number] : number
    }

    const roll1 : Roll1 = [1,2,3]


    type Add = (num1 : number, num2 : number) => number


    interface Add2 {
        (num1 : number, num2 : number) : number
    }

    const add : Add2 = (num1, num2) => num1 + num2
                           





















}