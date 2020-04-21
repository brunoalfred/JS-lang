// Using the custome http module for Nodejs
const http = require('http');
const port = process.env.PORT;



http.createServer((req, res) => {
    
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    
});


