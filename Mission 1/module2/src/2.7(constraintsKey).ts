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

    const user = {

        name : "Hasibur Rahman Safin",
        email : "helloWortk@gmail.com",
        id : 2323
    }

















}