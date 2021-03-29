export default function plantTree(species, fruit) {
  var obj = {
    species: species,
    fruit: fruit,
    get getFruit() {
      return this.fruit;
    },
    get getSpecies() {
      return this.species;
    },
    set setSpecies(species) {
      if (typeof species === 'string') {
        this.species = species;
      }
    },
    set setFruit(fruit) {
      if (typeof fruit === 'string') {
        this.fruit = fruit;
      }
    },
  };
  return obj;
}
