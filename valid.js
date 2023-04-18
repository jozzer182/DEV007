var num = 4083952015263;
//Tomamos el nuemro y lo convertimos en un array
var arrNumOriginal = num.toString().split("");
console.log(`arrNumOriginal: ${arrNumOriginal}`);
//Reversa del número
var arrNumReversa = arrNumOriginal.reverse();
console.log(`arrNumReversa: ${arrNumReversa}`);
//'a todos los números que ocupan una posición par se les debe multiplicar por dos'
var arrNumDoble = [...arrNumReversa];
for (let index = 0; index < arrNumDoble.length; index++) {
  //Se suma uno al index para revisar la posicion real
  if ((index + 1) % 2 == 0) {
    //Se usa el módulo o residuo de 2, si es igual a cero quiere decir que es par.
    arrNumDoble[index] = arrNumDoble[index] * 2; // multiplicamos por 2 el número en el index que cumpla la condición
  }
}
console.log(`arrNumDoble: ${arrNumDoble}`);
//'si este número es mayor o igual a 10, debemos sumar los dígitos del resultado'
var arrSumaLosDigitos = [...arrNumDoble];
for (let index = 0; index < arrSumaLosDigitos.length; index++) {
  if (arrSumaLosDigitos[index] >= 10) {
    //verificamos si el número es mayor o igual a 10
    var arrDigitos10 = arrSumaLosDigitos[index].toString().split(""); // obtenemos el Array de ese nuemro
    var sumaDigitos10 = 0; //Inicializamos una variable para guardar la suma de los digitos
    for (const digito10 of arrDigitos10) {
      //recorremos cada posicion del array generado del numero mayor a 10
      sumaDigitos10 += Number(digito10); //Sumamos el digito en la variable suma
    }
    arrSumaLosDigitos[index] = sumaDigitos10; // reemplazamos la posición en el array por el resultado de la suma
  }
}
console.log(`arrSumaLosDigitos: ${arrSumaLosDigitos}`);
//Se realiza la suma de los digitos finales
var sumaDigitosFinales = 0;
for (const digito of arrSumaLosDigitos) {
  sumaDigitosFinales += Number(digito);
}
console.log(`sumaDigitosFinales: ${sumaDigitosFinales}`);
//El número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.
if (sumaDigitosFinales % 10 == 0) {
  console.log("Si es Válido");
} else {
  console.log("No es Válido");
}




