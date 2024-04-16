// JavaScript source code
function sayiAl() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);
    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var sonuc1 = sayi1 + sayi2; // normal toplama iþlemi

    var sonuc2 = sayi1 + " " + sayi2; // concatenate karaktersel birlestirme

    document.getElementById("sonuc1").innerHTML = sonuc1;
    document.getElementById("sonuc2").innerHTML = sonuc2;

}
