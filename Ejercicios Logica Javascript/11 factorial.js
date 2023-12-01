/*Elaborar una funcion que calcule el factorial de un numero */

const factorial = (numero = 0) =>{
  if(!numero || typeof numero !== "number" || Math.sign(numero) === -1) return console.warn(`No ingresaste un numero`);

  let numeroFactorial = 1;

  for(let i = numero; i > 0; i--){
    numeroFactorial *= i;
  }
  return console.log(`El numero factorial de ${numero} es: ${numeroFactorial}`);
}

factorial(8)