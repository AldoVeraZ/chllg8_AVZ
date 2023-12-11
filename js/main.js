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

document.addEventListener("DOMContentLoaded", function () {
  var imagenContainer = document.getElementById("imagen-container");
  var parrafoContainer = document.getElementById("parrafo-container");

  // Crear un elemento de imagen
  var imagen = new Image();
  imagen.src = "./homelander.jpg"; // Cambia esto con la ruta de tu imagen
  imagenContainer.appendChild(imagen);

  // Crear un elemento de párrafo con un span para el color
  var parrafo = document.createElement("p");
  var span = document.createElement("span");
  span.textContent = "Seven Shredders!";
  span.style.color = "red"; // Cambia el color según tus preferencias
  parrafo.appendChild(span);
  parrafo.innerHTML += ", El único gimnasio donde quedarás como homelander!";
  parrafoContainer.appendChild(parrafo);

  // Verificar si el enlace al CSS está presente y activo
  var cssLink = document.querySelector('link[rel="stylesheet"]');
  if (cssLink && !cssLink.disabled) {
    // Si el CSS está activo, mostrar la imagen y el párrafo
    imagenContainer.style.display = "block";
    parrafoContainer.style.display = "block";
  } else {
    // Si el CSS está desactivado, ocultar la imagen y el párrafo
    imagenContainer.style.display = "none";
    parrafoContainer.style.display = "none";
  }
});
