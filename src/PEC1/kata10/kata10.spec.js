import plantTree from './kata10';

describe('Kata #10: Prototipo', () => {
  test('tree tiene el metodo getSpecies y devuelve un string que tiene el método presentTree', () => {
    let tree = plantTree();
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
    expect(plantTree()).toHaveProperty('getFruit');
    expect(plantTree()).toHaveProperty('getSpecies');
    expect(plantTree()).toHaveProperty('setSpecies');
    expect(plantTree()).toHaveProperty('setFruit');
  });

  test('Al crear un arbol e invocar setFruit con 12, nuestro arbol mantiene su valor previo', () => {
    var tree = plantTree('pearTree', 'pear');
    var originalValue = tree.getFruit;
    tree.setFruit = 12;
    expect(originalValue).toBe(tree.getFruit);
  });

  test('Al crear un arbol e invocar setFruit con apple, nuestro arbol tiene apple como valor de fruit', () => {
    var tree = plantTree('pearTree', 'pear');
    var originalValue = tree.getFruit;
    tree.setFruit = 'apple';
    expect(tree.fruit).toBe('apple');
  });

  test('Al crear un arbol e invocar setSpecies con appleTree, nuestro arbol tiene appleTree como valor de species', () => {
    var tree = plantTree('pearTree', 'pear');
    var originalValue = tree.getFruit;
    tree.setSpecies = 'appleTree';
    expect(tree.species).toBe('appleTree');
  });
});
