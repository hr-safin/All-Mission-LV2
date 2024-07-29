// special type 

// any type ---> we should avoid this any type at any cost
let u : any  = true

u = "Hasibur rahman safin"

u = [1,2,3]

// unknown

const getMeterKilo = (value : unknown)  => {

    if(typeof value === "number"){
        const kilometer = value / 1000
        console.log({kilometer})

    }
    else if(typeof value === "string"){
        const result = value.split(" ")
        const [num] = result
        const kilometer = parseFloat(num) / 1000
        console.log({kilometer})
    }
    else{
        console.log("You are give a wrong type")
    }
}

getMeterKilo(3000)
getMeterKilo("3000")