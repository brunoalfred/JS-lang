
var sum = function (a = 2, b = 2) {
    return a + b;
}

function displayResult(fun) {
    return fun();
    
}

// const a = 3;
// const b = 2;

console.log(displayResult(sum()));