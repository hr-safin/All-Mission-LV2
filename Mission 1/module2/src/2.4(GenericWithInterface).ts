// Generic With Interface

{

    interface Developer<T,X = null>{
        name : string;
        role : string;
        computer : {
            brand : string;
            model : string;
            releaseYear : number
        },
        smartWatch : T,
        bike? : X
    }


    interface PoorDeveloperWatch{
        brand : string ;
        model : string ;
        display : string
    }


    const poorDeveloper : Developer<PoorDeveloperWatch> = {
        name : "Hasibur rahman Safin",
        role : "Full Stack Developer",
        computer : {
            brand : "HP",
            model : "2-233",
            releaseYear : 2018
        },
        smartWatch : {
            brand : "Xiomi",
            model : "34d-88",
            display : "OLED"
        }
    }

    interface RichDeveloperWatch{
        brand : string ;
        model : string ;
        heartRate : boolean;
        stepCount : boolean
    }
    interface RichDeveloperBike{
        company : string;
        model : string;
        topSpeed : number;
        milage : string
    }

    const richDeveloper : Developer<RichDeveloperWatch,RichDeveloperBike> = {
        name : "Safin Rahman",
        role : "Software Engineer",
        computer : {
            brand : "Apple",
            model : "Macbook",
            releaseYear : 2021
        },
        smartWatch : {
            brand : "Apple",
            model : "Ultra",
            heartRate : true,
            stepCount : true
        },
        bike : {
            company : "bazas",
            model : "3434dd",
            topSpeed : 130,
            milage : "60kilo"
        }
    }














}