//let http = require('http');
import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello world');
}).listen(8080);
