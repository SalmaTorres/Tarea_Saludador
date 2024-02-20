function saludar(nombre, genero, edad, hora) {
  var saludo = "Hola ";
  if(edad > 30)
  {
    if(hora < 12)
      saludo = "Buenos dias ";
    else
    {
      if(hora < 19)
        saludo = "Buenas tardes ";
      else
        saludo = "Buenas noches ";
    }
    if(genero == "F")
      saludo = saludo + "Sra. ";
    else
      saludo = saludo + "Sr. ";
  }
  saludo = saludo + nombre;
  return saludo;
}

export default saludar;
