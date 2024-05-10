// $exists, $type , $size

// $exists

db.test.find({age : {$exists : true}})

db.test.find({ phone : {$exists : false}})

db.test.find({unknown : {$exists : false}})
db.test.find({ company : {$exists : true}})


// $type operator

db.test.find({ age : {$type : "string"}})

db.test.find({ age : {$type : "number"} })