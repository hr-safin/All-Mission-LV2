{
    // type Assertion or Type Narrowing

    let str : unknown = "Geek for Geeks"
    console.log(str)

    let  len : number = (str as string).length
    console.log(len)

    let num : any = 77
    console.log(num)

    let typeNum  = <Number> num
    console.log(typeof typeNum)


    // Interface 

    interface Shape{
        name : string,
        color : string,
        area() : number
    }

    const circle : Shape = {
        name : "circle",
        color : "Red",
        area() {
            return parseFloat((Math.PI * 2 * 2).toFixed())
        }
    }

    const circleFunction = (Shape : Shape) : void => {
        console.log(`Name of the shape ${Shape.name}`)
        console.log(`The area of the circle : ${Shape.area()}`)
    }

    circleFunction(circle)


    type Hello = {
        hello : string
    }

    type  World = {
        world : string
    }

    type HelloWorld = Hello & World

    const helloWorld : HelloWorld = {
        hello : "safin",
        world : "mahi"
    }

    interface Num{
        num : number
    }

    interface Str extends Num{
        str : string
    }

    const numStr : Str = {
        num : 32323,
        str : "Hello World, I am hasibur rahman safin"
    }



























}