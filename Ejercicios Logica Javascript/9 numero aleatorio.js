
/* 

9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

*/


const aleatorio = (min, max)=>{
  return ((min === undefined || typeof min === "string" )  || ( max === undefined || typeof max === "string"))
    ?`No has ingresado valores correctos`
    :Math.floor(Math.random()*(max-min+1)+min);
}

console.log(aleatorio(501, 600));