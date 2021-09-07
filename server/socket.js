

module.exports = {
    connect: function(io, PORT) {
        io.on('connection', (socket) => {
            // WHEN A CONNECTION REQUEST COMES IN OUTPUT TO THE SERVER CONSOLE
            console.log('User connection on port ' + PORT + ' : ' + socket.id);

            // When a message comes in emit it back to all sockets wit hthe message.
            socket.on('message', (message)=>{
                io.emit('message',message);
            })
        });
    }
}