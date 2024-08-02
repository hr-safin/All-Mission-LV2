{

    // Conditional Type

    type a1 = null
    type b1 = undefined

    type x = a1 extends null ? true : false // Conditional Type type of x depends on type of a1 

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any

    type Safin = {
         bike : string;
         ship : string;
         car : string
    }

    // if car has or ship has or bike has

    type checkVehicle<T> = T extends "bike" | "ship" | "car" ? true : false 
    type checkVehicle2<T> = T extends keyof Safin ? true : false 

    type HasBike = checkVehicle<"car">
    type HasShip = checkVehicle<"ship">
    type HasCar = checkVehicle<"car">









}