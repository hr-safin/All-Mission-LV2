{
    // Problem-2 : Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
    
    const findLargestNumber = (arr : number[]) : number | undefined => {
        if(arr.length === 0){
            return undefined
        }

        let largestNumber = arr[0]
        
        for(let elem  of arr){
            if(elem > largestNumber){
                largestNumber = elem
            }
        }

        console.log(largestNumber)
    }
    


    findLargestNumber([10, 5, 8, 20, 3])










}