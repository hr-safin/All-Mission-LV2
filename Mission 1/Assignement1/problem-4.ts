{
    // Problem-4 : Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.
    


    const reverseArray = <T>(arr : T[]) => {

        const newReverseArray : T[] = []

        for(let i = arr.length - 1; i>= 0; i--){
            newReverseArray.push(arr[i])
        }

        return newReverseArray
    }



    const arr1 = reverseArray(["cherry", "banana", "apple"])
    console.log(arr1)

    const arr2 = reverseArray([10, 20, 30])
    console.log(arr2)
    










}