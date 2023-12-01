/* 

Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

*/

let cadenaAinvertir = `Paseando en tu jardín mil mariposas`;
let cadenaInvertida = [];

const invertirPalabras = (cadenaaInvertir) =>(typeof cadenaAinvertir !== "string" || cadenaAinvertir == "")
    ? `debes introducir una cadena de texto con al menos mas de un valor, solamente. Intenta de nuevo.`
    : cadenaInvertida = cadenaAinvertir.split("").reverse().join("");

console.log(invertirPalabras(cadenaAinvertir));
console.log(cadenaAinvertir);

