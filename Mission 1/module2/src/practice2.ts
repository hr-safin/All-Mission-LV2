{

// Type Assertion

let str : unknown = "I am Hasibur Rahman Safin"
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
    college6 : string
}

const collegeList : NewCollege = {
    college1 : "New Jersey Institute Of Technology",
    college2 : "Western New England University",
    college3 : "Minnesota State University",
    college4 : "Ohio University",
    college5 : "Northern arizona university",
    college6 : "University of Texas at dallas"
}

console.log(collegeList)


// Type Alias

type UserInfo = {
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

const infoData : InfoData<string, number, number> = {
    name : "Hasibur rahman safin",
    age : 23,
    roll : 2333
}










// Constraints in generic

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


















}