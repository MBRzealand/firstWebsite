function norrisJoke(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("norrisJoke").innerHTML = JSON.parse(this.responseText).value;
    }
    xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
    xhttp.send();

}