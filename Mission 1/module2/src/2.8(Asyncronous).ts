{

    // Asynchronous in typescript

    // Promise

    type Todo = {
        id : number;
        userId : number;
        title : string;
        completed : boolean

    }

    const getUser = async() : Promise<Todo> => {
        const response =  await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await  response.json()
        return data
    }

    getUser()

    type Something = {
        something : string
    }

    interface Something2{
        something : string
    }

    const createPromise = () : Promise<Something> => {

        return new Promise<Something>((resolve, reject) => {
            const data : Something = {something : "Something"}
            if(data){
                resolve(data)
            }else{
                reject("Failed To Load Data")
            }
        })
    }

    // Calling Create promise function

    const showData = async() : Promise<Something>  => {
        const data : Something = await createPromise()
        // console.log(data)
        return data
    }

    showData()

















}