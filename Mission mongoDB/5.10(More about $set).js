// more about $set 


db.test.updateOne(
     {_id : ObjectId("6406ad65fc13ae5a400000bf")},
     {
        $set : {
            "address.street" : "Road 1, block b, house no 17",
            "address.city" : "Mohanagar Project Rampura, Dhaka",
            "address.country" : "Bangladesh"
        }
     }
)

// update an property of array of object in mongodb

db.test.updateOne(
    {
        _id : ObjectId("6406ad65fc13ae5a400000bf"),
        "education.major" : "Communications",
    },
    {
        $set : {
            "education.$.major" : "CSE",
        }
    }
)

// increment in mongo db

db.test.updateOne(
    {
        _id : ObjectId("6406ad63fc13ae5a40000065"),
    },
    {
        $inc : {
            age : 1
        }
    }
)