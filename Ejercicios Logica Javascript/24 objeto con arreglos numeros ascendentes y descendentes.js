/* 

24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

*/
const numeros = [5,25,3,6,88,4,12,58,96,74,20,21,53,65,64,68,95,7,6,8,5];


const ascendentesDescendentes = (numeros)=>{
  const subeYBaja = {numeros,
    ascendente: numeros.map(n => n).sort((a,b)=>a-b),
    descendente: numeros.map(n=>n).sort((a,b)=>b-a)
  }

  return console.log(subeYBaja)

}

ascendentesDescendentes(numeros);