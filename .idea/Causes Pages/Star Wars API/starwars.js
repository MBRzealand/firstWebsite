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

function removeStyle() {
    document.getElementById("description6").style.removeProperty("position");
    document.getElementById("description6").style.removeProperty("width");
    document.getElementById("description6").style.fontSize = "20px";
    document.getElementById("description6").style.marginTop = "0px";
    document.getElementById("description6").style.removeProperty("padding");
    document.getElementById("description6").style.removeProperty("left");
    document.getElementById("description6").style.fontFamily = "Times New Roman";
    document.getElementById("description6").style.removeProperty("color");
}

function generateLink(selectedPage){
    let preset = "https://swapi.dev/api/"
    let searchPreset = preset + category + "/?page=" + selectedPage
    return searchPreset
}

function generateSearchLink(buttonName){
    let preset = "https://swapi.dev/api/"
    let searchPreset = preset + category + "/?search=" + buttonName

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        let jsonObject = JSON.parse(this.responseText);

        if(category == "planets") {

            removeStyle()

            let name = "jsonObject.results[0].name";
            document.getElementById("description1").innerHTML = "Name: " + eval(name);

            let rotation = "jsonObject.results[0].rotation_period";
            document.getElementById("description2").innerHTML = "Rotational Period: " + eval(rotation);

            let orbit = "jsonObject.results[0].orbital_period";
            document.getElementById("description3").innerHTML = "Orbital Period: " + eval(orbit);

            let diameter = "jsonObject.results[0].diameter";
            document.getElementById("description4").innerHTML = "Diameter: " + eval(diameter);

            let climate = "jsonObject.results[0].climate";
            document.getElementById("description5").innerHTML = "Climate: " + eval(climate);

            let terrain = "jsonObject.results[0].terrain";
            document.getElementById("description6").innerHTML = "Terrain: " + eval(terrain);

            let population = "jsonObject.results[0].population";
            document.getElementById("description7").innerHTML = "Population: " + eval(population);

        }

        if(category == "starships") {

            removeStyle()

            let name = "jsonObject.results[0].name";
            document.getElementById("description1").innerHTML = "Name: " + eval(name);

            let model = "jsonObject.results[0].model";
            document.getElementById("description2").innerHTML = "Model: " + eval(model);

            let manufacturer = "jsonObject.results[0].manufacturer";
            document.getElementById("description3").innerHTML = "Manufacturer: " + eval(manufacturer);

            let crew = "jsonObject.results[0].crew";
            document.getElementById("description4").innerHTML = "Crew: " + eval(crew);

            let passengers = "jsonObject.results[0].passengers";
            document.getElementById("description5").innerHTML = "Passengers: " + eval(passengers);

            let starshipClass = "jsonObject.results[0].starship_class";
            document.getElementById("description6").innerHTML = "Starship Class: " + eval(starshipClass);

            let costInCredits = "jsonObject.results[0].cost_in_credits";
            document.getElementById("description7").innerHTML = "Cost in Credits: " + eval(costInCredits);

        }

        if(category == "vehicles") {

            removeStyle()

            let name = "jsonObject.results[0].name";
            document.getElementById("description1").innerHTML = "Name: " + eval(name);

            let model = "jsonObject.results[0].model";
            document.getElementById("description2").innerHTML = "Model: " + eval(model);

            let manufacturer = "jsonObject.results[0].manufacturer";
            document.getElementById("description3").innerHTML = "Manufacturer: " + eval(manufacturer);

            let crew = "jsonObject.results[0].crew";
            document.getElementById("description4").innerHTML = "Crew: " + eval(crew);

            let passengers = "jsonObject.results[0].passengers";
            document.getElementById("description5").innerHTML = "Passengers: " + eval(passengers);

            let vehicleClass = "jsonObject.results[0].vehicle_class";
            document.getElementById("description6").innerHTML = "Vehicle Class: " + eval(vehicleClass);

            let costInCredits = "jsonObject.results[0].cost_in_credits";
            document.getElementById("description7").innerHTML = "Cost in Credits: " + eval(costInCredits);

        }

        if(category == "people") {

            removeStyle()

            let name = "jsonObject.results[0].name";
            document.getElementById("description1").innerHTML = "Name: " + eval(name);

            let height = "jsonObject.results[0].height";
            document.getElementById("description2").innerHTML = "Height: " + eval(height) + "cm";

            let mass = "jsonObject.results[0].mass";
            document.getElementById("description3").innerHTML = "Mass: " + eval(mass) + "kg";

            let gender = "jsonObject.results[0].gender";
            document.getElementById("description4").innerHTML = "Gender: " + eval(gender);

            let hairColor = "jsonObject.results[0].hair_color";
            document.getElementById("description5").innerHTML = "Hair Color: " + eval(hairColor);

            let eyeColor = "jsonObject.results[0].eye_color";
            document.getElementById("description6").innerHTML = "Eye Color: " + eval(eyeColor);

            let birthYear = "jsonObject.results[0].birth_year";
            document.getElementById("description7").innerHTML = "Birth Year: " + eval(birthYear);

        }

        if(category == "films") {

            document.getElementById("description6").style.position = "absolute";
            document.getElementById("description6").style.width = "1000px";
            document.getElementById("description6").style.fontSize = "65px";
            document.getElementById("description6").style.marginTop = "80px";
            document.getElementById("description6").style.padding = "20px";
            document.getElementById("description6").style.left = "-200px";
            document.getElementById("description6").style.fontFamily = "starjedi";
            document.getElementById("description6").style.color = "#ffd653";


            let title = "jsonObject.results[0].title";
            document.getElementById("description1").innerHTML = "Title: " + eval(title);

            let episode = "jsonObject.results[0].episode_id";
            document.getElementById("description2").innerHTML = "Episode: " + eval(episode);

            let director = "jsonObject.results[0].director";
            document.getElementById("description3").innerHTML = "Director: " + eval(director);

            let producer = "jsonObject.results[0].producer";
            document.getElementById("description4").innerHTML = "Producer: " + eval(producer);

            let releaseDate = "jsonObject.results[0].release_date";
            document.getElementById("description5").innerHTML = "Release Date: " + eval(releaseDate);

            let opening = "jsonObject.results[0].opening_crawl";
            document.getElementById("description6").innerHTML = eval(opening).toLowerCase();

            document.getElementById("description7").innerHTML = "";

        }

        if(category == "species") {

            removeStyle()

            let name = "jsonObject.results[0].name";
            document.getElementById("description1").innerHTML = "Name: " + eval(name);

            let classification = "jsonObject.results[0].classification";
            document.getElementById("description2").innerHTML = "Classification: " + eval(classification);

            let designation = "jsonObject.results[0].designation";
            document.getElementById("description3").innerHTML = "Designation: " + eval(designation);

            let averageHeight = "jsonObject.results[0].average_height";
            document.getElementById("description4").innerHTML = "Average Height: " + eval(averageHeight);

            let averageLifespan = "jsonObject.results[0].average_lifespan";
            document.getElementById("description5").innerHTML = "Average Lifespan: " + eval(averageLifespan);

            let skinColors = "jsonObject.results[0].skin_colors";
            document.getElementById("description6").innerHTML = "Skin Colors: " + eval(skinColors);

            let language = "jsonObject.results[0].language";
            document.getElementById("description7").innerHTML = "Language: " + eval(language);

        }


    }

    xhttp.open("GET", searchPreset, false);
    xhttp.send();

}

function fillListFromSinglePage(listName, searchDataType){

    const xhttp = new XMLHttpRequest();

    if( listName == ""){
        xhttp.onload = function() {
            let jsonObject = JSON.parse(this.responseText);

            for (let i in jsonObject.results) {
                let search = "jsonObject.results[" + i + "]." + searchDataType;
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
                    let search = "jsonObject.results[" + j + "]." + searchDataType;
                    listName += eval(search);
                    listName += '\n';

                    let btn = document.createElement("button");
                    btn.innerHTML = eval(search).toLowerCase();

                    btn.onclick = function(){
                        generateSearchLink(btn.innerHTML);
                        while (document.getElementById("buttonContainer").hasChildNodes()) {
                            document.getElementById("buttonContainer").removeChild(document.getElementById("buttonContainer").lastChild);
                        }
                    }

                    let br = document.createElement("br");
                    document.getElementById("buttonContainer").appendChild(btn);


                }
            }

        xhttp.open("GET", generateLink(i), false);
        xhttp.send();

    }



}