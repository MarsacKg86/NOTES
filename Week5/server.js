var http = require('http');

var PORT = 8080;
var server = http.createServer((request, response) => {

});

server.listen(PORT, () => console.log('server is listening on port {8080}'));
