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
const collegeName = (value : string | null) => {
    if(value){
        console.log(`You are going to study at ${value} `)
    }
    else{
        console.log("you are not going to study")
    }
}

collegeName("New Jersey Institute Of Technology")
collegeName(null)


// Unknown Type

// const getSpeedInMeterPerSecond = (value : unknown) => {

//     if(typeof value === "number"){
//         const meterPerSecond = (value * 1000) / 3600
//         console.log(`The value is ${meterPerSecond} ms^-1`) 
//     }

//     else if(typeof value === "string"){
//         const [result, unit] = value.split(" ")
//         const meterPerSecond = (parseFloat(result) * 1000) / 3600
//         console.log(`The value is ${meterPerSecond} ms^-1`)
//     }
//     else{
//         console.log("Wrong Input")
//     }
// }




// getSpeedInMeterPerSecond(null)

const getMeterPerSecond = (value : unknown) => {
    if( typeof value === "number"){
        const convertedSpeed  = (value * 1000) / 3600
        console.log(`The result is ${convertedSpeed} km^-1`) 
    }
    else if(typeof value === "string"){
        const numberArr = value.split(" ")
        const [result, unit] = numberArr
        const convertedSpeed  = (parseFloat(result) * 1000) / 3600
        console.log(`The result is ${convertedSpeed} km^-1`)  
    }

    else{
        console.log("You have given a wrong input")
    }
}

getMeterPerSecond("1000 km^-1")
getMeterPerSecond(1000)
getMeterPerSecond(null)

// Never --> nothing will happen or run

const throwError = (msg : string) : never => {
    throw new Error(msg)
}

// throwError("Galti sey mistake ho gaya")













}

