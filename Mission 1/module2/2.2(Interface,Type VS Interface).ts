{
    // interface

    type User1 = {
        name : string;
        age : number;
    }

    interface User2  {
        name : string;
        age : number ;
    }

    interface UserWithRole2 extends User1 {
        role : string;
    }

    type UserWithRole1 = User1 & {role : string}

    const user : UserWithRole2 = {
        name : "Hasibur Rahman Safin",
        age : 23,
        role : "Full stack developer"
    }

    type rollNumber = number


    // array

    type Roll1 = number[]

    interface Roll2 {
        [index : number] : number
    }

    const rollNumbers : Roll2 = [1,2,3,4,5,6,7]


    // function

    type Add = (num1 : number, num2 : number) => number

    interface Add2 {
        (num1 : number, num2 : number) : number
    }

    interface Sub {
        (num1 : number, num2 : number) : number
    }

    const add : Add2 = (num1, num2) => num1 + num2

    const sub : Sub = (num1, num2) => num1 - num2
    


    

}