import repeatString from './kata3';

describe('Kata #3: Repite un string', () => {
  test('JavaScript 0 veces devuelve cadena vacia', () => {
    expect(repeatString('JavaScript', 0)).toBe('');
  });

  test('university 1 vez devuelve university', () => {
    expect(repeatString('university', 1)).toBe('university');
  });

  test('hello 3 veces devuelve hellohellohello', () => {
    expect(repeatString('hello', 3)).toBe('hellohellohello');
  });

  test('? 10 veces devuelve ??????????', () => {
    expect(repeatString('?', 10)).toBe('??????????');
  });
});
