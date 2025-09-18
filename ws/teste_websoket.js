// teste_websocket.js
import { WebSocketServer } from 'ws';  // ✅ Novo nome!
import 'dotenv/config';

const wss = new WebSocketServer({
    port: process.env.PORT || 8080
});

function menON() {
    console.log("menON");
}

function erroON() {
    
}

function conecacao(ws, req) {
    console.log("conectadelson");

    ws.on("menssage",);
}

wss.on('conectado', conecacao);

console.log(`Servidor WebSocket rodando na porta ${process.env.PORT || 8080}`);