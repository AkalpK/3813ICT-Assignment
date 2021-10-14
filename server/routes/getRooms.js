module.exports = function (db, app) {
  // Route to get a user from the database.

  app.post('/rooms/index', function (req, res) {
    userObjectId= new ObjectID(req.body.userId); // Create a new ObjectID for user id
    groupObjectId = new ObjectID(req.body.groupId); // Create a new ObjectID for group id
    const collection = db.collection('rooms'); // Set collection to groups

    // Query mongodb
    collection.find({ belongsTo: groupObjectId, accessibleTo: [userObjectId]}).toArray((err, data) => {
      res.send(data);
    })
  })
}
