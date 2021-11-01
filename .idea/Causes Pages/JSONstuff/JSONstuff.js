document.onload = searchJSON()

async function searchJSON() {

    let jsonFile = "https://gist.githubusercontent.com/MBRzealand/f1e647d25955ac164e6fff66b93130fe/raw/096a55df0e9392a6bfa564a9beb4e04cda9e50a2/JSON.json"
    let response = await fetch(jsonFile)

    if (response.ok){
        let jsonData = await response.json()
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
            .replaceAll('],', '],\n')
            .replaceAll(']</font>,', ']</font>,\n')
            .replaceAll(']</font>}', ']</font>\n}')
            .replaceAll('}</font>]}', '}\n</font>  ]\n}')
    }
}