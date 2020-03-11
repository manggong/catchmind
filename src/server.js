import express from "express";
import path from "path";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname,'views'));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'static')))

app.get("/", (req, res)=>{res.render("home")});


const handelListening = () => 
console.log(`server listening ${PORT}`);

const server = app.listen(PORT, handelListening);

const io = socketIO.listen(server);

io.on("connection", (socket)=>{
    socket.on("clientMessage", ({message}) => {
        socket.broadcast.emit("messageNotice", {message, nickname:socket.nickname || "Hwan"})
    })
    socket.on("setNickname", ({nickname})=>{
        socket.nickname = nickname;
    })
})