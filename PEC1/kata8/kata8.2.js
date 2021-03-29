function getFruit(tree) {
  if (tree.hasOwnProperty('fruit') === true) {
    return tree.fruit;
  } else {
    return 'No fruit';
  }
}

var noFruitTree = {
  species: 'cypressTree',
};

export { getFruit, noFruitTree };
