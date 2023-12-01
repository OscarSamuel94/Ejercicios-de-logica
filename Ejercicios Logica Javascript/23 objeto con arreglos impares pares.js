/* 

23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

*/

const numeros = [5,25,3,6,88,4,12,58,96,74,20,21,53,65,64,68,95,7,6,8,5];

const paresImpares = (arreglo)=>{
  if(!arreglo || !(arreglo instanceof Array)) return console.warn(`Lo que has ingresado NO es un arreglo.`);
  for(numero of arreglo){
    if(typeof numero !== "number") return console.error(`El arreglo no es de solo numeros, NECESITO un arreglo con solo numeros.`)
  }
 


  let parnumerosParesEImpares= {
    pares: [],
    impares: []
  }
  

  for(numero of arreglo){
    if(numero%2 === 0){parnumerosParesEImpares.pares.unshift(numero)}else{parnumerosParesEImpares.impares.unshift(numero)};
  }
  return console.log(parnumerosParesEImpares);
}

paresImpares(numeros);

console.log(`----------------------------------------Otra Forma--------------------------------`)


const parImpar = (arreglo) =>{
  if(!arreglo || !(arreglo instanceof Array)) return console.warn(`Lo que has ingresado NO es un arreglo.`);
  for(numero of arreglo){
    if(typeof numero !== "number") return console.error(`El arreglo no es de solo numeros, NECESITO un arreglo con solo numeros.`);
  };

  return console.log({pares: arreglo.filter(num => num%2 ===0), impares: arreglo.filter(num=>num%2===1)});
}

parImpar(numeros);