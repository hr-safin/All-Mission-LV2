{

// Type Assertion

let str : unknown = "I am Hasibur Rahman Safin"
console.log(str)
console.log(str)

let len : number = (str as string).length

// console.log(len)

let str2 : unknown = "Hasibur rahman Safin"
console.log(str2)

let len2 = (str2 as string).length
console.log(str2)

let num : any = 77
console.log(num)

//Conversion from any to number

const num1 = <Number> num
console.log(typeof num1)

let name1 : any = "Hasibur Rahman Safin"
console.log(name1)

// Conversion from string to number
let string1 = <String> name1
console.log(typeof string1)


// Interface

interface Rectangle {
    height : number;
    weight : number
}

type Rectangle2 = {
    height : number;
    weight : number
}

interface ColoredRectangle extends Rectangle2{
    color : string
}

const rectangle : ColoredRectangle = {
  height : 12,
  weight : 20,
  color : "Blue"
}

interface Person{
    name : string;
    age : number;
    sex : "male" | "female"
}

const persons : Person = {
    name : "Hasibur Rahman Safin",
    age : 23,
    sex : "male"
}

const sex = persons.sex
console.log(sex)

interface  College{
    college1 : string;
    college2 : string;
    college3 : string
}

interface NewCollege extends College{
    college4 : string;
    college5 : string;
    college6 : string,
    college7 : string
}

const collegeList : NewCollege = {
    college1 : "New Jersey Institute Of Technology",
    college2 : "Western New England University",
    college3 : "Minnesota State University",
    college4 : "Ohio University",
    college5 : "Northern arizona university",
    college6 : "University of Texas at dallas",
    college7 : "University of people"
}

console.log(collegeList)


// Type Alias

type UserInfo = {
    name : string;
    age : number;
    college : string
}
type UserInfo2 = {
    name : string;
    age : number;
    college : string
}

const userInfo : UserInfo = {
    name : "Hasibur Rahman Safin",
    age : 23,
    college : "New Jersey Institute Of Technology"
}

// Type VS Interface

type Geeks= {
    name : string;
    age : number
}


type MoreGeeks = {
    email : string;
}

type CombineGeeks = Geeks & MoreGeeks

const geekForGeeks : CombineGeeks = {
    name : "safin",
    age : 23,
    email : "safin@gmail.com"
}

console.log(geekForGeeks)
console.log(geekForGeeks)


interface Geeks2{
    name : string;
    age : number;
}

interface Geeks2{
    email : string;
}

const geekForGeeks2 : Geeks2 = {
    name : "ssss",
    age : 33,
    email : "3w433@gmail.com"
}


// Intro To Generic

function printData(data : number | string | boolean)  {

    console.log("data :", data)

}

function printData2<T>(data : T){
    console.log("Data : ", data)
}

printData2("string")
printData2(2)
printData2([1,2,3])
printData2({ name : "hasibur rahman safin"})


function printData3<X,Y>(data1 : X, data2 : Y){
    console.log(data1, data2)
}

printData3("hello", 123)
printData3(23,23)


interface UserData<X,Y>{
    name : X,
    roll : Y
}

const userData : UserData<string, number> = {
    name : "Hasibur Rahman Safin",
    roll : 223
}

interface InfoData<X,Y,Z>{
    name : X,
    age : Y,
    roll : Z
}

const infoData2 : InfoData<string, number, number> = {
    name : "Hasibur rahman safin",
    age : 23,
    roll : 2333
}

// Generic Interface in typescript

function getArray<T>(array : T[]){
    return array
}

const arrayOfString = getArray<string>(["safin","hello", "world"])
console.log(arrayOfString)
const arrayOfNumber = getArray<number>([1,2,34])
console.log(arrayOfNumber)

function getInfo<X,Y>(name : X, id : Y){
    return `My name is ${name} and id is ${id}`
}

const getNameId = getInfo<string, number>("hasibur rahman safin", 21301585)
console.log(getNameId)


// Create a interface
// interface Props{
//     name : string;
//     id : number
// }

// Generic with interface <T>
interface Props<T>{
        name : T[];
        id : T
    }


    let person : Props<string> = {
        name : ["hello", "i want to go", "USA"],
        id : "232332"

    }

    console.log(person)

   // Constraints Generic
    interface Props2<T extends {id : number}>{
        data : T[]
    }


    interface objectProps{
        id : number,
        name : string,
        SN : number
    }

    let customData : Props2<objectProps> = {
        data : [
            {
                id : 213,
                name : "Hello World",
                SN : 23232
            }
        ]
    }

    console.log(customData)

    interface objectProps2{
        id : number,
        name : string,
        email : string,
        SN : number
    }

    interface Props3<T extends {id : number}>{
        data : T[]
    }

    const customData2 : Props3<objectProps2> = {
        data : [
            {
                id : 211221,
                name : "Hasibur rahman safin",
                email : "s@gmail.com",
                SN : 32323
            }
        ]
    }

    interface AddCourse{
        name : string,
        id : number,
        email : string

    }


    const addStudentToCourse2 = <T extends AddCourse>( students : T)  => {
       const course = "Next Level Web Development Course"
       const hello = "hello students"

       return {
        ...students,
        course,
        hello
       }
    }

    const student11 = addStudentToCourse2({
        name : "Hasibur rahman safin",
        id : 32323,
        email : "hello@gmail.com"
    })

    const student22 = addStudentToCourse2({
        name : "Nur Al Munira Mahi",
        id : 23332,
        email : "hello@gmail.com"
    })

    const student33 = addStudentToCourse2({
        name : "nnjjjj",
        id : 33232,
        email : "444@gmail.com"
    })

    // Function with generic

    const createArrayGeneric = <T>(params : T) : T[] => {
        return [params]
    }

    const createArrayOfString = createArrayGeneric<string>("Hasibur Rahman Safin")
    const createArrayOfNumber = createArrayGeneric<number>(12)

    // Tuple

    const createArrayGenericTuple = <X,Y>(params1 : X, params2 : Y) : [X,Y] => {
        return [params1, params2]
    }

    const createArrayOfTupleNumber = createArrayGenericTuple<number, number>(1, 12)

    const createArrayOfTupleString = createArrayGenericTuple<string, string>(
        "hasibur rahman safin", "dddd"
    )



// Constraints in generic

// lets create an interface

interface CommonInfo{
    name : string,
    age : number,
    email : string
}

const addToCourse = <T extends CommonInfo>(student : T) => {
   
    const course = "Next Level Web Development Course"
    const dream = "I want to go to USA insha Allah soon"
    return {
        ... student,
        course,
        dream
    }
}

const studentNo1 = addToCourse({
    name : "Hasibur rahman Safin",
    age : 23,
    email : "hs@gmail.com"
})

const addStudentToCourse = <T extends
{name : string, id : number, email : string}
>(students : T) => {
   const course = "Next Level Web Development Course"

   return {
       ...students,
       course
   }
       
   
}

const student1 = addStudentToCourse(
   {
    name : "Hasibur rahman safin", 
    id : 2323, 
    email : "hello@gmail.com",
    devType : "NFDD"
   }
)

const student2 = addStudentToCourse(
   {
    name : "Nur Al Munira Mahi", 
    id : 2323, 
    email : "gg@gmail.com",
    hasWatch : "Apple Watch"
   }
)

const student3 = addStudentToCourse(
   {
   name : "hablu",
   id : 2323,
   email : "hello world",
   emni : "emni"

   })

interface Length{
    length : number
}
const whatIsLength = <T extends Length>(a : T, b : T) => {
    if(a.length > b.length){
        return("A is larger than B")
    }
    else if(a.length === b.length){
        return("Both are same length")
    }
    else{
        return("A is smaller than B")
    }
}

const determineTheLength = whatIsLength("ss","ssss")
console.log(determineTheLength)
const determineTheLength2 = whatIsLength([12,2],[34])
console.log(determineTheLength2)

// Constraint Keyof with generic

type Owner = "Bike" | "Car" | "Ship" // Manually

type Vehicles = {
    Bike : string,
    Car : string,
    Ship : string
}

type Owner2 = keyof Owner
type Owner3 = keyof Vehicles

const owner : Owner3 = "Car"


const getPropertyValues = <X, Y extends keyof X>(obj : X, key : Y) => {
    return obj[key]
}



const user = {
    name : "Hasibur Rahman Safin",
    age : 23,
    email : "34343@gmail.com"
}

const user2 = {
    name : "Nur Al Munira Mahi",
    age : 21,
    email : "344@gmail.com222"
}


const getProperty1 = getPropertyValues(user, "name")
console.log(getProperty1)
const getProperty2 = getPropertyValues(user2, "email")
console.log(getProperty2)

function identity<T extends number>(args : T) : T{
    return args
}
console.log(identity(212112))


interface Person11{
    name : string,
    age : number,
    email : string
}

type PersonKeys = keyof Person11

const getKeys = <X,Y extends keyof X>(obj : X, key : Y) => {
    return obj[key]
}


const nam = getKeys(user, "name")


















}