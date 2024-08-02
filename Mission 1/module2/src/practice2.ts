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