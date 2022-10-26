// The URL module is handy for splitting the query string into readable parts.

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = '<h1>' + q.year + " " + q.month + '</h1>'
  res.end(txt);
}).listen(8080);

// To run, in terminal, type:
// node demo_querystring.js
// and then visit a url that includes a year and a month in the query string,
// such as http://localhost:8080/?year=2017&month=July