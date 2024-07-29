{
  // spread operator, 
  // Rest Operator
  // Destructuring

  //Spread Operator

  const bros1: string[] = ["Rafid", "Akram", "Wasif"];
  const bros2: string[] = ["Shariar", "Mridul", "Abid"];

  bros1.push(...bros2);

  const num1 : number[] = [1,2,3,4]
  const num2 : number[] = [5,6,7,8]

  num1.push(...num2)



  const university1 = {
    name : "Msu",
    subject : "Computer Science",
    place : "Mancato, Minessota"
}

const university2 = {
    name : "Northern Arizona University",
    subject : "Data Science",
    place : "Arizona"
}

const university3 = {
    name : "Western New England University",
    subject : "Cyber Security",
    place : "SpringField, Massachusetts "
}

const college1 = {
    name : "New Jersey Institute Of Technology",
    Subject : "Computer Science",
    place : "Newark, New Jersey"
}

const college2 = {
    name : "Minnesota State University",
    subject : "Computer Science and Engineering",
    place : "Mancato, Minnesota"
}

const college3 = {
    name : "Northern Arizona University",
    Subject : "Data Science",
    place : "Flagstaff, Arizona"
}
const universityList = {
    ...university1,
    ...university2,
    ...university3,
}

const collegeList = {
    ...college1,
    ...college2,
    ...college3
}

// rest operator

const greetFriends = (...friends :  string []) => {

    friends.forEach((friend : string) => console.log(`Hi ${friend}`))
}

greetFriends("Safin","akram", "wasif", "Rafid")

const users = (...user : string[]) => {
    user.forEach(usr => console.log(usr))
}

users("Hasibur", "Safin", "Rahman")














}


