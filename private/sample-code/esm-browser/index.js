const http = require('http')
const fs = require('fs')

var server = http.createServer(function(req, res) {
  res.writeHead(200)
  fs.createReadStream('index.html').pipe(res) // Why should be stream?
})

server.listen(3000, function () {
    console.log('Server listen on port 3000')
})