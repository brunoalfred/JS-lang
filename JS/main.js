function responceFunc() {

    function myFunction() {
        var message, x;
        message = document.getElementById('demo');
        message.innerHTML = "";
        x = document.getElementById("sample").innerHTML;

        try {
            if (x == "Do") throw "no true";

        }

        catch (err) {
            document.getElementById("sample").innerHTML = err;
        }

    }
}