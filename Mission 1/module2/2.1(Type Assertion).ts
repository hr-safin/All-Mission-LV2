{
    // Type Assertion / Type Narrowing

    let anything : any

    anything = "Next Level Web Development";
    anything = 22;

    // (anything as number)

    const kgToGm = (value : string | number) : string | number | undefined => {

        if(typeof value === "string"){
            const convertedValue = (parseFloat(value)) * 1000
            return `The Converted Value is : ${convertedValue}`
        }

        else if(typeof value === "number"){
            return value * 1000
        }

        else{
            return "Wrong input"
        }
    }

    const result1 = kgToGm(1000)  as number // type assertion
    const result2 = kgToGm("1000")  as string  // type assertion

    type CustomError = {
        message : string
    }

    type CustomError2 = {
        message : string
    }

    try{

    }
    catch(error){
        console.log((error as CustomError).message)
    }






}