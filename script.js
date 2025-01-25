$(document).ready(function () {
  $(".boton-menu").click(() => {
    $(".contenido-menu").fadeToggle();
  });

  $(".dropdown").click(() => {
    $(".contenido-dropdown").fadeToggle();

    $(".chevron").toggleClass("rotated");
  });
});
