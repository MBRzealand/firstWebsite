document.onload = searchJSON()

function searchJSON(){

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {

        let jsonData = JSON.parse(this.responseText);
        let jsonString = JSON.stringify(jsonData)

        let textInput = document.getElementById('textInput').value;
        let functionString = "jsonData" + textInput

        let searchedJsonString = JSON.stringify(eval(functionString))

        let coloredString = jsonString.replace(searchedJsonString, searchedJsonString.fontcolor("green"))

        document.getElementById("outputString").innerHTML = coloredString
            .replace('\"groentsager\"', '\n  \"groentsager\"')
            .replace('\"desserter\"', '\n  \"desserter\"')
            .replace('\"mejeriprodukter\"', '\n  \"mejeriprodukter\"')
            .replace('}]}', '}]\n}')
            .replaceAll('[', '[\n    ')
            .replaceAll('},{', '\n    },{')
            .replaceAll('}]', '}\n  ]')
            .replaceAll('{"', '{\n      "')
            .replaceAll(',"', ',\n      "')
            .replaceAll(',{', ',\n    {')
            .replaceAll('"}', '"\n    }')
            .replaceAll('},<font color="green">{', '},\n<font color="green">    {')
            .replaceAll('}</font>],', '}</font>\n  ],')
            .replaceAll('],','],\n')
            .replaceAll(']</font>,',']</font>,\n')
            .replaceAll(']</font>}',']</font>\n}')
            .replaceAll('}</font>]}','}\n</font>  ]\n}')


    }

    xhttp.open("GET", "JSON.json", true);
    xhttp.send();

}