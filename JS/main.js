function responceFunc() {
    
    var statement = 'This is Google';
    var newStatement = statement.replace(/google/i, "Apple")

    document.getElementById("demo").innerHTML = newStatement;
}