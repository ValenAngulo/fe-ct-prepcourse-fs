function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

do {
  switch(true) {
    case mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8|| mes == 10 || mes == 12:
      console.log("31");
      return 31;
      break;
    case mes == 4 || mes == 6 || mes == 9 || mes == 11:
      console.log("30");
      return 30;
      break;
    case mes == 2:
      console.log("28")
      return 28;
      break;
    case mes <= 0 || mes > 12:
      console.log("0");
      return 0;
      break
  }
} while (mes > 0 && mes < 12);

}

diasEnMes(2);
module.exports = diasEnMes;
