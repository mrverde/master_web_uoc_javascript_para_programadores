import {
  setMovieHeading,
  initMovieSelect,
  setMovieSelectCallbacks,
  addChangeEventToSelectHomeworld,
} from './pec3';
import fs from 'fs';
import path from 'path';

const index = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Ejercicio #1: Funcion setMovieHeading', () => {
  beforeEach(() => {
    document.body.innerHTML = index.toString();
  });
  test('Test #1 - Pedir los valores del retorno del jedi', async () => {
    const title2check = '<h2 class="movie__title">Return of the Jedi</h2>';
    const info2check = '<h4 class="movie__info">Episode 6 - 1983-05-25</h4>';
    const director2check = '<p class="movie__director">Director: Richard Marquand</p>';

    await setMovieHeading(3, '.movie__title', '.movie__info', '.movie__director');

    expect(document.body.innerHTML.includes(title2check)).toBeTruthy();
    expect(document.body.innerHTML.includes(info2check)).toBeTruthy();
    expect(document.body.innerHTML.includes(director2check)).toBeTruthy();
  });

  test('Test #2 - Pedir los valores de una nueva esperanza', async () => {
    const title2check = '<h2 class="movie__title">A New Hope</h2>';
    const info2check = '<h4 class="movie__info">Episode 4 - 1977-05-25</h4>';
    const director2check = '<p class="movie__director">Director: George Lucas</p>';

    await setMovieHeading(1, '.movie__title', '.movie__info', '.movie__director');

    expect(document.body.innerHTML.includes(title2check)).toBeTruthy();
    expect(document.body.innerHTML.includes(info2check)).toBeTruthy();
    expect(document.body.innerHTML.includes(director2check)).toBeTruthy();
  });

  test('Test #3 - Pedir los valores del ataque de los clones', async () => {
    const title2check = '<h2 class="movie__title">Attack of the Clones</h2>';
    const info2check = '<h4 class="movie__info">Episode 2 - 2002-05-16</h4>';
    const director2check = '<p class="movie__director">Director: George Lucas</p>';

    await setMovieHeading(5, '.movie__title', '.movie__info', '.movie__director');

    expect(document.body.innerHTML.includes(title2check)).toBeTruthy();
    expect(document.body.innerHTML.includes(info2check)).toBeTruthy();
    expect(document.body.innerHTML.includes(director2check)).toBeTruthy();
  });
});

describe('Ejercicio #2: Funcion initMovieSelect', () => {
  test('Test #1 - El selector de peliculas recibe los nombres de las 6 peliculas y el caso vacio', async () => {
    document.body.innerHTML = index.toString();

    const code2check =
      '<select id="select-movie" name="movie"><option value="">Select a movie</option><option value="4">A New Hope</option><option value="2">Attack of the Clones</option><option value="6">Return of the Jedi</option><option value="3">Revenge of the Sith</option><option value="5">The Empire Strikes Back</option><option value="1">The Phantom Menace</option></select>';

    await initMovieSelect('#select-movie');
    expect(document.body.innerHTML.includes(code2check)).toBeTruthy();
  });
});

/* No he sido capaz de lanzar los eventos desde la consola de javascript para testearlos, pruebas
realizadas manualmente */
