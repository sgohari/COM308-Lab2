const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//creational design patter or factory desing pattern
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Baby steps towards NodeJs\n\tSyed Nasir Gohary\n\t\t300937424\n\n\t\t\tSee You Next Saturday');
  
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  