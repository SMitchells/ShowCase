var express = require('express'); //Contem a referencia da função express

var app = express(); // executa a função.

//app.set('views', './views');
app.set('view engine', 'ejs'); //Muda o renderizador de views

app.get('/', (req, res) => {
    res.render('home/index')
});

app.get('/formulario_inclusao_noticia', (req, res) => {
    res.render('admin/form_add_noticia')
});

app.get('/noticias', (req, res) => {
    res.render('noticias/noticias')
});

app.listen(3001, () => {
    console.log('Servidor rodando com express...')
    console.log('Sendo reiniciado automaticamente com nodemon...')
});