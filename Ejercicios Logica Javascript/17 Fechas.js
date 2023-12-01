/* 

17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

*/
/*Definir una función que recibe una fecha válida como parámetro
funcion miFuncion(fecha) 
  // Obtener la fecha actual usando la función Date() de javascript
  hoy <- Date()
  // Calcular la diferencia en milisegundos entre la fecha actual y la fecha dada
  diferencia <- hoy - fecha
  // Convertir la diferencia en años usando la constante de milisegundos por año
  años <- diferencia / (1000 * 60 * 60 * 24 * 365)
  // Redondear el resultado al número entero más cercano
  años <- redondear(años)
  // Devolver el resultado
  retornar años
fin funcion*/

const calcularAnios = (fecha = undefined)=>{
  if(!fecha) return console.log(`No me mandaste la fecha.`);
  if(!(fecha instanceof Date)) return console.log(`No ingresaste una fecha en formato correcto.`);

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let aniosEnMs = (1000 * 60 * 60 * 24 * 365) / 12;
  let aniosHumano = Math.floor(hoyMenosFecha/aniosEnMs);

  return(Math.sign(aniosHumano) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumano)} mes(es) para el anio ${fecha.getFullYear()}.`)
    :(Math.sign(aniosHumano) === 1)
      ? console.log(`Han pasado ${aniosHumano} meses desde el anio ${fecha.getFullYear()}.`)
      : console.log(`Estamos en el mes actual.`);
  
}


calcularAnios(new Date(1994,9,15));

