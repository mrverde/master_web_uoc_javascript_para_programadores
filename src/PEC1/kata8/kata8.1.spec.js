import { tree } from './kata8.1';

describe('Kata #8.1: Objetos', () => {
  test('El objeto Tree tiene la propiedad species', () => {
    expect(tree.hasOwnProperty('species')).toBe(true);
  });
  test('El objeto Tree tiene la propiedad fruit', () => {
    expect(tree.hasOwnProperty('fruit')).toBe(true);
  });
  test('La propiedad species del objeto tree es appleTree', () => {
    expect(tree.species).toBe('appleTree');
  });
  test('La propiedad fruit del objeto tree es apple', () => {
    expect(tree.fruit).toBe('apple');
  });
});
