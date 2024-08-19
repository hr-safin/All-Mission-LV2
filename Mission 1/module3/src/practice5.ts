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


















}