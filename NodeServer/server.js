const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3001 });
console.log("Signaling server running on ws://localhost:3001");

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    let data;
    try {
      data = JSON.parse(message);
    } catch (e) {
      console.error("Invalid JSON", e);
      return;
    }

    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

