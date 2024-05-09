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
    
























}