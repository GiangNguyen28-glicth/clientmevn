import SocketIO from "socket.io-client";
const socket = SocketIO("https://servermevn.vercel.app/",{ transports : ['websocket'],autoConnect:false, upgrade: false});
export default socket;