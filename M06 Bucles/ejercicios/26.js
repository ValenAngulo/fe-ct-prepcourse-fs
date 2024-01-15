function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  
// eliminar espacios de str1,str2, separalos, ordenarlos alfabeticamente, unirlos, compararlos

  let string1 = str1.replace(/ /g, "").toLowerCase();
  console.log(string1);
  let separate1 = string1.split("").sort().join("");
  console.log(separate1);
  let string2 = str2.replace(/ /g, "").toLowerCase();
  console.log(string2);
  let separate2 = string2.split("").sort().join("");
  console.log(separate2);
  if (separate1 == separate2){
      console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
}
}

esAnagrama('hola mundo', 'mundo hola');
esAnagrama('hola', 'holb');
esAnagrama('hola!', '!aloh');
module.exports = esAnagrama;
