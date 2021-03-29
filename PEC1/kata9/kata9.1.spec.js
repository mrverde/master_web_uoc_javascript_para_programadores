import plantTree from './kata9.1';

describe('Kata #9.1: Objetos', () => {
  test('Al invocar con numero devuelve null', () => {
    expect(plantTree(1, 'apple')).toBe(null);
  });

  test('Al invocar con true devuelve null', () => {
    expect(plantTree('lemonTree', true)).toBe(null);
  });

  test('Al invocar con undefined devuelve null', () => {
    expect(plantTree('lemonTree', undefined)).toBe(null);
  });

  test('Al invocar con un array devuelve null', () => {
    expect(plantTree([1, 2, 3], 'apple')).toBe(null);
  });

  test('Al invocar con un symbol devuelve null', () => {
    expect(plantTree(Symbol(), 'apple')).toBe(null);
  });

  test('Al invocar con dos strings devuelve un objeto', () => {
    expect(typeof plantTree('appleTree', 'apple')).toBe('object');
  });

  test('Al invocar con pearTree y pear devuelve el objeto', () => {
    const expected = { species: 'pearTree', fruit: 'pear' };
    expect(plantTree('pearTree', 'pear')).toMatchObject(expected);
  });
});
