function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  if (num == 10 || num == 5){
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

esDiezOCinco(10);
esDiezOCinco(4);
esDiezOCinco(5);
module.exports = esDiezOCinco;
