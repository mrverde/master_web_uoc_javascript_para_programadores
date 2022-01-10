import {
  getMovieInfo,
  listMoviesSorted,
  getMovieCharactersAndHomeworlds,
  compareByName,
} from './pec2';

function deleteChildrenNodes(selector) {
  while (selector.hasChildNodes()) {
    selector.removeChild(selector.lastChild);
  }
}

function deleteCharacterSheets() {
  deleteChildrenNodes(document.querySelector('ul.list__characters'));
}

function mapMovieId(id) {
  const mapdict = { 1: 4, 2: 5, 3: 6, 4: 1, 5: 2, 6: 3 };
  return mapdict[id];
}

function genBaseCaseSelector(selector, value, text, selected) {
  var option = document.createElement('option');
  selector.appendChild(option);
  option.value = value;
  option.textContent = text;
  option.selected = selected;
}

function setFunctionToApply(propertyName) {
  if (typeof propertyName === 'string' && propertyName.length > 0) {
    var functionToApply = function (a) {
      return a[propertyName];
    };
  } else {
    functionToApply = function (a) {
      return a;
    };
  }
  return functionToApply;
}

function genSelectorValues(selector, valuesObject, noSelectionText, valueProperty, textProperty) {
  var option = document.createElement('option');
  genBaseCaseSelector(selector, '', noSelectionText, true);

  var valueFunction = setFunctionToApply(valueProperty);
  var textFunction = setFunctionToApply(textProperty);

  for (const _value in valuesObject) {
    option.value = valueFunction(valuesObject[_value]);
    option.textContent = textFunction(valuesObject[_value]);
    selector.appendChild(option.cloneNode(true));
  }
}

function genCharacterTemplate(charName, charBirth, charEye, charSex, charHomeworld) {
  const li = document.createElement('li');

  li.className = 'list__item item character';
  li.innerHTML = `<img src="/user.d1344702.svg" class="character__image">
    <h2 class="character__name">${charName}</h2>
    <div class="character__birth"><strong>Birth Year:</strong> ${charBirth}</div>
    <div class="character__eye"><strong>Eye color:</strong> ${charEye}</div>
    <div class="character__gender"><strong>Gender:</strong> ${charSex}</div>
    <div class="character__home"><strong>Home World:</strong> ${charHomeworld}</div>`;
  document.querySelector('ul.list__characters').appendChild(li);
}

function genHeader(
  titleSelector,
  infoSelector,
  directorSelector,
  titleText,
  infoText,
  directorText
) {
  const title = document.querySelector(titleSelector);
  const info = document.querySelector(infoSelector);
  const director = document.querySelector(directorSelector);
  title.innerHTML = titleText;
  info.innerHTML = infoText;
  director.innerHTML = directorText;
}

function getSelectedValueInSelector(selector) {
  let e = document.getElementById(selector);
  let selectedIDValue = e.options[e.selectedIndex].value;
  return selectedIDValue;
}

// Ejercicio 1
export async function setMovieHeading(movieId, titleSelector, infoSelector, directorSelector) {
  let movieInfo = await getMovieInfo(movieId);

  genHeader(
    titleSelector,
    infoSelector,
    directorSelector,
    movieInfo.name,
    `Episode ${movieInfo.episodeID} - ${movieInfo.release}`,
    `Director: ${movieInfo.director}`
  );

  return movieInfo;
}

// Ejercicio 2
export async function initMovieSelect(selector) {
  const selectorID = document.querySelector(selector);
  let movieInfo = await listMoviesSorted();
  genSelectorValues(selectorID, movieInfo, 'Select a movie', 'episodeID', 'name');
}

// Ejercicio 3 y 4
export async function setMovieSelectCallbacks() {
  const selectorID = document.getElementById('select-movie');
  const selectorHomeworld = document.getElementById('select-homeworld');
  genHeader('.movie__title', '.movie__info', '.movie__director', '', '', '');
  genBaseCaseSelector(selectorHomeworld, '', 'Select a homeworld', true);

  selectorID.addEventListener(
    'change',
    async function () {
      if (this.value === '') {
        genHeader('.movie__title', '.movie__info', '.movie__director', '', '', '');
        deleteChildrenNodes(selectorHomeworld);
        genBaseCaseSelector(selectorHomeworld, '', 'Select a homeworld', true);
        deleteCharacterSheets();
      } else {
        await setMovieHeading(
          mapMovieId(this.value),
          '.movie__title',
          '.movie__info',
          '.movie__director'
        );

        let homeworldInfo = await getMovieCharactersAndHomeworlds(mapMovieId(this.value));
        let homeworlds = homeworldInfo.characters
          .map((item) => item.homeworld)
          .filter((v, i, a) => a.indexOf(v) === i)
          .sort(compareByName);
        deleteChildrenNodes(selectorHomeworld);
        genSelectorValues(selectorHomeworld, homeworlds, 'Select a homeworld');
        deleteCharacterSheets();
      }
    },
    false
  );
}

// Ejercicio 5
export async function addChangeEventToSelectHomeworld() {
  const selectorHomeworld = document.getElementById('select-homeworld');
  deleteCharacterSheets();

  selectorHomeworld.addEventListener(
    'change',
    async function () {
      deleteCharacterSheets();
      let selectedIDValue = getSelectedValueInSelector('select-movie');
      let homeworldInfo = await getMovieCharactersAndHomeworlds(mapMovieId(selectedIDValue));
      let chars = homeworldInfo.characters.filter((char) => char.homeworld === this.value);

      chars.map((char) =>
        genCharacterTemplate(
          char.name,
          char.birth_year,
          char.eye_color,
          char.gender,
          char.homeworld
        )
      );
    },
    false
  );
}
