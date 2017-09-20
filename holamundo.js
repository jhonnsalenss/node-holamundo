var http = require('http');

var manejador = function(solicitud, respuesta) {
    console.log("Peticion recibida");
    respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);
// add
servidor.listen(8080);
