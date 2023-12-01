const capicua = (numero = 0)=>{
  if(numero === 0) console.log(`No has ingresado un numero`);
  if(typeof numero !== "number") console.error(`El valor ${numero} NO es un numero`);

  const numeroReves = (numero.toString().split("").reverse().join(""));
  (numeroReves === numero.toString())
    ?console.log(`El numero ${numero} SI es capicua. Numero capicua: ${numeroReves}`)
    :console.log(`El numero ${numero} NO es capicua. Numero NO capicua: ${numeroReves}`);
}

capicua(20.02);