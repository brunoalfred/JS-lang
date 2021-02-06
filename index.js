const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');




const server = http.createServer((req, res) => {

    const urlRequest = url.parse(req.url, true);
    const headers = req.headers;
    const queryString = req.queryString;
    const method = req.method.toLowerCase();
    const path = urlRequest.pathname;

    const decorder = new StringDecoder('utf-8');
    var buffer = ''

    req.on('data', (data) => {
        buffer += decorder.write(data);
    })

    req.on('end', () => {
        buffer += decorder.end();

        var chosenHandler = typeof(router[path] !== 'undefined') ? router[path] : handlers.notFound;
        
        var data = {

            'path' : path ,
            'method' : method,
            'queryString' : queryString,
            'headers': headers,
            'payloads': buffer,


        }




        res.end('Hello World');
        console.log(path);
    })


});





server.listen(3000, () => {
    console.log(`Server listening on Port: 3000`);
})

var handlers = {};

handlers.sample = (data, callback) => {

    callback(406, {'name': 'sample handlers'})

}

handlers.notFound = (data, callback) => {
callback(404)
}


var router = {
    'sample': 'handlers.sample'
}