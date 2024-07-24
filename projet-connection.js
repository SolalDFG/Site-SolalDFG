function connexion2() {
    var username = document.getElementById('t1').value;
    var password = document.getElementById('t2').value;
    if (username == "admin" && password == "admin") {
        window.location.href = "projet-connection-t.html";
    } else {
        window.location.href = "projet-connection-f.html";
    }
}