
function displayJSON(){

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

        let jsonObject = JSON.parse(this.responseText);
        console.log(jsonObject)
    }

    xhttp.open("GET", 'JSON.json', false);
    xhttp.send();

}