{

// Type Assertion

let str : unknown = "I am Hasibur Rahman Safin"
console.log(str)

let len : number = (str as string).length

console.log(len)


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


















}