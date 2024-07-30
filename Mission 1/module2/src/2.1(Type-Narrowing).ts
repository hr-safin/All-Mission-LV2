{
//Type Assertion

let anything : any ;
 
anything = "Hello world Inshallah I will go to usa oneday";
anything = 23223;

// ( anything as number).

const kiloMeter = (value : string | number) : string | number | undefined => {

    if( typeof value === "string"){
        const meter = parseFloat(value) * 1000
        return `The Converted value is ${meter} meter`
    }

    if( typeof value === "number"){
        const meter = value * 1000
        return meter
    }
}


const result = kiloMeter(22) as number
const result2 = kiloMeter("22") 


type CustomError = {
    message : "Something is wrong"
}

try{

}catch(error){
    console.log((error as CustomError).message)
}
























}