import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad")
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const edad = Number.parseInt(edad_input.value);
  const genero = document.querySelector('input[name="genero"]:checked').value;
  const nombre = nombre_input.value;

  div.innerHTML = "<p> Hola " + saludar(nombre, genero, edad) + "</p>";
});
