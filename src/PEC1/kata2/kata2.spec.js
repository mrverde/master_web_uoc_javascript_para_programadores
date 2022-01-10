import sumPositiveElements from './kata2';

describe('Kata #2: Suma de elementos positivos de un array', () => {
  test('array vacio devuelve 0', () => {
    expect(sumPositiveElements([])).toBe(0);
  });

  test('array [1,2,3,4,5] devuelve 15', () => {
    expect(sumPositiveElements([1, 2, 3, 4, 5])).toBe(15);
  });

  test('array [1,-2,3,4,5] devuelve 13', () => {
    expect(sumPositiveElements([1, -2, 3, 4, 5])).toBe(13);
  });

  test('array [-1,2,3,4,-5] devuelve 9', () => {
    expect(sumPositiveElements([-1, 2, 3, 4, -5])).toBe(9);
  });

  test('array [-1,-2,-3,-4,-5] devuelve 0', () => {
    expect(sumPositiveElements([-1, -2, -3, -4, -5])).toBe(0);
  });
});
