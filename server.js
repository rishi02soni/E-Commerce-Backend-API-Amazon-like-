const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const socketHandler = require("./socket/socket");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

socketHandler(io);

app.get("/", (req, res) => res.send("Chat API Running"));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
