{
 
    // Generic Constraints With  Key Of

    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    type Owner = "bike" | "car" | "ship" //Manually

    type Owner2 = keyof Vehicle

    const owner : Owner2 = "car"

    

    const  getPropertyValues =<X, Y extends keyof X>(obj : X, key : Y) =>{
        return obj[key]
    }

    const user = {

        name1 : "Hasibur Rahman Safin",
        email : "helloWortk@gmail.com",
        id : 2323
    }

    const car = {
        brand : "Lamborgini",
        model : "2013"
    }


    const result1 = getPropertyValues(user, "name1")
    const result2 = getPropertyValues(car, "brand")
    const result3 = getPropertyValues(car, "brand")

    

















}