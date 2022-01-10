import plantTree from './kata9.4';

describe('Kata #9.4: Objetos', () => {
  test('El objeto incluye las propiedades getSpecies, setSpecies, getFruit y setFruit', () => {
    expect(plantTree()).toHaveProperty('getFruit');
    expect(plantTree()).toHaveProperty('getSpecies');
    expect(plantTree()).toHaveProperty('setSpecies');
    expect(plantTree()).toHaveProperty('setFruit');
  });

  test('Al crear un arbol e invocar setFruit con 12, nuestro arbol mantiene su valor previo', () => {
    var tree = plantTree('appleTree', 'apple');
    var originalValue = tree.getFruit;
    tree.setFruit = 12;
    expect(originalValue).toBe(tree.getFruit);
  });

  test('Al crear un arbol e invocar setFruit con apple, nuestro arbol tiene apple como valor de fruit', () => {
    var tree = plantTree('pearTree', 'pear');
    tree.setFruit = 'apple';
    expect(tree.fruit).toBe('apple');
  });

  test('Al crear un arbol e invocar setSpecies con appleTree, nuestro arbol tiene appleTree como valor de species', () => {
    var tree = plantTree('pearTree', 'pear');
    tree.setSpecies = 'appleTree';
    expect(tree.species).toBe('appleTree');
  });

  test('Al invocar con dos strings devuelve un objeto con las propiedades getFruit y getSpecies', () => {
    const obj = plantTree('pearTree', 'pear');
    expect(obj).toHaveProperty('getFruit');
    expect(obj).toHaveProperty('getSpecies');
  });
});
