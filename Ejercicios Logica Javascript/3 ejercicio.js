// /* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

let cadena = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo aliquet consequat. Quisque auctor, nisi quis tincidunt tincidunt, elit augue malesuada leo, id tincidunt eros sapien quis justo. Fusce quis lacus quis nisi sagz";

const separar = (cadena, caracterSeparador)=>{
  (typeof cadena !== "string" || cadena === "")
    ?console.log("Por favor, ingresa un elemento valido en cadena tipo string.")
    :(typeof caracterSeparador !== "string" || caracterSeparador === "")
      ?console.log(`Por favor ingresa un fragmento a borrar`)
      :(cadena.includes(caracterSeparador))
        ?console.log(cadena.split(`${caracterSeparador}`))
        :console.log(`El fragmento ${caracterSeparador} NO existe en la cadena ${cadena}.`)
    
}

separar("abcs", "c");

console.clear();