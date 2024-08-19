{
    // Static in oop

    class Counter{
         static counter : number = 0

        static increment(){
            return Counter.counter = Counter.counter + 1
        }

        static decrement(){
            return Counter.counter = Counter.counter - 1
        }
    }


    const count1 = new Counter()

    console.log(Counter.increment()) // ---> Same Memory 
    console.log(Counter.increment())


    const user1 = new Counter()

    console.log(Counter.increment()) // ---> Same memory
    console.log(Counter.increment())

    // Another example

    class Calculator{

        static add(num1 : number , num2 : number){
            return num1 + num2
        }

        static subtract(num1 : number , num2 : number){
            return num1 - num2
        }
    }

    const result1 = Calculator.add(45,32)
    const result2 = Calculator.subtract(100,30)
    console.log(result1)
    console.log(result2)


    class StringUtils{
        static capitalize(str : string)  {
            //return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
            const spitArr = str.split(" ")
            let newArr = []
            for(let str of spitArr){
                if(typeof str === "string"){
                    const firstLetterUpper = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
                    newArr.push(firstLetterUpper)
                  
                }   
            }
            const makeStr = newArr.join(" ")
            return makeStr
        }
    }

    const capital = StringUtils.capitalize("john doe")

    console.log(capital)


















}