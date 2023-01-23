const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


// COnfig Mongoose

  mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://0.0.0.0:27017/aprendendo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,})
          .then(() => {
            console.log("Mongo conectado...");
        })
          .catch((err) => {
            console.log("Deu erro aqui ó: " + err);
        });

// Model - Usuários

const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require:true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  },
  pais: {
    type: String
  }
})


// Nomeando Collection

  mongoose.model('usuarios', UsuarioSchema)

  const Kaio = mongoose.model('usuarios')

  new Kaio({
    nome: "kaio",
    sobrenome: 'Silva',
    email: "teste@test.mail",
    idade: 24,
    pais: 'Brasil'
  }).save()
  .then(() => {
    console.log("Usuario salvo")
  })
  .catch((err) => {
    console.log("Erro " + err)
  })

