// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

let cadena = `Paseando en tu jardín, mil mariposas
Comenzaron a decir cosas hermosas`;

// const repetirCadena = (cadenaARepetir, numeroDeVeces)=>{
//   (typeof cadenaARepetir !== "string")&&(typeof numeroDeVeces !== "number")
//   ?console.log("NO ingresaste una cadena ni un numero aragan!!")
//   :(typeof cadenaARepetir !== "string")
//     ?console.log("NO ingresaste una cadena valida")
//     :(typeof numeroDeVeces !== "number")
//       ?console.log("NO ingresaste una numero a repetir")
//       :console.log(cadenaARepetir.repeat(numeroDeVeces));
// }


// repetirCadena(1,"");

const repetirCadena = (cadenaARepetir, numeroDeVeces)=>{
  if(!cadenaARepetir) console.log(`No ingresaste nada de cadenas`);
  if(cadenaARepetir==="") console.log(`No ingreses cadenas vacias`);
  if(typeof cadenaARepetir !== "string") console.log(`No ingreses numeros en cadena`);
  if(!numeroDeVeces) console.log(`No ingresaste nada de numeros`);
  if(Math.sign(numeroDeVeces)===-1) console.log(`No ingreses numeros negativos!`);
  if(numeroDeVeces===0)console.log(`El valor de repeticion no puede ser cero`);

  return cadenaARepetir.repeat(numeroDeVeces);
}

console.log(repetirCadena(cadena,2));