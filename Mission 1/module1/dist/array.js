"use strict";
{
    // Array in Typescript
    let number = ["12", "Safin", "Takku"];
    number.push("3");
    //number.push(3) //Argument of type 'number' is not assignable to parameter of type 'string'.
    // ReadOnly
    let number2 = ["Hasibur Rahman Safin"];
    //number2.push("4")  //Property 'push' does not exist on type 'readonly string[]'.
    // Type Inference
    const numbers = [1, 2, 3];
    numbers.push(5);
    console.log(numbers);
    let head = numbers[0];
    console.log(head);
}
