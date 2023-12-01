
/* 

8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

*/

function eliminarCaracteres(cadena, caracteresEliminar){
    (!cadena || cadena === "")
     ?console.log("No ingresaste cadena")
     :(!caracteresEliminar || caracteresEliminar === "")
      ?console.warn(`NO ingresaste la cadena a eliminar`)
      :(cadena.includes(caracteresEliminar))
        ? console.log(cadena.replace(new RegExp(caracteresEliminar, "ig"),""))
        :console.log(`No existen los caracteres en la cadena`);
  }
eliminarCaracteres("a b c d e f g"," ");
eliminarCaracteres("abcdef","cde");