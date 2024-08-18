{
    // Statics

    class Counter{
        static count : number = 0
        static increment(){
            return Counter.count = Counter.count + 1
        }
        static decrement(){
            return Counter.count = Counter.count - 1
        }
    }

    // Instance

    // const Counter = new Counter()
    //console.log("Counter-------------->")
    console.log(Counter.increment()) // 1 --> different memory
    console.log(Counter.increment()) // 2 --> different memory
    console.log(Counter.increment()) // 3 --> different memory

    //const Counter = new Counter()
    //console.log("Counter-------------->")
    console.log(Counter.increment())  // 1 ---> different memory
    console.log(Counter.increment())  // 2 ---> different memory
    console.log(Counter.increment())  // 3 ---> different memory
  
    //const Counter = new Counter()
    // console.log("Counter-------------->")
    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.increment())











}