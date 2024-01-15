function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  if (status == 1){
    console.log("Online");
    return "Online";
  } else if (status == 2){
    console.log("Away");
    return "Away";
  } else {
    console.log("Offline");
    return "Offline";
  }
}

conection(1);
conection(0);
conection(2);
module.exports = conection;
