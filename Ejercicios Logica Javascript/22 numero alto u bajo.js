/* 

22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

*/
const numeros = [5,25,3,6,88,4,12,58,96,74,20,21,53,65,64,68,95,7,6,8,5];



const maximosMinimos = (numeros)=>
{
  let max = numeros[0];
  let min = numeros[0];



  for(let i = 1; i < numeros.length; i++){ 
    if(numeros[i] > max) max = numeros[i];
    if(numeros[i] < min) min = numeros[i];
  };
  return `El numero mayor es: ${max} \n el numero minimo es: ${min}.`;
}


console.log(maximosMinimos(numeros));


const maxMin = (numbers)=>{
 
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);

  return console.log(`El numero mayor es: ${max} y el numero minimo es: ${min}.`);
}

maxMin(numeros);