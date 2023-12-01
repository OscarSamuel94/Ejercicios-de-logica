
/* 

Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2

*/

let pertenece = "";
let cadena = `Pando Paseando jardín mil mariposas`;
const contarPalabra = (texto, palabraAVerificar)=>{
  if(!texto){return console.warn(`No has ingresado una cadena`)};
  if(!palabraAVerificar) return console.warn(`No ingresaste la palabra a verificar`);
  let i = 0,
    contador = 0;

  while(i !== -1){
    i = texto.indexOf(palabraAVerificar, i);
    if(i !== -1){
      i++;
      contador++;
    }
  }
  return console.info(`la palabra ${palabraAVerificar} se repite ${contador} veces en la cadena ${texto}`);
}
  
contarPalabra(cadena,"Paeando");

  
    

  
  
