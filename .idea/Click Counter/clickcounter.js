function clickButton(){
    var currentCount = document.getElementById("Counter").innerHTML;

    document.getElementById("Counter").innerHTML = eval(currentCount) + 1;
}