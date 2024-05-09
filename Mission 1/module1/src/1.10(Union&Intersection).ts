{

    // union Types

    // type FrontendDeveloper = "Fakibaz Developer" | "Junior Developer"
    // type FullStackDeveloper = "Frontend Developer" | "Expert Developer"


    type Developer = FrontendDeveloper | FullStackDeveloper


    // const newDeveloper : FrontendDeveloper = "Junior Developer"
    // const newExpertDeveloper : FullStackDeveloper = "Expert Developer"


    type User = {
        name : string;
        email? : string;
        gender : "Male" | "Female"
        bloodGroup : "o+" | "AB+" | "B+"
    }


    const user1 : User = {
        name : "Hasibur Rahman Safin",
        email : "hasibur@gmail.com",
        gender : "Male",
        bloodGroup : "AB+"
    }


    type FrontendDeveloper = {
        name : string;
        skills : string[];
        designation1 : "Frontend Developer"
    }

    type BackendDeveloper = {
        name : string;
        skills : string[];
        designation2 : "Backend Developer"
    }

    // Intersection Types

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper


    const fullstackDeveloper : FullStackDeveloper = {
        name : "Hasibur Rahman Safin",
        skills : ["Html","React Js", "Express js", "Typescript", "Nodes"],
        designation1 : "Frontend Developer",
        designation2 : "Backend Developer"
    }








}