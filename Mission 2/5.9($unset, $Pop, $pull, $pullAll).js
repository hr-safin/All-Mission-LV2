// $unset --> this operator used to delete a particular field

// remove the age field using unset operator
db.test.updateOne(
    {_id : ObjectId("6406ad65fc13ae5a400000bf")},
    {
      $unset : {age : ""}
    }
)

// $pop --> it is used to remove last element of an array

// remove the last element from an array by using $pop

db.test.updateOne(
    {_id : ObjectId("6406ad65fc13ae5a400000bf")},
    {
        $pop : { friends : 1}
    }
)

// remove the first element from an array by using $pop

db.test.updateOne(
    {_id : ObjectId("6406ad65fc13ae5a400000bf")},
    {
        $pop : { friends : -1}
    }
)