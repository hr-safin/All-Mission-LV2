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

    const isAdult = age >= 18 ? "Adult" : "NOT Adult"

    // console.log(isAdult)


    // nullish coalescing = null and undefined
    // null & undefined --> decision making

    const isAuthenticated = ""

    const result1 = isAuthenticated ?? "Guest"
    const result2 = isAuthenticated ? isAuthenticated : "Guest"

    // console.log({result1}, {result2})


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







}