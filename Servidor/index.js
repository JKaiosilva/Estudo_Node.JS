const express = require('express');
const req = require('express/lib/request');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize')


//config
    // Template Engine
    const hbs = handlebars.create({defaultLayout: "main"})
    app.engine("handlebars", () => hbs)
    app.set("view engine", "handlebars")

    // Conexão com o banco de dados Mysql    
        const sequelize = new Sequelize('teste', 'root', '1234', {
            host: "localhost",
            dialect: 'mysql'
        })

    // Rotas

    app.get('/cad', function(req, res) {
        res.send('Rota de Cadastro de posts')
    })



app.listen(8081, function() {
    console.log('Servidor Rodando na url http://localhost:8081')
});