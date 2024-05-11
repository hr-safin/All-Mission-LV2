// update 
// $set ---> the set operator replaces the value of a field with the specified value
db.products.updateOne(
    { "_id" : ObjectId("6406ad65fc13ae5a400000bf")},
    { $set:
       {
         age : 54
       }
    }
 )