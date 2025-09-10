import { Sequelize } from "sequelize";
const sequelize = new Sequelize("teste", 'root', "Braian1107", {
    host: "localhost",
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// Postagem.sync({ force: true });

/* Postagem.create({
    titulo : "Elias várzea",
    conteudo : "varzeirinhoooo"
}) */

const Usuarios = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// Usuarios.sync({ force: true });

/* sequelize.authenticate().then(() => {
    console.log("Conectado");
}).catch((erro) => {
    console.log("erro de conexão :" + erro);
}) */