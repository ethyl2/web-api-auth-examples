const uc = require('upper-case')

const http = require('http')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(uc.upperCase("Merry Christmas!"))
    res.end()
}).listen(8080)
