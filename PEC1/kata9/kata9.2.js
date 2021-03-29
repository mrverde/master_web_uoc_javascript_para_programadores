export default function plantTree(species, fruit) {
  if (typeof species === 'string' && typeof fruit === 'string') {
    var obj = {
      species: species,
      fruit: fruit,
      get getFruit() {
        return this.fruit;
      },
    };
    return obj;
  } else {
    return null;
  }
}
