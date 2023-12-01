/* 

25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

*/
const numeros = [2,2,2,2,3,3,3,3,5,5,5,4,2,4,2,5,1,6,1,6,1,6,5,5,8,5,5,4,5,21,true,true];

const eliminarDuplicados = (numeros)=>{
  if(!numeros || !(numeros instanceof Array)) return console.warn(`No has ingresado un arreglo`);
  if(numeros.length === 1) return console.warn(`ingresa un array con mas de 1 elemento para poder trabajar`)

  const sinDuplicados = {numeros,
    noDuplicados: numeros.filter((value, index, self)=> self.indexOf(value)===index)
};

  return console.info(sinDuplicados)
}

eliminarDuplicados(numeros)

console.log(`-----------------------OTRA FORMA-------------------------------`)

const setDuplicados = (numeros)=>{
  if(!numeros || !(numeros instanceof Array)) return console.warn(`No has ingresado un arreglo`);
  if(numeros.length === 1) return console.warn(`ingresa un array con mas de 1 elemento para poder trabajar`)

  const sinDuplicados = {numeros,
    noDuplicados: [...new Set(numeros)]
};
  return console.info(sinDuplicados)
}

setDuplicados(numeros);