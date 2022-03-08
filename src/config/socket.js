import SocketIO from "socket.io-client";
const socket = SocketIO("http://localhost:3000",{ transports : ['websocket'],autoConnect:false, upgrade: false});
export default socket;