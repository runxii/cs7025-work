document.cookie = "test1=Hello; SameSite=None; Secure";
document.cookie = "test2=World; SameSite=None; Secure";

const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("test2="))
    ?.split("=")[1];

function showCookieValue() {
    const output = document.getElementById("cookie-value");
    output.textContent = `> ${cookieValue}`;
}

function clearOutputCookieValue() {
    const output = document.getElementById("cookie-value");
    output.textContent = "";
}

// check if the browser allows local cookies
var nd = new Date();
nd.setSeconds(nd.getSeconds() + 60);
document.cookie="cookietest=1;expires"+nd.toGMTString();
var cookieEnabled = document.cookie.indexOf("cookietest") != -1;
if(!cookieEnabled){
    //没有启用cookie
    alert("cookie not enabled");
}
else{
    alert("cookie is enabled");
}

console.log(document.cookie);