{
  // Type Guard Using Typeof and In
  // type guard
  // typeof --> type guard

  type Alpha = string | number

  let Add1 = (
    param1: Alpha,
    param2: Alpha
  ): Alpha => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return (param1 + param2);
    } else {
      return param1.toString() + param2.toString();
    }
  };
}


// In guard

type NormalUser = {
    name : string
}

type AdminUser = {
    name : string
    role : string
}

const getUser = (user : NormalUser | AdminUser) => {
    
    if("role" in user){
        console.log(` My name is ${user.name} and ${user.role}`)
    }
    else{
        console.log(`My name is ${user.name}`)
    }
}


const normalUser : NormalUser = {
    name : "Normal Bhai"
}

const adminUser : AdminUser = {
    name : "Admin Bhai",
    role : "Full Stack Developer"
}


getUser(adminUser)
getUser(normalUser)








