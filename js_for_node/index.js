const path = require('path');
const fs = require('fs');


// For the file_name
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err ;
    console.log('Folder created... ');
})
