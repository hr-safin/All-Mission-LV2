//$elemMatch operator --> The $elemMatch operator in MongoDB is used to filter documents based on conditions within an array field.

db.products.find({
    tags: { $elemMatch: { category: "electronics" } }
})
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

// $Size --> $size allows you to filter documents based on the number of elements present within a specific array field. 
// $Size --> Within the aggregation pipeline stages, $size returns the total number of elements in an array produced by a preceding stage.

db.users.find({
  items : {
    $size : 2
  }
})

//$exists --> The $exists operator in MongoDB is used to check for the existence (or absence) of a field within a document.

db.users.find({
  age : {
    $exists : true
  }
})

//Pop --> The $pop operator in MongoDB is used to remove elements from an array field within a document.

db.users.updateOne(
  {id :  1223},
  {$pop : {items : -1}}
)

//pull --> The $pull operator in MongoDB is a versatile tool for removing elements from arrays within documents.

db.users.updateOne(
  {id : 234214},
  {$pull : {items : {product_id : 23423}}}
)

// pullAll --> the $pullAll operator is specifically designed to remove all occurrences of specified values from an array field within a document.

db.users.updateOne(
  {id : 342},
  {$pullAll : {languages : ["Bangla","English"]}}
)

//How to drop collection

db.users.drop()
