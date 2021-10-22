var category;

function searchPlanets(){

    var allPlanetsString = "";
    category = "planets"

    fillListFromMultiplePages(allPlanetsString, 'name', 8)

}

function searchStarships(){
    var allStarshipsString = "";
    category = "starships"

    fillListFromMultiplePages(allStarshipsString, 'name', 8)

}

function searchVehicles(){
    var allVehiclesString = "";
    category = "vehicles";

    fillListFromMultiplePages(allVehiclesString, 'name', 8)

}
function searchPeople(){
    var allPeopleString = "";
    category = "people"

    fillListFromMultiplePages(allPeopleString, 'name', 8)
}
function searchFilms(){
    var allFilmsString = "";
    category = "films"

    fillListFromMultiplePages(allFilmsString, 'title', 2)
}
function searchSpecies(){
    var allSpeciesString = "";

    category = "species"

    fillListFromMultiplePages(allSpeciesString, 'name', 8)
}

function generateLink(selectedPage){
    var preset = "https://swapi.dev/api/"
    var searchPreset = preset + category + "/?page=" + selectedPage
    return searchPreset
}

function fillListFromSinglePage(listName, searchDataType){

    const xhttp = new XMLHttpRequest();

    if( listName == ""){
        xhttp.onload = function() {
            var jsonObject = JSON.parse(this.responseText);

            for (let i in jsonObject.results) {
                var search = "jsonObject.results[" + i + "]." + searchDataType;
                listName += eval(search);
                listName += '\n';
            }

            document.getElementById("starWars").innerHTML = listName;
        }

    } else {
        document.getElementById("starWars").innerHTML = listName;
    }

    xhttp.open("GET", generateLink(), true);
    xhttp.send();
}

function fillListFromMultiplePages(listName, searchDataType, pages){
    for (let i = 0; i < pages; i++) {

        const xhttp = new XMLHttpRequest();

            xhttp.onload = function () {

                var jsonObject = JSON.parse(this.responseText);

                for (let j = 0; j < jsonObject.results.length; j++) {
                    var search = "jsonObject.results[" + j + "]." + searchDataType;
                    listName += eval(search);
                    listName += '\n';

                    let btn = document.createElement("button");
                    var br = document.createElement("br");
                    btn.innerHTML = eval(search);
                    btn.onclick = function () {};
                    document.body.appendChild(btn);
                    document.body.appendChild(br);

                }
            }

        xhttp.open("GET", generateLink(i), false);
        xhttp.send();

    }
}