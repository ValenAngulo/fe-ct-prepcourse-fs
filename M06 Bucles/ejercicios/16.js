function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  switch(true){
    case idioma == "aleman":
      console.log("Guten Tag!");
      return ("Guten Tag!");
      break;
    case idioma == "mandarin":
      console.log("Ni Hao!");
      return ("Ni Hao!");
      break;
    case idioma == "ingles":
      console.log("Hello!");
      return ("Hello!");
      break;
    default:
      console.log("Hola!");
      return ("Hola!");
  }
}

saludo("ingles");
saludo("aleman");
saludo("italiano");
module.exports = saludo;
