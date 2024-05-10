// $exists, $type , $size

// $exists

db.test.find({age : {$exists : true}})

db.test.find({ phone : {$exists : false}})