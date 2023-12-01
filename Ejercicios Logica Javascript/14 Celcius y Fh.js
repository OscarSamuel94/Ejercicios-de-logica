/* 

14 Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

*/

const celciusToFahrenheit = (grados, metrica)=>{
  if(!grados) return console.warn(`No ingresaste grados`);
  if(typeof grados !=="number") return console.log(`NO ingresaste un numero en grados`);
  if(!metrica) return console.log(`No ingresaste medidas`)
  if(typeof metrica !== "string") return console.log(`El valor ingresado no es una unidad reconocida`);
  if(metrica.length !== 1 || !/(C|c|F|f)/.test(metrica)) return console.log(`Valor de la unidad no reconocido.
  Ingresa las letra C para Celcius a Fahrenheit o la letra F para calcular Fahrenheit a Celcius`)

  if(metrica === "C" || metrica ==="c"){
    let gradosFahrenheit = Math.round(((grados)*1.8+ 32));
    console.info(`${grados} °C son ${gradosFahrenheit} °F.`);
  }else if(metrica === "F" || metrica === "f"){
    let gradosCelcius = Math.round(((grados-32)/1.8).toFixed(2));
    console.info(`${grados} °F son ${gradosCelcius} °C.`);
  }
}

celciusToFahrenheit(100,"f")


