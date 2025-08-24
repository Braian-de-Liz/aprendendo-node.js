import http from 'http';

http.createServer((req, res) => {
    res.end("gozemo");
}).listen(8082);

console.log("O servidor ta funcionando gozadinha zozaaaaa");