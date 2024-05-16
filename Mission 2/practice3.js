//$elemMatch operator --> The $elemMatch operator in MongoDB is used to filter documents based on conditions within an array field.

db.products.find({
    tags: { $elemMatch: { category: "electronics" } }
})
db.products.find({
    tags: { $elemMatch: { category: "electronics" } }
})

// $addToSet operator --> 

db.collection.update(
    { _id: "id" },
    { $addToSet: { item : "h" } }
  )

// $set --> $set operator is a fundamental tool for updating and creating fields within documents.

db.collection.update(
    { _id: "3434" }, 
    { $set: { age: 23 } }
  )

// $Type --> The $type operator in MongoDB is a query operator used to filter documents based on the data type of a specific field.



db.users.find({
  age : {
    $type : "double"
  }
})

