const http = require('http');
const port = 3000;
const url = '127.0.0.1';

http.createServer(function(request, response) {
    console.log('server was created');
}).listen(port, url, function() {
    console.log('start listening on port ' + port);
});