var num = 'helloworld';
//Tomamos el nuemro y lo convertimos en un array
var arrNumOriginal = num.toString().split("");
console.log(`arrNumOriginal: ${arrNumOriginal}`);
var arrResultado = [...arrNumOriginal];
//Ocultar valores
if (arrResultado.length > 4) {
  for (let index = 0; index < arrResultado.length; index++) {
    if (arrResultado.length - index > 4) {
      arrResultado[index] = "#";
    }
  }
}
var resultado = arrResultado.join("");
console.log(`resultado: ${resultado}`);
