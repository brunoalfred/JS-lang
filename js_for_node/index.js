const express = require('express');
const fs = require('fs');



// the variable for port number
const port = process.env.PORT || 3000;
// create the app
const app = express();

//  setting up the route 
app.route('/', (req, res, next) => {
   fs.readFile('index.html', (err,))
})


