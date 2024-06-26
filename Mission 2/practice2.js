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
db.test.find({
    age : {
        $ne : 17
    }
})

// $in --> selects the document where value of a field equals any value in the specified array

db.test.find({
    age : { $in :
        [17,18,19,20,22,24,28]
    }
}).project({
    age : 1,
    gender : 1
}).sort( {age : -1})
db.test.find({
    age : { $in :
        [17,18,19,20,22,24,28]
    }
}).project({
    age : 1,
    gender : 1
}).sort( {age : -1})

// $nin --> specified field does not exists

db.test.find({
    age : {$nin : 
        [12,13,14,15,16,17,18,20,23,24]
    }
}).project({
    age : 1,
    gender : 1
}).sort( { age : 1})
db.test.find({
    age : {$nin : 
        [12,13,14,15,16,17,18,20,23,24]
    }
}).project({
    age : 1,
    gender : 1
}).sort( { age : 1})

//Logical Query Operator

//1. $and -->  A document is selected only if all specified conditions in the array are true

db.test.find({
    $and : [
        { age : {$gt : 20}},
        {gender : {$in : ["Male", "Female"]}}
    ]
}).project({
    age : 1,
    gender : 1
}).sort({
    age : 1
})
db.test.find({
    $and : [
        { age : {$gt : 20}},
        {gender : {$in : ["Male", "Female"]}}
    ]
}).project({
    age : 1,
    gender : 1
}).sort({
    age : 1
})

//2. $or --> A document is selected if any of the specified conditions in the array are true

db.test.find({
    $or : [
        {gender : "Male"},
        {gender : "Female"}
    ]
}).project({
    gender : 1,
    age : 1
})
db.test.find({
    $or : [
        {gender : "Male"},
        {gender : "Female"}
    ]
}).project({
    gender : 1,
    age : 1
})

//3. $not --> A document is selected only if the specified condition is false

db.test.find({
    $not : {
        age : {$gt : 17}
    }
}).project({
    age : 1
}).sort({
    age : 1
})
db.test.find({
    $not : {
        age : {$gt : 17}
    }
}).project({
    age : 1
}).sort({
    age : 1
})


//4. $nor --> A document is selected only if none of the specified conditions in the array are true. (Think of it as an "or" for NOT statements).

db.test.find({
    $nor : [
        {age : 17},
        {gender : "Male"}
    ]
})

// nor operator in depth --> the document must fail every conditions for it to be included in the result ( failed both condition)

db.test.find({
    $nor : [
        {age : 20},
        {gender : "Female"}
    ]
})
db.test.find({
    $nor : [
        {age : 20},
        {gender : "Female"}
    ]
})

