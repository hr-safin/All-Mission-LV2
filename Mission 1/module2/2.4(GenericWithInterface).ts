{
    // Generics type

    // type GenericArray = Array<number | string | boolean>
    type GenericArray<T> = Array<T>

    //const rollNumber : number[] = [12,34,5,6]
    const rollNumber : GenericArray<number> = [12,34,5,6] // generic types
    console.log(rollNumber)
    // const studentName : string[] = ["Sfin", "wadif", "Akku"]
    const studentName : GenericArray<string> = ["Sfin", "wadif", "Akku"]
    console.log(studentName)
    // const isAdmin : boolean[] = [true, false, true]
    const isAdmin : GenericArray<boolean> = [true, false, true]
    console.log(isAdmin)

    interface User  {
        name : string;
        age : number
    }


    const user : GenericArray<User> = [
        {
            name : "Hasibur Rahman Safin",
            age : 23,
        },
        {
            name : "Akram Hossain",
            age : 24,
        }
    ]


    // Generic Tuple

    type GenericTuple<X,Y> = [X,Y]

    const identity : GenericTuple<string, string> = ["Rahman", "Munira"]
    console.log(identity)

    const userWithId : GenericTuple<number, {name : string, age : number}> = [122,{name : "Hasibur", age : 23,}]

    












}