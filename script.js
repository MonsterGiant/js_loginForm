'use strict'
var attempt = 3;
function validate(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if ( username == "NERO" && password == "nero_123"){
        alert ("Login successfully");
        return false;
    }
    else{
        attempt --;
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0){
            document.getElementById("user").disabled = true;
            document.getElementById("pass").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
