{
    // Problem-3 : Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

    const filterEvenNumbers = (num : number[])  => {
        
        let evenArray : number[] = []
        for(let value of num){
            if(value % 2 ===0){
                evenArray.push(value)
            }
        }

        console.log(evenArray)

    }


    filterEvenNumbers([1,2,3,4,5,6])












}