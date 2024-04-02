// script.js

function authenticate() {
    var password = prompt("Enter the password:");

    if (password === "qXnu[f6T7D)>&?$jaQ.+HD1]Sj<pIo=oL,@[~zBfG|`U;c'@93(j2hTZ[aXpUU-") {
        sessionStorage.setItem("authenticated", "true");
        window.location.href = "3F4818AC1DC3F53F1D91A6CE1BCFE1BDDFBE28A456D7C848599A395721/mainpage.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}

window.onload = function() {
    if (sessionStorage.getItem("authenticated") !== "true" && window.location.pathname.startsWith("/Scraper/3F4818AC1DC3F53F1D91A6CE1BCFE1BDDFBE28A456D7C848599A395721")) {
        alert("Unauthorized access. Please enter the correct password to access the content.");
        window.location.href = "/";
    }
};
