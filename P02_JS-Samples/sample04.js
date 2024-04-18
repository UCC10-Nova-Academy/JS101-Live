// JavaScript source code
function toplama() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);
    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var toplam = sayi1 + sayi2;

    document.getElementById("sonuc").innerHTML = toplam;
}

function cikarma() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);
    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var fark = sayi1 - sayi2;

    document.getElementById("sonuc").innerHTML = fark;
}

function carpma() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);
    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var carpim = sayi1 * sayi2;

    document.getElementById("sonuc").innerHTML = carpim;
}

function bolme() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);
    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var bolum = sayi1 / sayi2;

    document.getElementById("sonuc").innerHTML = bolum;
}