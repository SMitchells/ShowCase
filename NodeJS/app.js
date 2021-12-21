var app = require('./config/server');

var rotaHome = require('./app/routes/home')
rotaHome(app)

var rotaNoticias = require('./app/routes/noticias')
rotaNoticias(app)

var rotaAddNoticias = require('./app/routes/formulario_inclusao_noticia')
rotaAddNoticias(app)




app.listen(3000, () => {
    console.log('Servidor rodando com express...')
    console.log('Sendo reiniciado automaticamente com nodemon...')
});