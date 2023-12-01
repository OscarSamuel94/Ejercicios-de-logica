/* 

12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

*/
let array = [];
let primos = [];
let noPrimos = [];

for (var i = 1; i <= 100; i++) {
  array.push(i);
}


const primosFunction = (arreglo)=>{
  
  arreglo.map(number=>{
    let contador = false;
    for(let i = 0; i <= number; i++){
     
      if((number%i)===0 && contador <=2 ){
        contador++;
        
      }
      if(contador === 2 && i===number) primos.push(number);
      if(contador > 2 && i === number) noPrimos.push(number);
      
    }
    

  });
  

  return console.log(
  `Los numeros primos del arreglo son ${primos}.

  los No primos son ${noPrimos}.`);
 
}

primosFunction(array)