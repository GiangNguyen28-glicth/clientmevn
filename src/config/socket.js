import SocketIO from "socket.io-client";
const socket = SocketIO("https://servermevn.herokuapp.com/",{ transports : ['websocket'],autoConnect:false, upgrade: false});
export default socket;