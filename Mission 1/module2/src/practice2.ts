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