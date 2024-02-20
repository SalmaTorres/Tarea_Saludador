function saludar(nombre, genero, edad, hora, idioma) {
  var saludo = "";
  if(idioma == "espanol")
  {
    saludo = "Hola ";
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
  }
  else
  {
    saludo = "Hello ";
    if(edad > 30)
    {
      if(hora < 12)
        saludo = "Good morning ";
      else
      {
        if(hora < 19)
          saludo = "Good afternoon ";
        else
          saludo = "Good night ";
      }
      if(genero == "F")
        saludo = saludo + "Mrs. ";
      else
        saludo = saludo + "Mr. ";
    }
  }
  saludo = saludo + nombre;
  return saludo;
}

export default saludar;
