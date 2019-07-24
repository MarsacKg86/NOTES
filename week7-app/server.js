var http = require('http');

var PORT = 5500;
var server = http.createServer((request, response) => {

});

server.listen(PORT, () => console.log('server is listening on port {5500}'));
