/* 

16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

*/

const descuento = (cantidad, descuento)=>{
  if(!cantidad || typeof cantidad !== "number") return console.log(`No ingresaste un numerode cantidad.`);
  if(!descuento || typeof descuento !== "number") return console.log(`No ingresaste un descuento.`);

  let totalNeto = cantidad-((cantidad*descuento)/100);
  console.log(`El descuento del ${descuento}% a ${cantidad} £ da un total de ${totalNeto} £.`);
}

descuento(1000, 25)