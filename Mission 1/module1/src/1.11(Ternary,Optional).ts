// Ternary Operator, optional Chaining, nullish coalescing operator

{
    const age : number = 12

    // if(age >= 18){
    //     console.log("You are an adult")
    // }

    // else{
    //     console.log("You are still a kid")
    // }


    // ternary operator
   
    const mark : number = 50
    const passOrFail  = mark >=40 ? "You are passed" : "You are failed"
    
    console.log(passOrFail)

    // nullish coalescing = null and undefined
    // null & undefined --> decision making

    const isAuthenticated = ""
    const isAdmin = ""

    const result1 = isAuthenticated ?? "Guest"
    const prnt1 = isAdmin ?? "Yes"
    const result2 = isAuthenticated ? isAuthenticated : "Guest"
    const prnt2 = isAdmin ? isAdmin : "No"

    console.log({prnt1}, {prnt2})


    // optional Chaining

    type User = {
        name : string;
        email : string;
        address : {
            road : number;
            block : string;
            house : number;
            presentAddress : string;
            permanentAddress? : string ;
        }
    }

    const user : User = {
        name : "Hasibur rahman Safin",
        email : "erewr@fgmail.com",
        address : {
            road : 14,
            block : "Block B",
            house : 13,
            presentAddress : "Jatrabari",

        }
    }


    const permanentAddress = user?.address?.permanentAddress ?? "No permanent address"

    console.log(permanentAddress)

    type BioData = {
        name : "Hasibur Rahman Safin",
        age : number
        college : string
        address : {
            road? : number
            block : string
            area : string
            state : "Dhaka"
        }
    }


    const bioData : BioData = {
        name : "Hasibur Rahman Safin",
        age : 24,
        college : "New Jersey Institute Of Technology",
        address : {
            block : "B",
            area : "Mohanagar Project",
            state : "Dhaka"
        }
    }


    const areaName =  bioData?.address?.area
    const roadName = bioData?.address?.road ?? "No Road Number"

    console.log({areaName}, {roadName})








}