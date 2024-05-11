// update 
// $set ---> the set operator replaces the value of a field with the specified value
db.test.updateOne(
    { "_id" : ObjectId("6406ad65fc13ae5a400000bf")},
    { $set:
       {
         age : 54
       }
    }
 )

 db.test.updateOne(
    { "_id" : ObjectId("6406ad65fc13ae5a400000bf")},
    {
        $set : {
            gender : "Male",
            company : "Programming Hero",
            interests : ["Gaming"]
        }
    }
 )


 // $addToSet -- > 

 db.test.updateOne(
    { "_id" : ObjectId("6406ad65fc13ae5a400000bf")},
    {
        $addToSet : {
            interests : { $each :  ["Cokking", "Pubg"] 
        }
     },
    }
 )