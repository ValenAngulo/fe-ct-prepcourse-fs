function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if (num < 50 && num > 20){
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

estaEnRango(39);
estaEnRango(10);
estaEnRango(78);
module.exports = estaEnRango;
