/***************
 * Rename File: If you want, create a file called "merrychristmas.txt" in the same folder as this file.
 * Otherwise, this file will create it for you.
 * Then run this file and you should see the file renamed to "feliznavidad.txt"
 * node basic_node_examples/demo_renamefile.js
 * then refresh localhost:8080
 * Control + C to stop the server
 * 
 */


const http = require('http')
const fs = require('fs')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("Merry Christmas")
    fs.writeFile('basic_node_examples/merrychristmas.txt', 'Ho ho ho!', function (err) {
        if (err) throw err
        console.log('Created file!')
      });

    const path = 'basic_node_examples/merrychristmas.txt'
    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            console.log('File does not exist')
            console.error(err)
            return
        } else {
            console.log('File exists')
        }
        fs.rename('basic_node_examples/merrychristmas.txt', 'basic_node_examples/feliznavidad.txt', function (err) {
            if (err) throw err
            console.log('File Renamed!')
            return
        })
    })

    // res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(" Feliz Navidad")
    res.end();
}).listen(8080)