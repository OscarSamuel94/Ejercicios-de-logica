/* 
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

const nombreValido = (nombre = "")=>{
  if(!nombre || typeof nombre !== "string") return console.warn(`No has ingresado un nombre`);
  if(nombre === "") return console.warn(`El nombre debe tener al menos una letra`);

  let nombreRegExp = new RegExp(/^([A-Z][a-zñ]{1,20})(\s[A-Z][a-zñ]{1,19})*$/g).test(nombre);
  
  return (nombreRegExp)? console.log(`Nombre Valido`): console.log(`Nombre NO Valido`)
}


nombreValido("Oscar amuel Ramirez Añ");