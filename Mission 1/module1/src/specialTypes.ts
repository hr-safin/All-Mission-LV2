{

// Special Type

// Type Any

let u = true

//u = "string"

//Math.round(u) // Argument of type 'boolean' is not assignable to parameter of type 'number'.

let v : any = true

v = "string" // No error as it can be any type
Math.round(v) // No error as it can be any type


// Type unknown

const getSpeedInMeterPerSecond = (value : unknown) => {

    if(typeof value === "number"){
        const meterPerSecond = (value * 1000) / 3600
        console.log(`The value is ${meterPerSecond} ms^-1`)
    }
    else if(typeof value === "string"){
        const result = value.split(" ")
        const [num, symbol] = result
        const meterPerSecond = (parseFloat(value) * 1000) / 3600
        console.log(`The value is ${meterPerSecond} ms^-1`)
    }
    else{
        console.log("Wrong input try again")
    }
}

getSpeedInMeterPerSecond(1000)
getSpeedInMeterPerSecond("2000 km^-1")


// Nullable Type

const searchingName = (value : string | null) => {


    if(value){
        console.log("Searching")
    }

    else{
        console.log("There is nothing to search")
    }
}

searchingName("")






}
