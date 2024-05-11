// $unset --> this operator used to delete a particular field

// remove the age field using unset operator
db.test.updateOne(
    {_id : ObjectId("6406ad65fc13ae5a400000bf")},
    {
      $unset : {age : ""}
    }
)