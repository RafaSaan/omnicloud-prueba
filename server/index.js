import express from "express";
import http from "http";
// import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
// import { resolve, dirname } from "path";

// import { PORT } from "./config.js";
import cors from "cors";

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
const PORT = 3000;

// Middlewares
// app.use(cors());
// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: false }));

// app.use(express.static(resolve("frontend/dist")));

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (body) => {
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(8),
    });
  });
});

server.listen(PORT);
console.log(`server on port ${PORT}`);