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




    const info : {
        name : string
        goal : string
        dreamSchool : "New Jersey Institute Of Technology" // Literal Type or fixed Type
        age? : number  // Optional Type

    } = {
        name : "Hasibur rahman safin",
        goal : "To Become a software engineer",
        dreamSchool : "New Jersey Institute Of Technology"
     }



     info.goal = "I want to go to usa and become a software engineer there"















}








