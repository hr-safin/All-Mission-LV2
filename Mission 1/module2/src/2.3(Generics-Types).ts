// Generic Types

{

    type GenericArray = Array<string | number | boolean>
    type GenericArray2<T> = Array<T>

    // const nam : string[] = ["safin","Hello World","hasibur rahman"]
    const nam : GenericArray2<string> = ["safin","Hello world", "s"]

    // const numberArr : number[] = [1,2,3]
    const numberArr : GenericArray2<number>= [1,2,3,4]


    // const bool : boolean[] = [true, false, true]
    const bool : GenericArray2<boolean> = [true, false, true]


    const user : GenericArray2<{name : string, age : number}> = [
        {
            name : "hasibur rahman safin",
            age : 24
        },
        {
            name : "safin rahman",
            age : 23
        },
    ]

    // Generic Tuple
    type GenericTuple<X,Y> = [X, Y]
    const life : GenericTuple<string, string> = ["Mr. X", "MS. Y"]

    const userInfo : GenericTuple<number, {name : string, email : string}> = [122, {name : "safin", email : "safin@gmail.com"}]
















}