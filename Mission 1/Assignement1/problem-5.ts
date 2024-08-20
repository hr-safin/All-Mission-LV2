{
    // Problem-5 : You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.
    
   type Student<T> = {
    name : string;
    age : number;
    grades : T[]
   }

   const calculateAverageGrade = (input : Student<number>)  => {
     const arr = input.grades
     let total = 0;
     for(let elem of arr){
       total = total + elem
     }

     const average = total / arr.length
     return average
   }



    const student1: Student<number> = {     
        name: "Bob",     
        age: 17,     
        grades: [75, 80, 82, 88, 90]
               };
    const student2: Student<number> = {     
        name: "Safin",     
        age: 23,     
        grades: [1,2,3,4,5]
               };


const averageGradeForBob = calculateAverageGrade(student1);
const averageGradeForSafin = calculateAverageGrade(student2);
console.log(averageGradeForBob)
console.log(averageGradeForSafin)





}