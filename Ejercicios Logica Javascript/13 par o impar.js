const parOImpar = (numero)=>
{
 return (numero === 0)
  ? console.log(`ingresa otro numero diferente a cero, ya que este es neutral`)
  :(!numero || typeof numero !== "number")
    ? console.log("No has ingresado un numero")
    :(numero%2===0)
      ? console.log(`El numero ${numero} es un numero PAR`)
      : console.log(`El numero ${numero} es numero IMPAR`);
}

parOImpar(6);