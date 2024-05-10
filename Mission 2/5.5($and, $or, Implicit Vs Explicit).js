// $And --> $and performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions.

db.test.find({age : {$gte : 18, $lt : 32}}, {age : 1}).sort({age : 1})

// Explicit And operator

// find all the data not equal to 15 and less than 35 from json data

db.test.find({
    $and : [
        {age : {$ne : 15}},
        {age : {$lt : 35}}
    ]
}, {age : 1}).sort({age : 1})

db.test.find({
    $and : [
        {age : {$ne : 15}},
        {age : {$lt : 35}}
    ]
}).project({
    age : 1
}).sort( { age : 1} )

db.test.find({
    $and : [
        {gender : "Female"},
        {age : {$ne : 15}},
        {age : {$lt : 35}}
    ]
}).project({
    age : 1,
    gender : 1
}).sort( { age : 1} )


// explicit Or

db.test.find({
    $or : [
        {gender : "Female"},
        {age : {$ne : 15}},
        {age : {$lt : 35}}
    ]
}).project({
    age : 1,
    gender : 1
}).sort( { age : 1} )

db.test.find({
    $or : [
        {interests : "Cooking"},
        {interests : "Gaming"}
    ]
}).project({
    interests : 1
})

db.test.find({
    $or : [
        {"skill.name" : "KOTLIN"},
        {"skills.name" : "PYTHON"}
    ]
}).project({
    "skills.name" : 1
})

//implicit or

db.test.find({
    "skills.name" : {$in : ["KOTLIN", "PYTHON"] } 
}).project({
    "skills.name" : 1
})