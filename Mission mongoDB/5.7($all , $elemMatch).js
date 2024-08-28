// $All and $elemMatch

db.test.find({ interests: "Cooking" }).project({ interests: 1 });
db.test.find({ "interests.2": "Cooking" }).project({ interests: 1 });

// find the travel, gaming , reading from the json data
// $ALL

db.test
  .find({ interests: { $all: ["Travelling", "Gaming", "Reading"] } })
  .project({ interests: 1 });

// find javascript from json data

db.test.find({ "skills.name": "JAVASCRIPT" }).project({ skills: 1 });

db.test
  .find({
    skills: {
      name: "JAVASCRIPT",
      level: "Intermidiate",
      isLearning: false,
    },
  })
  .project({ skills: 1 });


  // $elemMatch

  db.test.find({
    skills : {
        $elemMatch : {
            name : "JAVASCRIPT",
            level : "Intermidiate"
        }
    }
  }).project( { skills : 1} )
