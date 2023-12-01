/* 

15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

*/
const convertidorBases = (numero, base)=>{
  (!numero || typeof numero !== "number")&& console.warn(`No has ingresado un numero en el campo numero`);
  (!base || typeof base !== "number") && console.warn(`No has ingresado una base para continuar la conversion`);
  (!/(10|2)/.test(base)) && console.warn("no se reconoce la base ingresada");

  /*Convertir */
  if(base === 10) return numero.toString(2);
  if(base === 2) return parseInt(numero, 2);
}
// const decimalABinarioFunction = (numero, base)=>
// {
//   let binario = [];
//   let numeroAConvertir = numero;

//   while(numeroAConvertir > 0){  
//     let residuo = numeroAConvertir%2;
//     binario.unshift(residuo);
//     numeroAConvertir = Math.floor(numeroAConvertir/2);
//     residuo = 0;
//   }

//   let binarioNuevo = parseInt(binario.join(""));
//   console.log(`El valor del numero decimal ${numero} a base binaria es ${binarioNuevo}`);
// }


// const binarioADecimalFunction = (numero, base) =>
// {
//   let binarioArray = String(numero).split("");
//   let decimalTotal = 0;

//   let i = 0;
//   while(binarioArray.length > 0){
//     decimalTotal += parseInt(binarioArray.pop())*2**i;
//     i++;

//   }

//   console.log(`El valor del numero binario ${numero} a decimal es: ${decimalTotal}`);

// }
console.log(convertidorBases(1010,10));