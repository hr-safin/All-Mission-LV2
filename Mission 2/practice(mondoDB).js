// mongodb practice

//1. Find all documents in the collection where the age is greater than 30, and
// only return the name and email fields.

db.test.find( {
    age : {
        $gt : 30
    }
}).project( {name : 1, email : 1 } )

//2. Find documents where the favorite color is either "Maroon" or "Blue."

db.test.find({
    $or : [
        { favoutiteColor : "Maroon" },
        { favoutiteColor : "Blue" },
    ]
})

//3. Find all documents where the skill is an empty array.

db.test.find({
    skills : {
        $size : 0
    }
})

// alternative 

db.test.find({
    skills : {
        $exists : true,
        $eq : []
    }
})

//4. Find documents where the person has skills in both "JavaScript" and
//"Java."

db.test.find({
    skills: {
      $elemMatch: {
        $and: [
          { name: { $eq: "JavaScript" } }, // Case-sensitive match for "JavaScript"
          { name: { $eq: "Java" } }        // Case-sensitive match for "Java"
        ]
      }
    }
  });


 //5. Add a new skill to the skills array for the document with the email
// "aminextleveldeveloper@gmail.com". The skill is
// {"name": "Python"
// ,
// "level": "Beginner"
// ,
// "isLearning": true}

//step 1 ---> insert a new object in the array of the object with a email and empty skills field 
db.test.insertOne(
    {"email" : "aminextleveldeveloper@gmail.com" ,
    skills : []
})

// step two --> push the new object in the skills array
db.test.updateOne(
    {"email" : "aminextleveldeveloper@gmail.com" },
    {
        $push : {
            skills : {
                "name": "Python" ,
                "level": "Beginner",
                 "isLearning": true 
            }
        }
    }
)


//6 . Add a new language "Spanish" to the list of languages spoken by the
//person.

db.test.update(
    {_id : ObjectId("6406ad65fc13ae5a400000c7")},
    {
    $push : {
        languages : "English"
    }
})


//7. Remove the skill with the name "Kotlin" from the skills array.

db.test.updateOne(
    {"_id" : ObjectId("6406ad65fc13ae5a400000c6")},
    {
    $pull : {
        skills : {
            name : "KOTLIN"
        }
    }
})
  