const recortar = (cadena, numDigitos)=> {
    (!cadena)
      ?console.log("no ingresaste una cadena de texto")
      :(numDigitos === undefined)
        ? console.log("No iongresaste numero de caracteres a extraer.")
        : console.log(`los caracteres extraidos son: "${cadena.slice(0,numDigitos)}" y fueron ${numDigitos} digitos.`);   
    }

recortar(`Lorem ipsum`, 6);

console.clear();