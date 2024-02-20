import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad")

let fechaActual = new Date();
let horaActual = fechaActual.getHours();

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const edad = Number.parseInt(edad_input.value);
  const genero = document.querySelector('input[name="genero"]:checked').value;
  const nombre = nombre_input.value;
  const hora = horaActual;
  const idioma = document.querySelector('input[name="idioma"]:checked').value;

  div.innerHTML = "<p> " + saludar(nombre, genero, edad, hora, idioma) + "</p>";
});
