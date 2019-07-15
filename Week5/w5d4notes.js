/*Node Web Server
- const means variable
- => means anonymous function()
- port 8080 is a good OPEN port. *if you do more than 1 web server you'd need to find another OPEN port # for each server.
myServer.js*/
const PORT = 8080;
const server = http.createServer((request, response) => {
});
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
//Great, now if we run this with node, we’ll have our server up.
 node myServer.js
/*Except theres a problem. If we tried to connect or make any type of requests to the server, nothing would happen because right now we aren’t responding on any requests.*/
http.createServer((request, response) => { 
  response.end('Hello!');
});
//Now when ever we make any request to our server, we will get back “Hello!”
//response.end is an agrument that means once everything has run, stop.
/*
This is great, be we want to execute different actions based on the type of request method we get. Inside the request object, we can grab the url and method properties to determine what we want to respond with.
*/
http.createServer((request, response) => { 
  if (request.url === "everything after the domain/blah/blah/blah") {
    if (request.method === "GET") {
      // some GET response
    } else if (request.method === "POST") {
      // some POST response
    } else {
      // others... (PUT, DELETE, etc...)
    } 
  } else {
    // any other route...
  }
});
/*We can also use the writeHead function to add extra information in our response.
*/
http.createServer((request, response) => {  
    if (response.method === "POST") { 
      response.writeHead(201);
      // response back with data
    }
  });
 /*Awesome! Now we have dove a little bit into how to use the http module and have created a server without express.
 
 -response.writeHead() sends a response header to the request. The status is a 3-digit HTTP status code, like 404. Optionally one can give a hunman-readble statusMessage as the second agrument. 
 Returns a reference to the ServerResponse, so that calls can be chained.
 */ 
const body = 'hello world';
response
  .writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);

/*Check out GitHub and see Saleem's server.js

Node url module
check out www.w3schools.com/nodejs/nodejs_url.asp
*/  
