const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    
    const urlRequest = url.parse(req.url, true);

    const path = urlRequest.pathname;
    console.log(path);

    
    res.end('Hello World')})

server.listen(3000, () => {
    console.log(`Server listening on Port: 3000` );
})
