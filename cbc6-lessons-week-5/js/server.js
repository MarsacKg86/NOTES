const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;

var htmlFile;
fs.readFile("../404.html", function(err, data){
    htmlFile = data;
});

const server = http.createServer(function(request, response){
    response.setHeader('Content-Type', 'text/html');
    response.write(htmlFile);
    response.write("<h1>This code comes from response.write() </h1>");
    response.write("<h1>This code comes from response.write() </h1>");
    response.write("<h1>This code comes from response.write() </h1>");
    response.end();
});

server.listen(port, function(){
    // console.log("listening on port: " + port);
    console.log(`listening on port: ${port}`);
});


var address = 'http://localhost:8080/index.html?year=2017&month=february&day=26';
var query = url.parse(address, true);

console.log(query.host); //returns 'localhost:8080'
console.log(query.pathname); //returns '/default.htm'
console.log(query.search); //returns '?year=2017&month=february'

var queryData = query.query; //returns an object: { year: 2017, month: 'february' }
console.log(queryData.day); //returns 'february'

