barras = document.querySelector(".bars");
barras.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}
adicional = document.querySelector(".adicional");
adicional.onclick = function () {
    infoadicional = document.querySelector(".info_adicional")
    infoadicional.classList.toggle("active")
}