export {
  getMovieCount,
  listMovies,
  listMoviesSorted,
  listEvenMoviesSorted,
  getMovieInfo,
  getCharacterName,
  getMovieCharacters,
  getCharacterNameAndHomeworld,
  getMovieCharactersAndHomeworlds,
  createMovie,
  Movie,
};

const fetch = require('node-fetch');

////// Ejercicio 1

async function getMovieCount() {
  let response = await fetch('https://swapi.dev/api/films/');
  let data = await response.json();
  return data.count;
}

//getMovieCount().then((data) => console.log(data.count));

////// Ejercicio 2

async function listMovies() {
  let response = await fetch('https://swapi.dev/api/films/');
  let data = await response.json();

  let procdata = data.results.map(function (data) {
    return {
      name: data.title,
      director: data.director,
      release: data.release_date,
      episodeID: data.episode_id,
    };
  });

  return procdata;
}

//listMovies().then((data) => console.log(data));

////// Ejercicio 3

async function listMoviesSorted() {
  let response = await fetch('https://swapi.dev/api/films/');
  let data = await response.json();

  let procdata = await data.results.map(function (data) {
    return {
      name: data.title,
      director: data.director,
      release: data.release_date,
      episodeID: data.episode_id,
    };
  });

  let sortedArray = await procdata.sort(function (a, b) {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  });

  return sortedArray;
}

//listMoviesSorted().then(console.log);

////// Ejercicio 4

async function listEvenMoviesSorted() {
  let response = await fetch('https://swapi.dev/api/films/');
  let data = await response.json();

  let procdata = await data.results.map(function (data) {
    return {
      name: data.title,
      director: data.director,
      release: data.release_date,
      episodeID: data.episode_id,
    };
  });

  let filteredArray = await procdata.filter(function (a) {
    return a.episodeID % 2 === 0;
  });

  let sortedArray = await filteredArray.sort(function (a, b) {
    return a.episodeID > b.episodeID ? 1 : b.episodeID > a.episodeID ? -1 : 0;
  });

  return sortedArray;
}

//listEvenMoviesSorted().then(console.log);

////// Ejercicio 5

// Ejercicio 5.1

async function getMovieInfo(idMovie) {
  let response = await fetch(`https://swapi.dev/api/films/${idMovie}/`);
  let data = await response.json();

  return {
    name: data.title,
    episodeID: data.episode_id,
    characters: data.characters,
  };
}

//getMovieInfo(1).then(console.log);

// Ejercicio 5.2

async function getCharacterName(url) {
  url = url.replace('http://', 'https://');
  let response = await fetch(url);
  let data = await response.json();

  return data.name;
}

//getCharacterName('http://swapi.dev/api/people/1/').then(console.log);

//Ejercicio 5.3

async function getMovieCharacters(idMovie) {
  let response = await fetch(`https://swapi.dev/api/films/${idMovie}/`);
  let data = await response.json();

  return {
    name: data.title,
    episodeID: data.episode_id,
    characters: await Promise.all(data.characters.map((url) => getCharacterName(url))),
  };
}

//getMovieCharacters(1).then(console.log);

////// Ejercicio 6

async function getCharacterNameAndHomeworld(url) {
  url = url.replace('http://', 'https://');
  let response = await fetch(url);
  let data = await response.json();

  let homeworldResponse = await fetch(data.homeworld.replace('http://', 'https://'));
  let homeworldData = await homeworldResponse.json();

  return {
    name: data.name,
    homeworld: homeworldData.name,
  };
}

async function getMovieCharactersAndHomeworlds(idMovie) {
  let response = await fetch(`https://swapi.dev/api/films/${idMovie}/`);
  let data = await response.json();

  return {
    name: data.title,
    episodeID: data.episode_id,
    characters: await Promise.all(data.characters.map((url) => getCharacterNameAndHomeworld(url))),
  };
}

//getMovieCharactersAndHomeworlds(1).then(console.log);

////// Ejercicio 7

class Movie {
  constructor(name, characters) {
    this.name = name;
    this.characters = characters;
  }
  async getCharacters() {
    return await Promise.all(this.characters.map((url) => getCharacterName(url)));
  }
  async getHomeworlds() {
    let dataHomeworld = await Promise.all(
      this.characters.map((url) => getCharacterNameAndHomeworld(url))
    );
    return await dataHomeworld.map((a) => a.homeworld);
  }
  async getHomeworldsReverse() {
    let dataHomeworld = await this.getHomeworlds();

    let sortedArray = await dataHomeworld.sort(function (a, b) {
      return a > b ? -1 : b > a ? 1 : 0;
    });
    return sortedArray;
  }
}

////// Ejercicio 8

/* Se han añadido varios checks. Si no se cumplen se lanza un error.
En concreto se han implementado checks para:

1) La función recibe un parametro (id), entonces ese parametro es un numero entero
que se corresponde con alguna de las peliculas de star wars. Si la funcion recibe
algo que no es un numero lanza un error.

2) La API tiene cargada un numero de peliculas, entonces puede ocurrir
que el numero de pelicula pedido no exista o no este disponible en la API. Se
ha añadido la comprobacion del numero de peliculas que hay en la API. Para ello
se hace una peticion a la api mediante el uso de la funcion getMovieCount y
se obliga a que el numero (id) sea un numero en el rango de las peliculas cargadas.
Ademas si la peticion a la API no devuelve nada tambien se lanza un error.

3) Por ultimo, si la llamada a getMovieInfo no deuvelve nada tambien se lanza un
error. */

async function createMovie(id) {
  // check id es numero
  if (isNaN(parseInt(id))) {
    throw new Error('La funcion tiene que invocarse con un numero');
  }

  const numberMovies = await getMovieCount();
  //check al extraer total de peliculas en api se devuelven datos
  if (numberMovies === undefined) {
    throw new Error('No se han devuelto datos');
  }

  var loadedMovies = [...Array(numberMovies + 1).keys()].slice(1);

  //check id es un numero de pelicula cargada en la API
  if (!loadedMovies.includes(parseInt(id))) {
    throw new Error(`Solo estan cargadas las siguientes peliculas ${loadedMovies}`);
  }

  const movie = await getMovieInfo(id);

  //check se han devuelto datos
  if (movie.name === undefined && movie.episodeID === undefined && movie.characters === undefined) {
    throw new Error('No se han devuelto datos');
  } else {
    return movie;
    //return new Movie(movie.name, movie.characters);
  }
}

//createMovie(1).then(console.log)
