{

    // Array in Typescript

    let number : string[] = ["12","Safin", "Takku"]
    number.push("3")
    //number.push(3) //Argument of type 'number' is not assignable to parameter of type 'string'.

    // ReadOnly

    let number2 : readonly string[] = ["Hasibur Rahman Safin"]

    //number2.push("4")  //Property 'push' does not exist on type 'readonly string[]'.

    // Type Inference

    const numbers  = [1,2,3]
    numbers.push(5)
    console.log(numbers)

    let head : number = numbers[0]

    console.log(head)




















}