{
    // PROBLEM- 1 : Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

    function repeatString(str : string, num : number){

        let repeativeString = ""
        for(let i =0 ; i<num; i++){
            repeativeString = repeativeString + str
        }

        console.log(repeativeString)
    }


    repeatString("Hello!", 3)
    repeatString("Safin!", 10)
    repeatString("wasif", 10)
    repeatString("wasif", 10)
    repeatString("wasif", 10)











}