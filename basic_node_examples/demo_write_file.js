var http = require('http')
var fs = require('fs')
http.createServer(function (req, res) {
    /*
    The fs.writeFile() method replaces the specified file and content if it exists.
    If the file does not exist, a new file, containing the specified content, will be created.
    */  

    fs.writeFile('mynewfile3.txt', 'Welcome from the Weedy Whispering Wonderful Witches!\n', function (err) {
        if (err) throw err;
        console.log('New content & saved!');
      });

    fs.readFile('mynewfile3.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
}).listen(8080)