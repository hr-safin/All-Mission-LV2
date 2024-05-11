// $All and $elemMatch

db.test.find({ interests : "Cooking"}).project({ interests : 1})
db.test.find({ "interests.2" : "Cooking"}).project({ interests : 1})

// find the travel, gaming , reading from the json data

db.test.find( {interests : {$all : ["Travelling", "Gaming", "Reading"]}} ).project( {interests : 1} )