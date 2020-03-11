import { handleMessageNotice } from "./chat";
const socket = io("/");

function sendMessage(message) {
  socket.emit("clientMessage", { message });
  console.log(`You: ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
  console.log(`Your nickname is ${nickname}`)
}

socket.on("messageNotice", handleMessageNotice);