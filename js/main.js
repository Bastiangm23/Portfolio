// Funcion para marcar el border de la barra de navegacion
window.onscroll = function() {
    const navbar = document.querySelector(".navbar");
    var y = window.scrollY;
    if (y > 0) {
        navbar.classList.add("sombra-navbar");
    }else{
        navbar.classList.remove ("sombra-navbar");
    }
  };

  // Funcion para marcar el porcentaje de la barra de progreso en la seccion de skills

  function porcentajeSkills(porcentaje) {
    const progressBars = document.querySelectorAll(".progress-bar-inner");

    console.log(progressBars.length);
    
  }