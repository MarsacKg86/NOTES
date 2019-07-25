var http = require('http');
var url = require('url');




var server = http.createServer(function (request, response) {
        response.setHeader('Access-Control-Allow-Origin', '*');
       
        // var filePath = '.' + parseUrl.pathname;
        var parseUrl = url.parse(request.url, true);
        
       

        
                
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Ta Da we're done! ");
        response.end();
        console.log(parseUrl.pathname);
        
    }); 

            

server.listen(8080, function () {
 console.log('server is listening');
});

