#!/usr/bin/env node

const http = require('http');
const addr  = '127.0.0.1';
const port = 8080;

console.log(`start listening on ${addr}:${port}`);
console.log(`try 'open http://${addr}:${port}'`)

http.createServer((req, res) => {
  res.writeHead(302, {'Location': 'dict:/biriyani'});
  res.end();
}).listen(port, addr);

