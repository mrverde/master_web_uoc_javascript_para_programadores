import { tree } from './kata8.1';
import { getFruit, noFruitTree } from './kata8.2';

describe('Kata #8.2: Objetos', () => {
  test('getFruit devuelve la propiedad fruit cuando existe', () => {
    expect(getFruit(tree)).toBe('apple');
  });
  test('getFruit devuelve No fruit cuando la propiedad no está definida', () => {
    expect(getFruit(noFruitTree)).toBe('No fruit');
  });

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
