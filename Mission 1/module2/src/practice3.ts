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

    // Void Function --> does not return any value

    function voidFunc(name : string) : void{
        console.log(`My name is ${name}`)
    }

    voidFunc("Hasibur Rahman Safin")


    // Type vs Interface

    type Safin = {
        name1 : string
    }

    type Mahi ={
        name2 : string
    }

    type Marry = Safin & Mahi

    const marry : Marry = {
        name1 : "Hasibur Rahman Safin",
        name2 : "Nur Al Munira Mahi"
    }

    console.log(marry)

    interface Geeks{
        email : string
    }

    interface Geeks{
        id : number
    }

    const info : Geeks = {
        email : "ss@gmail",
        id : 3322
    }

     type mufu = (param1 :  number, param2 : number) => number
    interface myFunc{
        (param1 :number, param2 : number) : number
    }

    // with Interface we use Extends
    // With type we use intersection


    // Generic

    function identity<T>(arg : T) : T {
        console.log(`the type of the value can be anything ${arg}`)
        return arg
    }

    const output = identity<string>("232")
    console.log(output)


    type GenericArray = Array<string | boolean | number>
    type GenericArray2<T> = Array<T>

    const arrayOfNumber : GenericArray2<number> = [1,2,3,3]

    interface User{
        name : string,
        age : number,
        email : string
    }

    const arrayOfObject : GenericArray2<User>= [
        {
            name : "Hasibur",
            age : 23,
            email : "34343"
        },
        {
            name : "munira",
            age : 24,
            email : "34343"
        }
    ]


    // Generic in tuple

    type GenericTuple<X,Y> = [X,Y]
    type NameEmail = {
        name : string,
        email : string,
    }

    type Age = NameEmail & {age : number}

    const infoArray : GenericTuple<string, number> = ["safin",23]
    const infoOfObject : GenericTuple<number, NameEmail> = [12, {
        name : "Hasibur",
        email : "34343"
    }]

    const infoOfObject2 : GenericTuple<number, Age> = [12, {
        name : "dss",
        email : "33343",
        age : 23
    }]


    // Generic With Interface

    const getArray =<T>(arr : T[]) => {
        return arr
    }

    const numberArray = getArray<number>([1,2,3,4])
    const stringArray = getArray<string>(["safin", "hello", "wasif"])


    const getNameEmail = <T,X>(name : T, email : X) => {
        return `My name is ${name} and my email is ${email}`
    }

    const nameEmail = getNameEmail("hasibur","hr@gmail.com")


    interface Props<T>{
        name : T[],
        id : number
    }


    const importantInfo : Props<string> =  {
        name : ["safin", "heloo"],
        id : 23232
    }
    const importantInfo2 : Props<string> =  {
        name : ["safin", "heloo"],
        id : 23232
    }


    // Function With Generic
    const createArray = <T>(params : T) : T[] => {
        return [params]
    }

    const createArrayString = createArray<string>("hasibur rahman safin")
    const  createArrayNumber = createArray<number>(12)


    const createArrayWithGeneric = <T>(params : T) : T[] => {
        return [params]
    }

    interface UserInfo{
        name : string,
        age : number,
        email : string,
        id : number,
        goal : string
    }

    const createArrayOfObject = createArrayWithGeneric<UserInfo>(
        {
            name : "Hasibur Rahman Safin",
            age : 23,
            email : "ss@gmail.com",
            id : 23323,
            goal : "Want to go to USA"
        }
    )

    // Tuple

    const createWithTuple = <T,X>(params1 : T, params2 : X) : [T,X] => {
        return [params1, params2]
    }

    const tupleArray = createWithTuple<string, number>("NJIT", 2323)

    function independent<T>(arg : T) : T {
        return arg
    }

    const shadinBangladesh = independent<string>("Bangladesh Become independent for two time on 5th august")





























}