module.exports = {
    connect: function(io, PORT, database) {
        io.on('connection', (socket) => {
            // WHEN A CONNECTION REQUEST COMES IN OUTPUT TO THE SERVER CONSOLE
            console.log('User connection on port ' + PORT + ' : ' + socket.id);
            
            socket.on('databaseRequest', () => {
                io.emit('database', database);
                console.log(database);
                console.log('Sent database!');
            })
        });

    },
}