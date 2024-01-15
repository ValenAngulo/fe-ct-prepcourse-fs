function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let spaces1 = string.replace(/ /g, "").toLowerCase();
    console.log(spaces1);
  let separate = string.split("").reverse().join("");
  let spaces2 = separate.replace(/ /g, "").toLowerCase();
    console.log(spaces2);
  if (spaces1 == spaces2){
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
esPalindromo("Ana");
esPalindromo("La ruta nos aporto otro paso natural");
module.exports = esPalindromo;
