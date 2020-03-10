const socket = io("/");

function sendMessage(message) {
  socket.emit("clientMessage", { message });
  console.log(`You: ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
  console.log(`Your nickname is ${nickname}`)
}

function handleMessageNotice(data) {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
}

socket.on("messageNotice", handleMessageNotice);