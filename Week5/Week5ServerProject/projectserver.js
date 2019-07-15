var http = require('http');
var PORT = 8080;

var { Router } = require('./route.js');

var server = http.createServer( function (request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(Router(request));
    response.end();
});

// var { defaultResponse } = require('./response.js');


server.listen(PORT, () => console.log('server is listening on port {8080}'));

