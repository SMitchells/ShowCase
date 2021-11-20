var http = require('http');

var openServer = http.createServer((req, res) => {

    var categoria = req.url

    categoria = categoria.replace('/', '')

    if(categoria == 'tecnologia'){
        res.end('<html><body>Noticias de Técnologia</body></html>');
    }else if(categoria == 'moda'){
        res.end('<html><body>Noticias de Moda</body></html>');
    }else if(categoria == 'beleza'){
        res.end('<html><body>Noticias de beleza</body></html>');
    }else{
        res.end('<html><body>Portal de Noticias</body></html>');
    }
});

console.log('On-line...')
openServer.listen(3000)