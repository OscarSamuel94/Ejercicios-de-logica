/* 

27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

^- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 
instancias de la clase de forma automatizada e imprime la ficha técnica 
de cada película.


* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/

class Pelicula{
  constructor({id, titulo, director, estreno, pais, generos, calificacion}){
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  
  }
  static get listaGeneros(){
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "GameShow", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];

  }

  static generosAceptados(){
    return console.info(`Generos aceptados: ${Pelicula.listaGeneros.join(", ")}`);
  }

  validarNumero(propiedad, valor){
    if(!valor) return console.warn(`${propiedad} esta vacio.`);
    if(typeof valor !== "number") return console.warn(`${propiedad} no es un numero valido.`);
    return true;
  }

  validarCadena(propiedad, valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`);
    if(typeof valor !== "string") return console.error(`${propiedad} "${valor} NO es una cadena de texto."`);

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud){
    if(valor.length>longitud) return console.warn(`${propiedad} NO puede rebasar los ${longitud} caracteres.`);

    return true;
  }

  validarArreglos(propiedad, valor){
    if(!valor) return console.warn(`No has ingresado ${propiedad}`);
    if(!(valor instanceof Array)) return console.warn(`${propiedad} No estan en un arreglo. Por favor ingresalo en forma de arreglo.`);
    for(let elem of valor){
      if(typeof elem !== "string") return console.warn(`Los arreglos de ${propiedad} deben contener elementos de cadena solamente.`);
      if(elem === "")  return console.warn(`Los arreglos de ${propiedad} deben contener cadenas de al menos un caracter.`);
    }
    if(valor.length === 0) return console.warn(`${propiedad} esta vacio.`)
    
    return true;
  }

  // - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  validarIMDB(id){
    if(this.validarCadena("IMDB id",id)){
      if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.log(`Id IMBD no es valido, debe contener 2 letras minusculas al inicio y 7 numeros restantes, siendo un total de 9 digitos.`);
    }
  }

  // Valida que el título no rebase los 100 caracteres.
  validarTitulo(titulo){
    if((this.validarCadena("Titulo",titulo))){
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }

  /*Valida que el director no rebase los 50 caracteres*/
  validarDirector(director){
    if(this.validarCadena("Director", director)){
      this.validarLongitudCadena("Director",director,50);
    }
  }
  /*Validar que el anio de estreno sea un numero ENTERO de 4 digitos */

  validarEstreno(estreno){
    if(this.validarNumero("Anio de estreno", estreno)){
      if(!(/^\d{4}$/.test(estreno))) return console.warn(`El anio que introdujiste No es un anio correcto, debe ser de 4 digitos y de numero entero.`);
    }
   
  }

  // - Valida que el país o paises sea introducidos en forma de arreglo.
  validarPais(pais){
    this.validarArreglos("Pais(es)", pais);
  }

  //Valida que los generos sean introducidos en forma de arreglo
  validarGeneros(generos){
    if(this.validarArreglos("Generos", generos)){
      for(let genero of generos){
        if(!Pelicula.listaGeneros.includes(genero)) return console.info(`${genero} no se incluye en la lista. Los generos aceptados son ${Pelicula.listaGeneros}`);
      }
      // if(!Pelicula.listaGeneros.includes(...generos)) return console.log(`No se encontro el genero`);
    };
  }

  // - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.

  validarCalificacion(calificacion){
    if(this.validarNumero("Calificacion", calificacion)){
     (calificacion < 0 || calificacion > 10)
      ? console.error(`La calificacion tiene que ser entre 0 y 10`)
      :calificacion = calificacion.toFixed(1);
      
    }
  }
  // - Crea un método que devuelva toda la ficha técnica de la película.

  fichaTecnica(){
    console.info(`Ficha Tecnica: \n Titulo: ${this.titulo} \n Director: ${this.director} \n Estreno: ${this.estreno} \n Pais: ${this.pais.join(" / ")} \n Genero: ${this.generos.join(" / ")} \n Calificacion: ${this.calificacion} \n ID: ${this.id}`)
  }

}

// const peli = new Pelicula({
//   id: "tt1234567",
//   titulo: "La ciguania",
//   director: "Stephen Spielberg",
//   estreno: 1994,
//   pais: ["Ireland"],
//   generos: ["Action"],
//   calificacion: 8.55

// });

// peli.fichaTecnica();

/*- Apartir de un arreglo con la información de 3 películas genera 3 
            instancias de la clase de forma automatizada e imprime la ficha técnica 
            de cada película.*/

let peliculas = [
  {
    id: "tt1234567",
    titulo: "El laberinto del fauno",
    director: "Guillermo del Toro",
    estreno: 2006,
    pais: ["España"],
    generos: ["Fantasy", "Drama", "Western"],
    calificacion: 8.2
  },
  {
    id: "th4618238",
    titulo: "Parasite",
    director: "Bong Joon-ho",
    estreno: 2019,
    pais: ["Corea del Sur"],
    generos: ["Comedy", "Thriller", "Drama"],
    calificacion: 8.6
  },
  {
    id: "sa1154568",
    titulo: "The Matrix",
    director: "Lana Wachowski y Lilly Wachowski",
    estreno: 1999,
    pais: ["Estados Unidos"],
    generos: ["Thriller", "Action"],
    calificacion: 8.7
  }
];
            

peliculas.forEach(pelicula => {
  new Pelicula(pelicula).fichaTecnica();
});