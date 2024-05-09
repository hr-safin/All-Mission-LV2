{
// Never , Unknown and Nullable Type

//Nullable Type

const searchName = (value : string | null) => {

     if(value){
        console.log("Searching")
     }
     else{
        console.log("There is nothing to search")
     }
}

// searchName(null)


// Unknown Type

const getSpeedInMeterPerSecond = (value : unknown) => {

    if(typeof value === "number"){
        const meterPerSecond = (value * 1000) / 3600
        console.log(`The value is ${meterPerSecond} ms^-1`) 
    }

    else if(typeof value === "string"){
        const [result, unit] = value.split(" ")
        const meterPerSecond = (parseFloat(result) * 1000) / 3600
        console.log(`The value is ${meterPerSecond} ms^-1`)
    }
    else{
        console.log("Wrong Input")
    }
}


getSpeedInMeterPerSecond(null)

// Never --> nothing will happen or run

const throwError = (msg : string) : never => {
    throw new Error(msg)
}

// throwError("Galti sey mistake ho gaya")













}

