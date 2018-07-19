'use strict'
var attempt = 3;
var i = 0;

function validate() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    while (i < data.length) {
        if (username == data[i].login && password == data[i].pass) {
            alert("Login successfully");
            if (username == "admin") {
                alert("Logged as admin! Be carefull!!!")
            }
            attempt = 3;
            window.location.replace("http://google.com");
            return false;
        }
        else {
            attempt--;
            alert("You have left " + attempt + " attempt");
            if (attempt == 0) {
                document.getElementById("user").disabled = true;
                document.getElementById("pass").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
        }
    }
}

var data;
var request = new XMLHttpRequest();
request.open('GET', 'scripts/base.json', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        data = JSON.parse(request.responseText);
        console.log(data[1].login);
    }
};

request.send();

console.log(data);
