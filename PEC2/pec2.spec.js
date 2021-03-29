import {
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
} from './pec2';

require('jest-sorted');

describe('Ejercicio #1: ', () => {
  test('getMovieCount devuelve 6 peliculas', async () => {
    const data = await getMovieCount();
    expect(data).toBe(6);
  });
});
/*
describe('Ejercicio #2: ', () => {
  test('listMovies devuelve un array de objetos', async () => {
    const data = await listMovies();
    expect(data).toEqual(expect.any(Array));
  });

  test('Los objetos tienen las propiedades name, director, release y episodeID', async () => {
    const data = await listMovies();
    expect(data[0]).toHaveProperty('name');
    expect(data[0]).toHaveProperty('director');
    expect(data[0]).toHaveProperty('release');
    expect(data[0]).toHaveProperty('episodeID');
  });

  test('Los tipos de las propiedades son string/number', async () => {
    const data = await listMovies();
    expect(typeof data[0].name).toBe('string');
    expect(typeof data[0].director).toBe('string');
    expect(typeof data[0].release).toBe('string');
    expect(typeof data[0].episodeID).toBe('number');
  });
});

describe('Ejercicio #3: ', () => {
  test('listMoviesSorted devuelve un array de objetos', async () => {
    const data = await listMoviesSorted();
    expect(data).toEqual(expect.any(Array));
  });

  test('Los objetos tienen las propiedades name, director, release y episodeID', async () => {
    const data = await listMoviesSorted();
    expect(data[0]).toHaveProperty('name');
    expect(data[0]).toHaveProperty('director');
    expect(data[0]).toHaveProperty('release');
    expect(data[0]).toHaveProperty('episodeID');
  });

  test('Los tipos de las propiedades son string/number', async () => {
    const data = await listMoviesSorted();
    expect(typeof data[0].name).toBe('string');
    expect(typeof data[0].director).toBe('string');
    expect(typeof data[0].release).toBe('string');
    expect(typeof data[0].episodeID).toBe('number');
  });

  test('Los nombres de las peliculas estan ordenados alfabeticamente', async () => {
    const data = await listMoviesSorted();
    const lsMovies = await data.map((a) => a.name);
    expect(lsMovies).toBeSorted();
  });
});

describe('Ejercicio #4: ', () => {
  test('listEvenMoviesSorted devuelve un array de objetos', async () => {
    const data = await listEvenMoviesSorted();
    expect(data).toEqual(expect.any(Array));
  });

  test('Los objetos tienen las propiedades name, director, release y episodeID', async () => {
    const data = await listEvenMoviesSorted();
    expect(data[0]).toHaveProperty('name');
    expect(data[0]).toHaveProperty('director');
    expect(data[0]).toHaveProperty('release');
    expect(data[0]).toHaveProperty('episodeID');
  });

  test('Los tipos de las propiedades son string/number', async () => {
    const data = await listEvenMoviesSorted();
    expect(typeof data[0].name).toBe('string');
    expect(typeof data[0].director).toBe('string');
    expect(typeof data[0].release).toBe('string');
    expect(typeof data[0].episodeID).toBe('number');
  });

  test('Los objetos estan ordenados por episodeID de forma ascendente', async () => {
    const data = await listEvenMoviesSorted();
    const lsMovies = await data.map((a) => a.episodeID);
    expect(lsMovies).toBeSorted();
  });

  test('Los episodios devueltos son pares', async () => {
    const data = await listEvenMoviesSorted();
    const lsMovies = await data.map((a) => a.episodeID % 2);
    expect(lsMovies.every((val, i, arr) => val === arr[0])).toBe(true);
    expect(lsMovies[0]).toBe(0);
  });
});

describe('Ejercicio #5.1: ', () => {
  test('getMovieInfo devuelve un objeto', async () => {
    const data = await getMovieInfo(1);
    expect(data).toEqual(expect.any(Object));
  });

  test('El objeto tiene las propiedades characters, episodeID y name', async () => {
    const data = await getMovieInfo(1);
    expect(data).toHaveProperty('name');
    expect(data).toHaveProperty('episodeID');
    expect(data).toHaveProperty('characters');
  });

  test('Los tipos de las propiedades son string/number/array', async () => {
    const data = await getMovieInfo(1);
    expect(typeof data.name).toBe('string');
    expect(typeof data.episodeID).toBe('number');
    expect(data.characters).toEqual(expect.any(Array));
  });
});

describe('Ejercicio #5.2: ', () => {
  test('getCharacterName devuelve Luke Skywalker', async () => {
    const data = await getCharacterName('http://swapi.dev/api/people/1/');
    expect(data).toBe('Luke Skywalker');
  });

  test('getCharacterName devuelve C-3PO', async () => {
    const data = await getCharacterName('http://swapi.dev/api/people/2/');
    expect(data).toBe('C-3PO');
  });

  test('getCharacterName devuelve R2-D2', async () => {
    const data = await getCharacterName('http://swapi.dev/api/people/3/');
    expect(data).toBe('R2-D2');
  });
});

describe('Ejercicio #5.3: ', () => {
  test('getMovieCharacters(1) devuelve el episodio 4', async () => {
    const data = await getMovieCharacters(1);
    expect(data.name).toBe('A New Hope');
    expect(data.episodeID).toBe(4);
  });

  test('getMovieCharacters(1) devuelve todos los personajes', async () => {
    const data = await getMovieCharacters(1);
    const episode4Characters = [
      'Luke Skywalker',
      'C-3PO',
      'R2-D2',
      'Darth Vader',
      'Leia Organa',
      'Owen Lars',
      'Beru Whitesun lars',
      'R5-D4',
      'Biggs Darklighter',
      'Obi-Wan Kenobi',
      'Wilhuff Tarkin',
      'Chewbacca',
      'Han Solo',
      'Greedo',
      'Jabba Desilijic Tiure',
      'Wedge Antilles',
      'Jek Tono Porkins',
      'Raymus Antilles',
    ];
    episode4Characters.forEach((i) => expect(data.characters.includes(i)).toBe(true));
  });
});

describe('Ejercicio #6: ', () => {
  test('getMovieCharactersAndHomeworlds devuelve un objeto', async () => {
    const data = await getMovieCharactersAndHomeworlds(1);
    expect(data).toEqual(expect.any(Object));
  });

  test('El objeto tiene las propiedades characters, episodeID y name. characters tiene name y homeworld', async () => {
    const data = await getMovieCharactersAndHomeworlds(1);
    expect(data).toHaveProperty('name');
    expect(data).toHaveProperty('episodeID');
    expect(data).toHaveProperty('characters');
    expect(data.characters[0]).toHaveProperty('name');
    expect(data.characters[0]).toHaveProperty('homeworld');
  });

  test('Los tipos de las propiedades son string/number/array', async () => {
    const data = await getMovieCharactersAndHomeworlds(1);
    expect(typeof data.name).toBe('string');
    expect(typeof data.episodeID).toBe('number');
    expect(data.characters).toEqual(expect.any(Array));
    expect(typeof data.characters[0].name).toBe('string');
    expect(typeof data.characters[0].homeworld).toBe('string');
  });

  test('getMovieCharactersAndHomeworlds(1) devuelve todos los personajes y sus planetas de origen', async () => {
    const data = await getMovieCharactersAndHomeworlds(1);
    const episode4CharactersAndHomeworlds = [
      { name: 'Luke Skywalker', homeworld: 'Tatooine' },
      { name: 'C-3PO', homeworld: 'Tatooine' },
      { name: 'R2-D2', homeworld: 'Naboo' },
      { name: 'Darth Vader', homeworld: 'Tatooine' },
      { name: 'Leia Organa', homeworld: 'Alderaan' },
      { name: 'Owen Lars', homeworld: 'Tatooine' },
      { name: 'Beru Whitesun lars', homeworld: 'Tatooine' },
      { name: 'R5-D4', homeworld: 'Tatooine' },
      { name: 'Biggs Darklighter', homeworld: 'Tatooine' },
      { name: 'Obi-Wan Kenobi', homeworld: 'Stewjon' },
      { name: 'Wilhuff Tarkin', homeworld: 'Eriadu' },
      { name: 'Chewbacca', homeworld: 'Kashyyyk' },
      { name: 'Han Solo', homeworld: 'Corellia' },
      { name: 'Greedo', homeworld: 'Rodia' },
      { name: 'Jabba Desilijic Tiure', homeworld: 'Nal Hutta' },
      { name: 'Wedge Antilles', homeworld: 'Corellia' },
      { name: 'Jek Tono Porkins', homeworld: 'Bestine IV' },
      { name: 'Raymus Antilles', homeworld: 'Alderaan' },
    ];

    episode4CharactersAndHomeworlds.forEach((val, i) => {
      expect(val.name).toBe(data.characters[i].name);
      expect(val.homeworld).toBe(data.characters[i].homeworld);
    });
  });
});

describe('Ejercicio #7: ', () => {
  test('Movie tiene el atributo name y los métodos getCharacters, getHomeworlds y getHomeworldsReverse', async () => {
    const data = await createMovie('1');
    let film = new Movie(data.name, data.characters);
    expect(film).toHaveProperty('name');
    expect(film).toHaveProperty('getCharacters');
    expect(film).toHaveProperty('getHomeworlds');
    expect(film).toHaveProperty('getHomeworldsReverse');
  });

  test('name devuelve A new hope', async () => {
    const data = await createMovie('1');
    let film = new Movie(data.name, data.characters);
    expect(film.name).toBe('A New Hope');
  });

  test('getCharacters devuelve los nombres de los personajes de la pelicula', async () => {
    const movieCharacters = [
      'Luke Skywalker',
      'C-3PO',
      'R2-D2',
      'Darth Vader',
      'Leia Organa',
      'Owen Lars',
      'Beru Whitesun lars',
      'R5-D4',
      'Biggs Darklighter',
      'Obi-Wan Kenobi',
      'Wilhuff Tarkin',
      'Chewbacca',
      'Han Solo',
      'Greedo',
      'Jabba Desilijic Tiure',
      'Wedge Antilles',
      'Jek Tono Porkins',
      'Raymus Antilles',
    ];

    const data = await createMovie('1');
    let film = new Movie(data.name, data.characters);
    let chars = await film.getCharacters();
    chars.forEach((val, i) => expect(val).toBe(movieCharacters[i]));
  });

  test('getHomeworlds devuelve los nombres de los planetas de los personajes', async () => {
    const planets = [
      'Tatooine',
      'Tatooine',
      'Naboo',
      'Tatooine',
      'Alderaan',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Stewjon',
      'Eriadu',
      'Kashyyyk',
      'Corellia',
      'Rodia',
      'Nal Hutta',
      'Corellia',
      'Bestine IV',
      'Alderaan',
    ];
    const data = await createMovie('1');
    let film = new Movie(data.name, data.characters);
    let worlds = await film.getHomeworlds();
    worlds.forEach((val, i) => expect(val).toBe(planets[i]));
  });

  test('getHomeworldsReverse devuelve los nombres de los planetas ordenados de forma inversa', async () => {
    const planets = [
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Stewjon',
      'Rodia',
      'Nal Hutta',
      'Naboo',
      'Kashyyyk',
      'Eriadu',
      'Corellia',
      'Corellia',
      'Bestine IV',
      'Alderaan',
      'Alderaan',
    ];
    const data = await createMovie('1');
    let film = new Movie(data.name, data.characters);
    let worlds = await film.getHomeworldsReverse();
    expect(worlds).toBeSorted({ descending: true });
    worlds.forEach((val, i) => expect(val).toBe(planets[i]));
  });
});

describe('Ejercicio #8: ', () => {
  test('Se lanza error al invocar createMovie con una cadena', async () => {
    await expect(createMovie('testFallo')).rejects.toThrow(
      'La funcion tiene que invocarse con un numero'
    );
  });

  test('Se lanza error al invocar createMovie con un numero de pelicula que no existe', async () => {
    await expect(createMovie(12)).rejects.toThrow(
      'Solo estan cargadas las siguientes peliculas 1,2,3,4,5,6'
    );
  });
});
*/
