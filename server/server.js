// Use Express
const express = require('express');

// Instantiate Express server
const app = express();

// Use CORS
const cors = require('cors');

const http = require('http').Server(app);

// Use socket.io and set CORS policy
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
});

// Use socket.js script
const sockets = require('./socket');

// Use listen.js script
const server = require('./listen');

// Use Bodyparser
const bodyParser = require('body-parser');

// Use MongoDB
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Database variable
const dbName = 'AssignmentPhaseTwo';

// Collections
const usersCol = 'users';
const groupsCol = 'groups';
const roomsCol = 'rooms';

// MongoDB URL
const url = 'mongodb://localhost:27017';

// Define port used for the server
const PORT = 3010;

// Apply express middleware
app.use(cors());

// Use bodyparser for json
app.use(bodyParser.json());

MongoClient.connect(url,  function (err, client) {
  if (err) { return console.log(err) }
  const db = client.db(dbName);

  require('./routes/getAllUsers')(db, app);
  require('./routes/getGroups')(db, app, ObjectID);
  require('./routes/getRooms')(db, app, ObjectID);
});

// Start server listening for requests.
server.listen(http, PORT);
