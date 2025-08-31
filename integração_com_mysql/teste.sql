CREATE DATABASE teste_de_usuario;


use teste_de_usuario;
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);


INSERT INTO usuarios(nome, email, idade) VALUES(
    "Elias Tino",
    "emailElias@gmail.com",
    18
);

SELECT * FROM usuarios WHERE idade = 22;
