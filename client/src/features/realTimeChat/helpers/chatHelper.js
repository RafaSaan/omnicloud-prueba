import { socket } from "@/socket";


export const sendMessageHelper = message => {
  socket.timeout(5000).emit("message", message);
}
export const getMessagesHelper = () => {
}