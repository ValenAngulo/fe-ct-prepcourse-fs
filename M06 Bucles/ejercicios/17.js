function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  switch(true){
    case color == "blue":
      console.log("This is blue");
      return ("This is blue");
      break;
    case color == "red":
      console.log("This is red");
      return ("This is red");;
      break;
    case color == "green":
      console.log("This is green");
      return ("This is green");
      break;
    case color == "orange":
      console.log("This is orange");
      return ("This is orange");
      break;
    default:
      console.log("Color not found");
      return ("Color not found");
  }
}

colors("red");
colors("blue");
colors("pink");
module.exports = colors;
