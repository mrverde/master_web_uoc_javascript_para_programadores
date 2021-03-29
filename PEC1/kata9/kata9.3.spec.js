import plantTree from './kata9.3';

describe('Kata #9.3: Objetos', () => {
  test('Al invocar con dos strings devuelve un objeto con las propiedades getFruit y getSpecies', () => {
    const obj = plantTree('pearTree', 'pear');
    expect(obj).toHaveProperty('getFruit');
    expect(obj).toHaveProperty('getSpecies');
  });

  test('Al invocar el metodo getSpecies devuelve pear', () => {
    expect(plantTree('pearTree', 'pear').getSpecies).toBe('pearTree');
  });

  test('Al invocar el metodo getFruit devuelve pear', () => {
    expect(plantTree('pearTree', 'pear').getFruit).toBe('pear');
  });

  test('Al invocar con pearTree y pear devuelve el objeto', () => {
    const expected = { getFruit: 'pear', getSpecies: 'pearTree' };
    expect(plantTree('pearTree', 'pear')).toMatchObject(expected);
  });

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
});
