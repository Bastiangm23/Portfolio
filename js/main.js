// Funcion para marcar el border de la barra de navegacion
window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  var y = window.scrollY;
  if (y > 0) {
    navbar.classList.add("sombra-navbar");
  } else {
    navbar.classList.remove("sombra-navbar");
  }
};

// Funcion para marcar el porcentaje de la barra de progreso en la seccion de skills

const progressBars = document.querySelectorAll(".progress-bar-inner");
const porcentajeSkills = document.querySelectorAll(".porcentaje-skill");
// Recorremos todos los porcentajes que tengamos en nuestros div
porcentajeSkills.forEach((porcentaje, i) => {
    // guardamos el porcentaje 
  let porc = porcentaje.innerHTML;
  // le aplicamos el porcentaje al "width" del progress bar que este en la misma posicion que nuestro porcentaje
  progressBars[i].style.width = porc;
});



const navBarHead = document.querySelector(".navbar-header");
const navbar = document.querySelector(".navbar");
const navbarLogo = document.querySelector("#navbar-logo");
const navbarLogo2 = document.querySelector(".navbar-logo-2");
const navbarMenu = document.querySelector(".navbar-menu");

function toggleNavBar() {
  navbar.classList.toggle("navbar-contraida");
  console.log("contraer/desplegar barra lateral");
  navbarLogo.classList.toggle("display-none");
  navbarLogo2.classList.toggle("visibility-visible");
  navbarMenu.classList.toggle("hide");
}

// Funcion para hacer desplegable la barra cuando esta lateralmente

navbar.addEventListener("click", () =>{
 toggleNavBar();

})


