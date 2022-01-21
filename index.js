const WebSocket = require('ws')

const PORT = 5000
const wsServer = new WebSocket.Server({ port: PORT })

wsServer.on('connection', function (socket) {
    console.log('a client just connected');

    socket.on('message', function (msg) {
        console.log('received message from client: ' + msg)
        // socket.send('[Server] : ' + msg)

        wsServer.clients.forEach(function (client) {
            client.send('a client said : ' + msg)
        })
    })
})

console.log(new Date().toString() + ' server is listening on port ' + PORT);
