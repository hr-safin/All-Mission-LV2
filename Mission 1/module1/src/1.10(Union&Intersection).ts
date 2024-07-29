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




    // Union Types

    type College = "New Jersey Institute Of Technology" | "Northern Arizona University"

    type College2 = "Western New England University" | "Montclair State University"


    type NewCollege = College | College2

    const college : College = "New Jersey Institute Of Technology"


    type Info = {
        name : string
        program : string
        dream : string
        college : "Norther University" | "NJIT" | "WNE"
    }

    const info1 : Info = {
        name : "Hasibur Rahman Safin",
        program : "Computer Science",
        dream : "Software Engineer",
        college : "NJIT"
    }

    //Intersection

    type FrontEndDeveloper = {
        skills : string[]
        designation1 : "Front End Developer"
    }

    type BackEndDeveloper = {
        skills : string[]
        designation2 : "Backend Developer"
    }

    type FullStackDevelopers = FrontEndDeveloper & BackEndDeveloper

    const fullstackDevelopers  : FullStackDevelopers = {
        skills : ["Tailwind CSS", "JavaScript", "React JS", "Express JS", "Mongoose"],
        designation1 : "Front End Developer",
        designation2 : "Backend Developer"
    }





}