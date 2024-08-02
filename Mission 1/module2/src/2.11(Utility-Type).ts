{
    // Utility Types
    // Pick

    type Person = {
        name : string;
        age : number;
        email? : string;
        contactNo : string
    }

    type NameAge = Pick<Person, "name"| "age">
    type EmailContact = Pick<Person, "email" | "contactNo">
    type NameEmail = Pick<Person, "name" | "email">

    //Omit

    type Contact = Omit<Person, "name" | "age">

    //Required

    type AllRequired = Required<Person>

    //Partial

    type AllOptional = Partial<Person>

    //Readonly

    type ReadOnlyValue = Readonly<Person>

    const person1 : ReadOnlyValue = {
        name : "hasibur",
        age :23,
        email : "hh@gmail.com",
        contactNo : "Rampura 99999"
    }

// Record

// type Myobj = {
//     a : string;
//     b : string
// }

type Myobj = Record<string, string>


type EmptyObj = Record<string, unknown>
const myobj : EmptyObj = {
    a : "hello",
    b : "bye",
    c : "ccc",
    d : "22"
}


























}