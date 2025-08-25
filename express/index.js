import express from "express";
const app = express();


app.get("/", (req, res) => {
    res.send("Bom Dia meu amigo");
});

app.get("/sobre", (req, res) => {
    res.send("Minha pagina sobre");
});

app.get("/blog", (req, res) => {
    res.send("Bem-vindo ao meu blog");
});

app.get("/ola/:cargo/:nome", (req, res) => {
    res.send(  req.params );

});

app.listen(8082, () => {
    console.log("Rodando");
});
