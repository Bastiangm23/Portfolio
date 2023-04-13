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

  
    const progressBars = document.querySelectorAll(".progress-bar-inner");

    progressBars.forEach(bar => {
        console.log(bar);
    });

    const porcentajeSkills = document.querySelectorAll(".porcentaje-skill");

    porcentajeSkills.forEach((porcentaje, i) => {
        let porc = porcentaje.innerHTML
        progressBars[i].style.width = porc;
    });
    
  