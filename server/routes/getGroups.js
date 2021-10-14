module.exports = function (db, app, ObjectID) {
  // Route to get a user from the database.

  app.post('/groups/index', function (req, res) {
    objectid = new ObjectID(req.body.userId); // Create a new ObjectID using the request body (which was just an id).
    const collection = db.collection('groups'); // Set collection to groups

    // Query mongodb
    collection.find({ members: objectid }).toArray((err, data) => {
      res.send(data);
    })
  })
}
