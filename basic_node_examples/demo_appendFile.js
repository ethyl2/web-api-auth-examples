// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created.
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.appendFile('mynewfile1.txt', 'Hello from Happy Halloween Hobbits! ', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    fs.readFile('mynewfile1.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);