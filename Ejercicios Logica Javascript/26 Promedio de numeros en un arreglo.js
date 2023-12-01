/* 

26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

*/
const numeros = [5,5,5,5,5,5,5,5,5,5,5,4.99];

const promedioArreglo = (numeros)=>{
  if(!numeros ||!(numeros instanceof Array)) return console.log(`No me diste un arreglo`);
  for(num of numeros){
    if(typeof num !== "number") return console.warn(`Necesito un arreglo con SOLO numeros.`);
  }
  return console.log(numeros.reduce((a,b,index,numeros)=>{
    let total = a+b;
    if(index === numeros.length-1){
      return `El promedio es ${(total/numeros.length).toFixed(2)}.`
    }else{
      return total;
    }
  }));
}

promedioArreglo(numeros)