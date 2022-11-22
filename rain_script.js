// set cookie
function setCookie (bname, bvalue, exdays) {
    const d = new Date ();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = bname + "=" + bvalue + ";" + expires + ";path=/";
}

// get cookie
function getCookie (bname) {
    let name = bname + "=";
    let ba = document.cookie.split(';');
    for (let i = 0; i < ba.length; i ++) {
        let b = ba[i];
        while (b.charAt(0) == ' ') {
            b = b.substring(1);
        }
        if (b.indexOf(name) == 0) {
            return b.substring(name.length, b.length);
        }
    }
    return "";
}

// cookie input
function checkCookie () {
    let user = getCookie("username");
    if (user != "") {
        alert("Re-bonjour " + user + "!");
    }
    else {
        user = prompt ("Please enter your name :", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

// reference : https://www.w3schools.com/js/js_cookies.asp