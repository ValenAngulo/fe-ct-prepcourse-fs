function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x > y){
    console.log(x);
    return x;
  } else if (x < y) {
    console.log(y);
    return y;
  } else {
    console.log(x);
    return x;
  }
}

obtenerMayor(2,4);
obtenerMayor(5,1);
obtenerMayor(8,8);
module.exports = obtenerMayor;
