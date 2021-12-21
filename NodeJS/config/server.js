var express = require('express'); //Contem a referencia da função express

var app = express(); // executa a função.

//app.set('views', './views');
app.set('view engine', 'ejs'); //Muda o renderizador de views
app.set('views', './app/views'); //Muda o caminho da pasta de views

module.exports = app;