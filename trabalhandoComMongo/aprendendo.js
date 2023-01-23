const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/aprendendo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
  .then(() => {
    console.log("Mongo conectado...");
  })
  .catch((err) => {
    console.log("Deu erro aqui ó: " + err);
  });



//mongoose.connect('mongodb://localhost/aprendendo', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> {
//    console.log('MongoDB conectado')
//}).catch((err)=> {
 //   console.log('Erro ao se conectar: ' + err)
//})

