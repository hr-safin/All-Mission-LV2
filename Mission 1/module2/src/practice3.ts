{
    // type Assertion or Type Narrowing

    let str : unknown = "Geek for Geeks"
    console.log(str)

    let  len : number = (str as string).length
    console.log(len)

    let num : any = 77
    console.log(num)

    let typeNum  = <Number> num
    console.log(typeof typeNum)



























}