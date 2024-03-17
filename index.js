const url = require('url');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else if (pathName === '/about') {
    fs.readFile('./about.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else if (pathName === '/contact-me') {
    fs.readFile('./contact-me.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else {
    fs.readFile('./404.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }
});

server.listen(8080);
