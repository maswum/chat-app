const WebSocket = require('ws');

// Create a new WebSocket server
const wss = new WebSocket.Server({ port: 8080 }); // Change the port number as needed

// Event listener for new connections
wss.on('connection', (ws) => {
  // Event listener for receiving messages from clients
  ws.on('message', (message) => {
    // Handle the received message here
    console.log('Received message:', message);

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

console.log('WebSocket server is running on port 8080'); // Change the port number as needed
