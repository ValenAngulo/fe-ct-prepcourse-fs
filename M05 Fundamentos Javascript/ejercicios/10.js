function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  // const validacion = new Date(fecha);
  // return validacion.toString() !== "Invalid Date" && fecha !== "";
  
  // const formatoCorrecto = /^\d{4}-\d{1,2}-\d{1,2}$/;

  // if (!formatoCorrecto.test(fecha)) {
  //   return false; // El formato no es correcto
  // }

  // const validacion = new Date(fecha);
  // return validacion.toString() !== "Invalid Date";
  
    const formatoCorrecto = /^\d{4}-\d{1,2}-\d{1,2}$/;
    return formatoCorrecto.test(fecha);
  
}


module.exports = esFechaValida;