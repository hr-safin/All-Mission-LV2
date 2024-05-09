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


// array destructuring

const myFriends: string[] = ["Akram", "Safi", "Siam", "Rafid", "x", "y","z"]

const [ , , kana, ...rest] = myFriends























}