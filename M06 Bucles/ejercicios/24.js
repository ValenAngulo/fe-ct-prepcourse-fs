function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  let separate = texto.split("");
  let reverse = separate.reverse();
  let join = reverse.join("");
  // return join;
console.log(join);
return (join);

  // let long = texto.length;
  // let counter = 0
  // let char = ""
  // do {
  //   counter = counter + 1;
  //   long = long - 1;
  //   char = char + texto.charAt(long);
  //   // console.log(char);
  // } while (long >= counter);
  // console.log(char);
  // return char;
}


invertirTexto("Hola Mundo");
module.exports = invertirTexto;