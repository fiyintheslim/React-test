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

io.on("connection", (socket)=>{
    console.log("user connected")
    socket.on()
})
