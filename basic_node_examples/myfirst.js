var http = require('http');
const dt = require('./myfirstmodule')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write("Good Evening World! The date and time are currently: " + dt.myDateTime())
  res.end();
}).listen(8080);