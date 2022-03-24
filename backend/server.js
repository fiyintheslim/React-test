const express = require("express");
const {Server} = require("socket.io")

const app = express();
app.get("/", (req, res)=>{
    console.log("Getting user")
    return res.send("Home screen")
})
const server = app.listen(5050, ()=>{
    console.log("App started")
})

const io = new Server(server);

<<<<<<< HEAD
io.on("connection", (socket) => {
  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);
  });
});
=======
io.on("connection", (socket)=>{
  console.log("user connected");

  socket.on("message", (data) => {
    console.log("message received", data);
  });
})
>>>>>>> 0fa616afb63dc4599ae6018ed6ca96a631691a8d
