function esPositivoOInferiorA10(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si es positivo o menor que 10.
  // Retorna false en caso contrario.
  // Tu código:
  if (a >= 0 && a < 10) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

esPositivoOInferiorA10(10);
esPositivoOInferiorA10(7);
esPositivoOInferiorA10(-4);
esPositivoOInferiorA10(14);
module.exports = esPositivoOInferiorA10;
// if (a >= 0 && a <= 10){
//   console.log(true);
//   return true;
// } else {
//   console.log(false);
//   return false;
// }