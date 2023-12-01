/* 

21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

*/

const cuadradoDeArrays = (array = undefined)=>{
  if(array === undefined) return console.warn(`no ingresaste ningun arreglo`);
  if(!(array instanceof Array)) return console.warn(`${array} No es un arreglo`);
  if(array.length === 0) return console.warn(`El arreglo esta vacio`);

  for(numero of array){
    if(typeof numero !== "number") return console.error(`${numero} no es un numero`);
  }
  
  let nuevo = array.map(numero=>Math.pow(numero,2));

  console.log(nuevo);
  console.log(array)
}

cuadradoDeArrays([1,2,3,4,6,7,8,9]);
cuadradoDeArrays([]);
cuadradoDeArrays({algo: "a"});
cuadradoDeArrays();
