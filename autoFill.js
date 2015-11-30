var cookieFNameValue;
var cookieLNameValue;
var cookieEmailValue;
var cookieMessageValue;
var escape;

function WriteCookie() {
    "use strict";
    if (document.conForm.firstname.value === "" && document.conForm.lastname.value === "" && document.conForm.email.value === "" && document.conForm.message.value === "") {
        alert("Enter some value!");
        return;
    }
    var now = new Date();
    now.setMonth(now.getMonth() + 1);
    
    cookieFNameValue = escape(document.conForm.firstname.value) + ";";
    cookieLNameValue = escape(document.conForm.lastname.value) + ";";
    cookieEmailValue = escape(document.conForm.email.value) + ";";
    cookieMessageValue = escape(document.conForm.message.value) + ";";
    document.cookie = "Fname=" + cookieFNameValue;
    document.cookie = "Lname=" + cookieLNameValue;
    document.cookie = "email=" + cookieEmailValue;
    document.cookie = "message=" + cookieMessageValue;
    document.write("Setting Cookies : " + "Fname=" + cookieFNameValue + "Lname=" + cookieLNameValue + "email=" + cookieEmailValue + "message=" + cookieMessageValue);
    
}
