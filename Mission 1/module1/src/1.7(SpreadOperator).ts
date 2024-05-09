{
  // spread operator, Rest Operator
  // Destructuring

  //Spread Operator

  const bros1: string[] = ["Rafid", "Akram", "Wasif"];
  const bros2: string[] = ["Shariar", "Mridul", "Abid"];

  bros1.push(...bros2);

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

const universityList = {
    ...university1,
    ...university2,
    ...university3,
}

// rest operator

const greetFriends = (...friends :  string []) => {

    friends.forEach((friend : string) => console.log(`Hi ${friend}`))
}

greetFriends("Safin","akram", "wasif", "Rafid")















}


