module.exports = function (db, app) {
  // Route to get a user from the database.

  app.get('/users/index', function (req, res) {
    const collection = db.collection('users');
    collection.find({}).toArray((err, data) => {
      res.send(data);
    })
  })
}
