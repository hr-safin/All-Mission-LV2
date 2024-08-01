{
    //constraints

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