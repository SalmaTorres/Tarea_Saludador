function saludar(nombre, genero) {
  var saludo;
  if(genero == "F")
  {
    saludo = "Sra. "+nombre;
  }
  else
  {
    saludo = "Sr. "+nombre;
  }
  return saludo;
}

export default saludar;
