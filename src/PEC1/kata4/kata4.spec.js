import removeFirstAndLast from './kata4';

describe('Kata #4: Elimina el primer y ultimo caracter', () => {
  test('JavaScript devuelve avaScrip', () => {
    expect(removeFirstAndLast('JavaScript')).toBe('avaScrip');
  });

  test('Alexandria devuelve lexandri', () => {
    expect(removeFirstAndLast('Alexandria')).toBe('lexandri');
  });

  test('hydrogen devuelve ydroge', () => {
    expect(removeFirstAndLast('hydrogen')).toBe('ydroge');
  });

  test('ok devuelve ok', () => {
    expect(removeFirstAndLast('ok')).toBe('ok');
  });
});
