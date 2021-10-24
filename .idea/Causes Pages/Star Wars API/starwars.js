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

function generateSearchLink(buttonName){
    var preset = "https://swapi.dev/api/"
    var searchPreset = preset + category + "/?search=" + buttonName

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        var jsonObject = JSON.parse(this.responseText);

        var name = "jsonObject.results[0].name";
        document.getElementById("name").innerHTML = "Name: " + eval(name);

        var rotation = "jsonObject.results[0].rotation_period";
        document.getElementById("rotationalPeriod").innerHTML = "Rotational Period: " + eval(rotation);

        var orbit = "jsonObject.results[0].orbital_period";
        document.getElementById("orbitalPeriod").innerHTML = "Orbital Period: " + eval(orbit);

        var diameter = "jsonObject.results[0].diameter";
        document.getElementById("diameter").innerHTML = "Diameter: " + eval(diameter);

        var climate = "jsonObject.results[0].climate";
        document.getElementById("climate").innerHTML = "Climate: " + eval(climate);

        var terrain = "jsonObject.results[0].terrain";
        document.getElementById("terrain").innerHTML = "Terrain: " + eval(terrain);

        var population = "jsonObject.results[0].population";
        document.getElementById("population").innerHTML = "Population: " + eval(population);

    }

    xhttp.open("GET", searchPreset, false);
    xhttp.send();

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

    while (document.getElementById("buttonContainer").hasChildNodes()) {
        document.getElementById("buttonContainer").removeChild(document.getElementById("buttonContainer").lastChild);
    }


    for (let i = 0; i < pages; i++) {

        const xhttp = new XMLHttpRequest();

            xhttp.onload = function () {

                var jsonObject = JSON.parse(this.responseText);

                for (let j = 0; j < jsonObject.results.length; j++) {
                    var search = "jsonObject.results[" + j + "]." + searchDataType;
                    listName += eval(search);
                    listName += '\n';

                    let btn = document.createElement("button");
                    btn.innerHTML = eval(search).toLowerCase();

                    btn.onclick = function(){
                        generateSearchLink(btn.innerHTML);
                    }

                    var br = document.createElement("br");
                    document.getElementById("buttonContainer").appendChild(btn);


                }
            }

        xhttp.open("GET", generateLink(i), false);
        xhttp.send();

    }



}