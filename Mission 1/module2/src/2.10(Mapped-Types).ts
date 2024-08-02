{
 // Mapped Types

 const arrayOfNumber : number[] = [1,2,3,4]
 

 const arrayOfString : string[] = arrayOfNumber.map((number) => number.toString())

 console.log(arrayOfString)

//  type AreaString = {
//     height : string;
//     width : string;
//  }

 type AreaNumber = {
    height : number;
    width : number
 }

 

 //Keyof AreaNumber --> "height" | "width"

 //T --> {height: string, weight : number}
 //Key --> T["height"], T["Weight"]
 type Height = AreaNumber["height"] // Lookup type

 type AreaString<T> = {
    [key in keyof T] : T[key]
 }

 const area1 : AreaString<{height : string; weight : number}> = {
    height : "100",
    weight : 100
 }
 }














}