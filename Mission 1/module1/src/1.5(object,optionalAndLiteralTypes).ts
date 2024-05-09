// Reference type > object
{
    const user : {
        // readonly Means : we can not change the value 
         readonly company : string // <--- Literal type (fixed every situation)
        firstName : string;
        middleName? : string; // <--- Optional Type
        lastName : string;
        age : number
    } = {
        company : "Meta",
        firstName : "Hasibur Rahman",
        lastName : "Shafin",
        age :  23
    }
}

