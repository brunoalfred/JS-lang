
var sum = function (a = 2, b =2) {
    return a + b;
}

function displayResult(fun) {
    let answer = fun();
    console.log(answer);
}

// const a = 3;
// const b = 2;

displayResult(sum(a, b));