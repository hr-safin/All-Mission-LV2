//$elemMatch operator --> The $elemMatch operator in MongoDB is used to filter documents based on conditions within an array field.

db.products.find({
    tags: { $elemMatch: { category: "electronics" } }
  })