const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = app.listen(3000, () => console.log('Server started on http://localhost:3000'));
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', ws => {
    console.log('Player connected');
    ws.on('message', message => {
        console.log('Received: %s', message);
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
