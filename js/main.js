const cssFiles = [
  "./style/estilos.css",
  "./style/estilos-peliculas.css",
  "./style/estilos-futuro.css",
];
let activeFile = 0;
const links = document.getElementsByTagName("link");
function onClick() {
  activeFile++;
  if (activeFile > 2) {
    activeFile = 0;
  }
  links[0].href = cssFiles[activeFile];
}

document.addEventListener("DOMContentLoaded", function () {
  // Agrega un evento de clic a todos los inputs y al textarea
  const inputElements = document.querySelectorAll("input, textarea");
  inputElements.forEach(function (element) {
    element.addEventListener("click", function () {
      // Cambia el color de fondo del input o textarea cuando se hace clic
      element.style.backgroundColor = "#4D6D63"; // Puedes cambiar el color a tu preferencia

      const fieldset = element.closest("fieldset");
      if (fieldset) {
        fieldset.style.backgroundColor = "#A6C1B9";
      }
    });
  });

  // Selecciona el primer input y coloca el foco en él
  const firstInput = document.querySelector("input");
  if (firstInput) {
    firstInput.focus();

    // firstInput.style.backgroundColor = "#4D6D63";
    const firstFieldset = firstInput.closest("fieldset");
    if (firstFieldset) {
      // firstFieldset.style.backgroundColor = "#A6C1B9";
    }
  }
});
