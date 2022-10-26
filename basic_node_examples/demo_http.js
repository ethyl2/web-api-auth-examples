var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World Today! ' + req.url); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


// to start the server, in the terminal, type
// node demo_http.js
// To stop the server, control-C