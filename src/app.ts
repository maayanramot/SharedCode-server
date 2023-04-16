import express from "express";
const app = express();
import http from 'http'
import { Server } from "socket.io"
import cors from "cors"

 app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "https://sharedcode.onrender.com",
        methods: ["GET", "POST"],   
    },
});

io.on("connection", (socket)=> {
console.log(`User Connected: ${socket.id}`);

socket.on("send_message", (data)=>{
    socket.broadcast.emit("receive_message", data)
})
})

import bodyParser from "body-parser"
import { connectToDB } from "./connection";
import router from "./routes";

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(router)

server.listen(8000, () => console.log("Listening on https://sharecode-server.onrender.com"));
connectToDB()
