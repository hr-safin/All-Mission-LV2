// $exists, $type , $size

// $exists

db.test.find({age : {$exists : true}})

db.test.find({ phone : {$exists : false}})

db.test.find({unknown : {$exists : false}})
db.test.find({ company : {$exists : true}})


// $type operator

db.test.find({ age : {$type : "string"}})

db.test.find({ age : {$type : "number"} })
db.test.find({ friends : {$type : "array"} })

db.test.find({company : {$type : "null"}}).project({company : 1})


// $size operator

db.test.find({ skills : {$size : 0}}).project({ age : 1, "skills.name" : 1})