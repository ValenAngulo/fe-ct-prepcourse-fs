function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
 switch(true) {
  case num1 > num2 && num1 > num3 && num1 >= 1:
    return "Numero 1 es mayor y positivo";
    console.log("Numero 1 es mayor y positivo");
    break;
  case num1 < 0 || num2 < 0 || num3 < 0:
    return "Hay negativos";
    console.log("Hay negativos");
    break;
  case num3 > num1 && num3 > num2:
    return (num3+1);
    console.log(num3+1);
    break;
  case num1 === 0 && num2 === 0 && num3 === 0:
    return "Error";
    console.log("Error");
    break;
  default:
    return false;
    console.log(false); 
  }
}

operadoresLogicos(70,20,4);
operadoresLogicos(-4,6-5);
operadoresLogicos(40,10,100);
operadoresLogicos(0,0,0);
module.exports = operadoresLogicos;
