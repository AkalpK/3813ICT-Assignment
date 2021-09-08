const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});
const sockets = require('./socket');
const server = require('./listen');
const fs = require('fs');

// Read JSON file
var database = require('./database.json');

//Define port used for the server
const PORT = 3000;
//Apply express middleware
app.use(cors());
//Setup socket
sockets.connect(io, PORT, database);

// Start server listening for requests.
server.listen(http, PORT);