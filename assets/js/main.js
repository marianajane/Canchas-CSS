
var botonCanchaFut=document.getElementById("canchaFut")
botonCanchaFut.addEventListener("click", mostrarCanchaFut);

function mostrarCanchaFut() {
    document.getElementById("cancha1").style.display = "block";
    document.getElementById("cancha2").style.display = "none";
    document.getElementById("cancha3").style.display = "none";
}

var botonCanchaBasquet=document.getElementById("canchaBasquet")
botonCanchaBasquet.addEventListener("click", mostrarCanchaBasquet);

function mostrarCanchaBasquet() {
    document.getElementById("cancha2").style.display = "block";
    document.getElementById("cancha1").style.display = "none";
    document.getElementById("cancha3").style.display = "none";
}

var botonCanchaTenis=document.getElementById("canchaTenis")
botonCanchaTenis.addEventListener("click", mostrarCanchaTenis);

function mostrarCanchaTenis() {
    document.getElementById("cancha3").style.display = "block";
    document.getElementById("cancha2").style.display = "none";
    document.getElementById("cancha1").style.display = "none";
}