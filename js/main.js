navbar = document.querySelector(".navbar");

window.onscroll = function() {
    var y = window.scrollY;
    if (y > 0) {
        navbar.classList.add("sombra-navbar");
    }else{
        navbar.classList.remove ("sombra-navbar");
    }

    console.log(y);
  };