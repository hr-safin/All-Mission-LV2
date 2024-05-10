// $In --> The $in operator selects the documents where the value of a field equals any value in the specified array.

// find all the data less than 18 :
db.test.find({ age: { $lt: 18 } }, { age: 1 }); // ---> field filtering for specific data

// find all the data greater than 18 and less than 30 :
db.test.find({ age: { $gt: 18, $lt: 30 } }, { age: 1 }).sort({ age: 1 }); // implicit and
db.test
  .find({ gender: "Female", age: { $gt: 18, $lt: 30,} }, { age: 1, gender: 1 })
  .sort({ age: 1 }); // implicit and
db.test
  .find({ gender: "Female", age: {$in : [18,20,22,24,26,28,30]} }, { age: 1, gender: 1 })
  .sort({ age: 1 }); // implicit and
