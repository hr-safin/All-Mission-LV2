//Destructuring

{

const user = {
    name : {
        firstName : "Hasibur",
        middleName : "Rahman",
        lastName : "Safin"
    },

    age : 23,
    id : 21301585,
    contact : "0132342334",
    address : "USA in sha Allah"

}

const {address, name : {middleName}} =  user


const normalUser = {
    id : 21301585,
    name : {
        firstName : "Hasibur",
        middleName : "Rahman",
        lastName : "Safin"
    },
    college : "New Jersey Institute Of Technology",
    dreamProfession : "Software Engineer"
}

const {id : ID, name : {firstName : FirstName, lastName : LastName} } = normalUser


// array destructuring

const myFriends: string[] = ["Akram", "Safi", "Siam", "Rafid", "x", "y","z"]

const [ , , kana, ...rest] = myFriends

const collegeList : string[] = ["WNE","MSU", "NJIT", "Ohio University", "Texas Dallas"]

const [ , , bestUniversity, ...college] = collegeList























}