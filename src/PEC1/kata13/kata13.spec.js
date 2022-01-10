import plantTree from './kata13';

describe('Kata #13: Clases', () => {
  test('Al crear un tree con los valores manzano y manzana e invocar setFruit con el valor pera lanza un error y mantiene su valor previo', () => {
    var tree = new plantTree('manzano', 'manzana');
    var originalValue = tree.getFruit;
    const errorWrapper = () => {
      tree.setFruit = 'pera';
    };
    expect(errorWrapper).toThrowError(Error);
    expect(originalValue).toBe(tree.getFruit);
  });

  test('Al crear un tree con los valores peral y manzana e invocar setFruit con el valor pera el método modifica el valor de fruit', () => {
    var tree = new plantTree('peral', 'manzana');
    tree.setFruit = 'pera';
    expect(tree.getFruit).toBe('pera');
  });

  test('Al crear un arbol e invocar setFruit con valor 12 el método lanza un error y mantiene su valor previo', () => {
    var tree = new plantTree('pearTree', 'pear');
    var originalValue = tree.getFruit;
    const errorWrapper = () => {
      tree.setFruit = 12;
    };
    expect(errorWrapper).toThrowError(Error);
    expect(originalValue).toBe(tree.getFruit);
  });

  test('tree tiene el metodo getSpecies y devuelve un string que tiene el método presentTree', () => {
    let tree = new plantTree('pearTree', 'pear');
    tree.setSpecies = 'appleTree';
    tree.setFruit = 'apple';
    expect(tree.getSpecies).toHaveProperty('presentTree');
  });

  test('Al ejecutar presentTree se presentará por consola Este arbol es un ${nuestro_arbol} siendo nuestro arbol el string sobre el que se ejecuta el metodo presentTree', () => {
    console.log = jest.fn();
    'appleTree'.presentTree();
    expect(console.log.mock.calls[0][0]).toBe('Este árbol es un appleTree');
  });

  test('Al ejecutar presentTree se presentará por consola Este arbol es un ${nuestro_arbol} siendo nuestro arbol el string sobre el que se ejecuta el metodo presentTree', () => {
    console.log = jest.fn();
    'appleTree'.presentTree('apple');
    expect(console.log.mock.calls[0][0]).toBe('Este árbol es un appleTree y da apple');
  });

  test('El objeto incluye las propiedades getSpecies, setSpecies, getFruit y setFruit', () => {
    expect(new plantTree()).toHaveProperty('getFruit');
    expect(new plantTree()).toHaveProperty('getSpecies');
    expect(new plantTree()).toHaveProperty('setSpecies');
    expect(new plantTree()).toHaveProperty('setFruit');
  });

  test('Al crear un arbol e invocar setSpecies con appleTree, nuestro arbol tiene appleTree como valor de species', () => {
    var tree = new plantTree('pearTree', 'pear');
    var originalValue = tree.getFruit;
    tree.setSpecies = 'appleTree';
    expect(tree.species).toBe('appleTree');
  });
});
