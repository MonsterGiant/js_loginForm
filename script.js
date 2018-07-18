'use strict'



/*var attempt = 3;

var users = XMLHttpRequest
function validate(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if ( username == 1){
        alert ("Login successfully");
        if (username == base.user2.login){
            alert("Logged as admin! Be carefull!!!")
        }
        attempt = 3;
        return false;
    }
    else{
        attempt --;
        alert("You have left " + attempt + " attempt");
        if( attempt == 0){
            document.getElementById("user").disabled = true;
            document.getElementById("pass").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}*/

var data;
var request = new XMLHttpRequest();
request.open('GET', 'scripts/base.json', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400){
        data = JSON.parse(request.responseText);
        console.log(data.users[1]);
    }
};

request.send();

