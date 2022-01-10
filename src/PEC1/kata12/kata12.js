String.prototype.presentTree = function (nuestra_fruta) {
  var nuestro_arbol = this.valueOf();
  if (typeof nuestra_fruta !== 'undefined') {
    console.log(`Este árbol es un ${nuestro_arbol} y da ${nuestra_fruta}`);
  } else {
    console.log(`Este árbol es un ${nuestro_arbol}`);
  }
};
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
      } else {
        throw new Error();
      }
    },
    set setFruit(fruit) {
      let re = new RegExp(this.species.substring(0, 4));
      let checkSpecieRegex = re.test(fruit);
      if (typeof fruit === 'string' && checkSpecieRegex === true) {
        this.fruit = fruit;
      } else {
        throw new Error();
      }
    },
  };
  return obj;
}
