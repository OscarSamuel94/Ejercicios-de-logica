// /* 

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

// */

// const vocalesYConsonantes = (texto) =>
// {
//   if (!texto || typeof texto !== "string") return console.log(`no has ingresado una cadena de texto`)
//   if(texto === "")return console.warn(`El texto debe contener al menos un caracter`);

  
//   let vocales = /[aeiou]/ig;
//   let consonantes = /[^aeiou0-9]/ig;
  
//   let contadorVocales = 0;
//   let contadorConsonantes = 0;

//   texto.split("").map(letra =>
//     {
//       (vocales.test(letra))
//         ? contadorVocales++
//         :(consonantes.test(letra))
//           ?contadorConsonantes++
//           : console.log(`No se ha encontrado ninguna vocal o consonante en el texto dado`);
//     });

//     console.log(`Las vocales encontradas en el texto ${texto} son ${contadorVocales} y las consonantes ${contadorConsonantes}`)

      
// }

// vocalesYConsonantes("aeiouae");



// // Definir una función que recibe una cadena de texto como parámetro
// function contarVocalesYConsonantes(cadena) {
//   // Definir una expresión regular para las letras
//   let regexLetras = /[a-záéíóúñ]/ig;

//   // Obtener un arreglo con las letras de la cadena
//   let letras = cadena.match() || [];

//   // Definir una función que verifica si una letra es una vocal
//   let esVocal = (letra) => "aeiouñ".includes(letra);

//   // Definir una función que verifica si una letra es una consonante
//   let esConsonante = (letra) => "bcdfghjklmnñpqrstvwxyz".exec();

//   // Definir una función que cuenta el número de elementos de un arreglo que cumplen una condición
//   let contar = (arreglo, condicion) => arreglo.filter(condicion).length;

//   // Devolver un objeto con el número de vocales y consonantes
//   return {
//     vocales: contar(letras, esVocal),
//     consonantes: contar(letras, esConsonante)
//   };
// }

// // Ejemplo de uso de la función
// let cadena = "Hola, este es Bing"; // Definir una cadena de texto
// let resultado = contarVocalesYConsonantes(cadena); // Llamar a la función con la cadena
// console.log("La cadena '" + cadena + "' tiene " + resultado.vocales + " vocales y " + resultado.consonantes + " consonantes"); // Mostrar el resultado en la consola




const vocalesOCadenas = (texto = "")=>
{
  if (!texto || typeof texto !== "string") return console.log(`no has ingresado una cadena de texto`)
  if(texto === "")return console.warn(`El texto debe contener al menos un caracter`);
  
  let vocales = 0;
  let consonantes = 0;

  for(letra of texto){
    if((/[aeiouáéíóú]/ig).test(letra)) vocales++;
    if((/[bcdfghjklmnñpqrstvwxyz]/ig).test(letra)) consonantes++;
  }

  return console.info({
    texto,
    vocales,
    consonantes
  })


}


vocalesOCadenas("Arrivederchi")