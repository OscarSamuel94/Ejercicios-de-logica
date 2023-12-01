/* 

7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

*/

const palindromo = (phrase)=>{
  ((!phrase || typeof phrase !== "string") || (phrase === ""))
    ? console.warn(`No ingresaste ninguna frase para poder analizar`)
    :verificarPalindromo(phrase);
}

const verificarPalindromo = (phrase)=>{
  let newPhrase = phrase.toLowerCase().replaceAll(" ","").split("").reverse().join("");
  let phraseClon = phrase.toLowerCase().replaceAll(" ","");
  (newPhrase === phraseClon)
    ? console.log(`${phrase} SI es un Palindromo.`)
    :console.log(`${phrase} NO es un Palindromo.`)
}



palindromo("anita lava LA TiNa");