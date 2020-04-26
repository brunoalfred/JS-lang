const express = require('express');
const fs = require('fs');



// the variable for port number
const port = process.env.PORT || 3000;
// create the app
const app = express();

//  setting up the route 
app.get('/', (req, res, next) => {
    fs.readFile('public/index.html', (err, buffer) => {
        var html = buffer.toString();
        res.send(html)  });

})


app.listen(port, () => console.log(
    `server running at port ${port}`
));

