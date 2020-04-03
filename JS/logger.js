var url = 'http://mylogger.io/log'

function log(message) {
    // send http
    console.log(message)
}

module.exports.log = log;
console.log(module);