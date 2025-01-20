const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('A user connected.');
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Broadcast the message to all clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('A user disconnected.');
    });
});

server.listen(8080, () => {
    console.log('WebSocket server is running on ws://localhost:8080');
});
