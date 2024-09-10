
function kjøp(){
    //kjøpe
    let KundeX = {
        velgFilm: $("#velg").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        tlf: $("#telefon").val(),
        epost: $("#email").val()
    }
    $.post("/lagre", KundeX, function lagreKunde(){
        tilbakeAlle();
    });




    $("#velg").val(""),
        $("#antall").val(""),
        $("#fornavn").val(""),
        $("#etternavn").val(""),
        $("#telefon").val(""),
        $("#email").val("")

}

function tilbakeAlle() {
    $.get("/sende", function (data) {
        formaterData(data);
    });
}

function formaterData(Kundene){
    let ut = "<table class=\"table table-striped table-bordered\">" +
        "<tr><th>Fornavn</th><th>Etternavn</th><th>Antall</th><th>Film</th><th>TelefonNr</th><th>Epost</th></tr>";
    for (let enKunde of Kundene){
        ut += "<tr><td>"+enKunde.fornavn+"</td><td>"+enKunde.etternavn+"</td><td>"+enKunde.antall+"</td><td>"+enKunde.velgFilm+"</td><td>"+enKunde.tlf+"</td><td>"+enKunde.epost+"</td></tr>";
    }
    ut += "</table>";
    $("#resultat").html(ut);

}


function slett(){
    $.get("/slett", function (){
        tilbakeAlle();
    });
}
