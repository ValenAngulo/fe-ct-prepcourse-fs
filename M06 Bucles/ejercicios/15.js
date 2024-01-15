function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  switch (true){
    case numero === 1:
      console.log("Lunes");
      return ("Lunes");
      break;
    case numero === 2:
      console.log("Martes");
      return ("Martes");
      break;
    case numero === 3:
      console.log("Miercoles");
      return ("Miercoles");
      break;
    case numero === 4:
      console.log("Jueves");
      return ("Jueves");
      break;
    case numero === 5:
      console.log("Viernes");
      return ("Viernes");
      break;
    case numero === 6:
      console.log("Sabado");
      return ("Sabado");
      break;
    case numero === 7:
      console.log("Domingo");
      return ("Domingo");
      break;
    default:
      console.log("No es un dia de la semana");
      return ("No es un dia de la semana");
  }
}

obtenerDiaSemana(4);
obtenerDiaSemana(8);
obtenerDiaSemana(3);
module.exports = obtenerDiaSemana;