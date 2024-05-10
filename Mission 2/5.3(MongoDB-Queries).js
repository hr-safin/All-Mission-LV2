// $eq, $lt, $gt, $gte, $lte

// Find the all male gender from json data
db.test.find({gender : {$eq : "Male"}})


// find the age greater than or equal to 30 and sort by age 
db.test.find({age : {$gte : 30}}).sort({age : 1})

// find the age less than or equal to 30 and sort by age
db.test.find({age : {$lte : 30}}).sort({age : 1})


// find the age less than  to 30 and sort by age
db.test.find({age : {$lt : 30}}).sort({age : 1}) 