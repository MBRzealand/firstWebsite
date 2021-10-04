function buttonOne() {
    document.getElementById("calculatorDisplay").innerHTML += "1";
}

function buttonTwo() {
    document.getElementById("calculatorDisplay").innerHTML += "2";
}

function buttonThree() {
    document.getElementById("calculatorDisplay").innerHTML += "3";
}

function buttonFour() {
    document.getElementById("calculatorDisplay").innerHTML += "4";
}

function buttonFive() {
    document.getElementById("calculatorDisplay").innerHTML += "5";
}

function buttonSix() {
    document.getElementById("calculatorDisplay").innerHTML += "6";
}

function buttonSeven() {
    document.getElementById("calculatorDisplay").innerHTML += "7";
}

function buttonEight() {
    document.getElementById("calculatorDisplay").innerHTML += "8";
}

function buttonNine() {
    document.getElementById("calculatorDisplay").innerHTML += "9";
}

function buttonZero() {
    document.getElementById("calculatorDisplay").innerHTML += "0";
}

function buttonPlus() {
    document.getElementById("calculatorDisplay").innerHTML += "+";
}

function buttonMinus() {
    document.getElementById("calculatorDisplay").innerHTML += "-";
}

function buttonClear() {
    document.getElementById("calculatorDisplay").innerHTML = "";
}

function buttonMultiply() {
    document.getElementById("calculatorDisplay").innerHTML += "*";
}

function buttonDivide() {
    document.getElementById("calculatorDisplay").innerHTML += "/";
}

function buttonDecimal() {
    document.getElementById("calculatorDisplay").innerHTML = ".";
}

function buttonEquals() {
    var number = eval(document.getElementById("calculatorDisplay").innerHTML);
    document.getElementById("calculatorDisplay").innerHTML = number;
}
