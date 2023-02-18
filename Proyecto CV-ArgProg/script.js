//funcion para ocultar o mostrar menu
let menuVisible = false;
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
//Ocultar menu una vez que selecciono una opcion
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;

}
//funcion.Aplicar animacion a habilidades(skills)
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html5");
        habilidades[2].classList.add("css3");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("concentracion");
        habilidades[9].classList.add("proyect");

    }
}
//Detectar scrolling para aplicar animaciones a  barra habilidades(skills)
window.onscroll = function () {
    efectoHabilidades();
}
