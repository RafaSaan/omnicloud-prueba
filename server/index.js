import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
const PORT = 3000;

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (body) => {
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(15),
    });
  });
});

server.listen(PORT);
console.log(`server on port ${PORT}`);