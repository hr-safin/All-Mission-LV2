// delete a document

db.test.deleteOne({ _id: ObjectId("6406ad63fc13ae5a40000066") });


// create collection

db.createCollection("posts")

// drop collection
db.collection_name.drop()