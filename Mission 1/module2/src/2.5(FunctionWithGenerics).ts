{
    // Function With Generics

    const createArray = (params : string) : string[] => {
        return [params]
    }

    const createArrayWithGeneric = <T>(params : T) : T[] => {
        return [params]
    }

    const createArrayWithGeneric2 = <T>(params : T) : T[] => {
        return [params]
    }

    const res1 = createArray("Bangladesh")
    const res2 = createArrayWithGeneric<string>("Hasibur Rahman Safin")
    const res3 = createArrayWithGeneric2<string>("Hello, I am Bangladesh")

    
    type UserInfo = {
        id : number;
        name : string;
        email : string;
    }

    interface UserInfo2{
        id : number;
        name : string;
        email : string
    }
    const res4Object = createArrayWithGeneric2<UserInfo2>({id : 23, name : "Hasibur Rahman Safin", email : "25@gmail.com"})

    console.log(res4Object)

    // tuple

    const createWithTuple = <T,Q>(params1 : T, params2 : Q) : [T,Q] => {
        return [params1, params2]
    }

    const res1Tuple = createWithTuple<string, number>("Bloody July Gone", 301)
    console.log(res1Tuple)


    const addStudentToCourse = <T>(students : T) => {
        const course = "Next Level Web Development Course"

        return {
            ...students,
            course
        }
            
        
    }

    const addstudents = addStudentToCourse({name : "Hasibur rahman safin", id : 2323, email : "efffsd@gmail.com"})

    console.log(addstudents)










}