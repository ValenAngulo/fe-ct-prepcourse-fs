function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  let anoNacimiento = new Date(fechaNacimiento).getFullYear();
  // let anoNacimiento = fechaNacimiento.getFullYear("12/06/1999");
  let anoActual = new Date().getFullYear();
  let edad = anoActual - anoNacimiento; 
  if (edad >= 18){
    return true;
  } else {
    return false;
  }
}
const resultado = esMayorDeEdad("12/06/1999");

module.exports = esMayorDeEdad;