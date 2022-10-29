
// The fs.open() method takes a "flag" as the second argument, 
// if the flag is "w" for "writing", the specified file is opened for writing. 
// If the file does not exist, an empty file is created
var http = require('http')
var fs = require('fs')
http.createServer(function (req, res) {
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Opened or created file!');
      });

    /*
    The fs.writeFile() method replaces the specified file and content if it exists.
    If the file does not exist, a new file, containing the specified content, will be created.
    */  

    fs.writeFile('mynewfile2.txt', 'Greetings from Greedy Gravy Goblins!\n\n ', function (err) {
        if (err) throw err;
        console.log('New content & saved!');
      });

    fs.readFile('mynewfile2.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
}).listen(8080)