function saludar(nombre, genero, edad) {
  var saludo = "";
  if(edad > 30)
  {
    if(genero == "F")
    {
      saludo = "Sra. ";
    }
    else
    {
      saludo = "Sr. ";
    }
  }
  saludo = saludo + nombre;
  return saludo;
}

export default saludar;
