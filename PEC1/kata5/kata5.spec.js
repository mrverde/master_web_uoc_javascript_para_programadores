import removeSpaces from './kata5';

describe('Kata #5: Elimina los espacios', () => {
  test('good morning devuelve goodmorning', () => {
    expect(removeSpaces('good morning')).toBe('goodmorning');
  });

  test(' carrot cake devuelve carrotcake', () => {
    expect(removeSpaces(' carrot cake ')).toBe('carrotcake');
  });

  test('the abbot gave rice to the fox devuelve theabbotgavericetothefox', () => {
    expect(removeSpaces('the abbot gave rice to the fox')).toBe('theabbotgavericetothefox');
  });
});
