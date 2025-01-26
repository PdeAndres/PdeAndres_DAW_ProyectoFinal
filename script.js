$(document).ready(function () {
  $(".boton-menu").click(() => {
    var menu = $(".contenido-menu");
    if (menu.css("display") === "none") {
      menu.css("display", "flex");
    } else {
      menu.css("display", "none");
    }
  });

  $(".dropdown").click(() => {
    var dropdown = $(".contenido-dropdown li");
    if (dropdown.css("display") === "none") {
      dropdown.css("display", "flex");
    } else {
      dropdown.css("display", "none");
    }

    $(".chevron").toggleClass("rotated");
  });

  let IndexActual = 0;

  function updateCarrusel(index) {
    $(".imagenes-carrusel img").removeClass("activo");

    $(".imagenes-carrusel img").eq(index).addClass("activo");

    $(".boton-carrusel").removeClass("activo");
    $(".boton-carrusel").eq(index).addClass("activo");
  }

  $(".boton-carrusel").click(function () {
    IndexActual = $(this).index();
    updateCarrusel(IndexActual);
  });

  updateCarrusel(IndexActual);
});
