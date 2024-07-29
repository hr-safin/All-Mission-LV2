{

    // Type Alias

    type Student =  {
        name : string;
        age : number;
        id : string;
        address : string;
        profession : string;
    }

    const student1 : Student= {
        name : "Hasibur Rahman Safin",
        age : 23,
        id : "2323232",
        address : "Dhaka",
        profession : "Software Developer"
    }

    const student2 : Student = {
        name : "Nur-Al Munira",
        age : 22,
        id : "223223",
        address : "Dhaka",
        profession : "businesswomen"
    }

    type UserName = string
    type IsAdmin  = boolean

    const userName : UserName = "Hasibur Rahman Safin"
    const isAdmin : IsAdmin = true


    type Add = (num1 : number, num2 : number)  => number
    const add : Add = (num1, num2) =>  num1 + num2
    

    type User =  {
        name : string
        age : number
        college : string
        program : string
    }


    const user1 : User  = {
        name : "Hasibur Rahman Safin",
        age : 24,
        college : "New Jersey Institute Of Technology",
        program : "Computer Science" 
    }


    const user2 : User = {
        name : "Nur Al Munira Mahi",
        age : 23,
        college : "Montclair State University",
        program : "Business Analytics"
    }


    type UserName2 = string

    const userName2 : UserName2 = "Hasibur rahman Safin"
    
    type IsAd = boolean
    const isAdmin2 : IsAd = true

    type Addition = (x : number, y : number) => number


    const addition : Addition = (num1, num2) => num1 + num2





















}