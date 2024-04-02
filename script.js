// script.js

function authenticate() {
    var password = prompt("Enter the password:");

    if (password === "your_password") {
        sessionStorage.setItem("authenticated", "true");
        window.location.href = "/passwordprotected/mainpage.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}

window.onload = function() {
    if (sessionStorage.getItem("authenticated") !== "true" && window.location.pathname.startsWith("/passwordprotected")) {
        alert("Unauthorized access. Please enter the correct password to access the content.");
        window.location.href = "/";
    }
};
