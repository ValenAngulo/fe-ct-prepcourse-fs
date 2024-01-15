function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (a < 0 && b < 0 && a == b) {
    console.log(true);
    return true;
  } else{
    console.log(false);
    return true;
  }
}

esIgualYNegativo(5,5);
esIgualYNegativo(-4,-4);
esIgualYNegativo(-3,10);
module.exports = esIgualYNegativo;
