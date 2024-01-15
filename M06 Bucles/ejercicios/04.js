function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  if (edad >= 18){
    console.log("Allowed");
    return "Allowed";
  } else {
    console.log("Not allowed");
    return "Not allowed";
  }
}
mayoriaDeEdad(7);
mayoriaDeEdad(18);
mayoriaDeEdad(25);
module.exports = mayoriaDeEdad;
