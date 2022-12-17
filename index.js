const http = require('http');

require('dotenv').config();

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Sample Response');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});