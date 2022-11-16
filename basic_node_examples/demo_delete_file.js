// Make sure that mynewfiletodelete.txt exists first

// To delete a file with the File System module,  use the fs.unlink() method.

// The fs.unlink() method deletes the specified file:

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.unlink('mynewfiletodelete.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
}).listen(8080);


