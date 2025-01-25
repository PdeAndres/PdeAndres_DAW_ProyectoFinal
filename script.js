$(document).ready(function () {
  $(".boton-menu").click(() => {
    $(".contenido-menu").fadeToggle();
  });

  $(".dropdown").click(() => {
    $(".contenido-dropdown").fadeToggle();

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
