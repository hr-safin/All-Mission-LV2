// mongodb practice

//1. Find all documents in the collection where the age is greater than 30, and
// only return the name and email fields.

db.test.find( {
    age : {
        $gt : 30
    }
}).project( {name : 1, email : 1 } )

//2. Find documents where the favorite color is either "Maroon" or "Blue."

db.test.find({
    $or : [
        { favoutiteColor : "Maroon" },
        { favoutiteColor : "Blue" },
    ]
})

//3. Find all documents where the skill is an empty array.

db.test.find({
    skills : {
        $size : 0
    }
})

// alternative 

db.test.find({
    skills : {
        $exists : true,
        $eq : []
    }
})