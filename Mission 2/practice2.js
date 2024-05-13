// MongoDb practice

// $eq --> equality operator

db.test.find(
    {
        age : {$eq : 20}
    }
)

// $gt --> greater than

db.test.find({
    age : {
        $gt : 20
    }
})

// $gte --> greater than or equal to

db.test.find({
    age : {
        $gte : 20 
    }
})

// $le --> less than

db.test.find({
    age : {
        $lt : 20
    }
})

// $lte --> less than or equal to 

db.test.find({
    age : {
        $lte  :  22
    }
})

//$ne --> not equal to

db.test.find({
    age : {
        $ne : 17
    }
})