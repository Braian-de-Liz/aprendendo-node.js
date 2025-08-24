import http from 'http';

http.createServer((req, res) => {
    res.end("olá");
}).listen(8082);

console.log("O servidor ta funcionando ");