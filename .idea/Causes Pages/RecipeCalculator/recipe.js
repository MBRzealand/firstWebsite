var elRange = document.getElementById('antalPandekager'); // Vi indlæser <input type="range" elementet, dvs. vi cacher den i en variable

elRange.addEventListener('change', beregnIngredienser, false); // Her tilføjer vi en "change" event listener til knappen, som kalder beregnIngredienser functionen

function beregnIngredienser() {
    var antalPandekager = $("output").val();
    console.log("Antal pandekager: " + antalPandekager); // Console.log bruges til debugging

    var aeg = (4/12 * antalPandekager).toFixed(2);
    $('input:eq(1)').val(aeg);

    var mel = (150/12 * antalPandekager).toFixed(2);
    $('input:eq(2)').val(mel);

    var smoer = (25/12 * antalPandekager).toFixed(2);
    $('input:eq(3)').val(smoer);

    var maelk = (3/12 * antalPandekager).toFixed(2);
    $('input:eq(4)').val(maelk);

    var salt = (1/12 * antalPandekager).toFixed(2);
    $('input:eq(5)').val(salt);

    var sukker = (1/12 * antalPandekager).toFixed(2);
    $('input:eq(6)').val(sukker);

    var vanilje = (1/12 * antalPandekager).toFixed(2);
    $('input:eq(7)').val(vanilje);
}