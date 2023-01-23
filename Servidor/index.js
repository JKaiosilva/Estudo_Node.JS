const express = require('express');
const req = require('express/lib/request');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')


//config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body Parser
    app.use(express.json())
    app.use(express.urlencoded({extended: true}));
    
  

    // Rotas

    app.get('/', function(req, res) {
        Post.findAll({order: [['id', 'desc']]}).then(function(posts) {
        res.render('home', {posts: posts})
        })
    })


    app.get('/cad', function(req, res) {
        res.render('formulario')
    })


    app.post('/add', function(req, res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function() {
            res.redirect('./')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
    })

    app.get('/deletar/:id', function(req, res) {
        Post.destroy({where: {'id': req.params.id}}).then(function() {
            res.send('Postagem deletada')
        }).catch(function(erro) {
            res.send("Essa postagem não existe")
        })
    })

app.listen(8081, function() {
    console.log('Servidor Rodando na url http://localhost:8081')
});