const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: 'Um titulo qualquer',
    conteudo: 'aisudhlisdjflsajdf'
})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobreNome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: 'Kaio',
    sobreNome: 'Silva',
    idade: 24,
    email: "teste@teste.com"
})