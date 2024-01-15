function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num <= 999 && num >= 100){
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

tieneTresDigitos(22);
tieneTresDigitos(-444);
tieneTresDigitos(934);
module.exports = tieneTresDigitos;
