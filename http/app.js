import http from 'http';
import { send } from 'process';

http.createServer((req, res) => {
    res.send("Bom Dia meu amigo");
    
}).listen(8084);

console.log("O servidor ta funcionando ");

//teste de commit e git add
