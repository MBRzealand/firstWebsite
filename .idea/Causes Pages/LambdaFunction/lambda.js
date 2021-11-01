// helt standard lambda som ikke kan kaldes:
() => alert("hej")

// lambda funktion som kan kaldes:
(() => alert("hej"))()

// lambda som tager imod parameter:
(navn => alert("hej" + navn))

// javascript map:

var map = {
    '\\': '\t',
    'a': 'Alfa ',
    'b': 'Bravo ',
    'c': 'Charlie ',
    'd': 'Delta ',
    'e': 'Echo ',
    'f': 'Foxtrot ',
    'g': 'Golf ',
    'h': 'Hotel ',
    'i': 'India ',
    'j': 'Juliett ',
    'k': 'Kilo ',
    'l': 'Lima ',
    'm': 'Mike ',
    'n': 'November ',
    'o': 'Oscar ',
    'p': 'Papa ',
    'q': 'Quebec ',
    'r': 'Romeo ',
    's': 'Sierra ',
    't': 'Tango ',
    'u': 'Uniform ',
    'v': 'Victor ',
    'w': 'Whiskey ',
    'x': 'X-ray ',
    'y': 'Yankee ',
    'z': 'Zulu '
}

function phonetizise(stringInput){
    let listOfLetters = stringInput.replaceAll(' ', '\\').split('')
    let phonetizedString = ''

    for (let i = 0; i < listOfLetters.length; i++) {
        phonetizedString += map[listOfLetters[i]]
    }

    document.getElementById("textOutput").innerHTML = phonetizedString
}

