function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0;
  for (let i = 1; i <= n; i++){
    console.log("valor i:", i);
    suma = suma + i;
    console.log("valor suma:", suma)
    if (i >= 100){
      break;
    }
  }
  console.log(suma);
  return(suma);
   
}
sumarHastaNConBreak(20);


module.exports = sumarHastaNConBreak;
 // let suma = 0;
    // let i = 1;
    // while (i <= n) {
    //   if (i == 100) break;
    //   suma = suma + i;
    //   i++;
    // }
    // console.log(suma);
    // return suma;
    