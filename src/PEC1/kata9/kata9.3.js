export default function plantTree(species, fruit) {
  if (typeof species === 'string' && typeof fruit === 'string') {
    var obj = {
      get getFruit() {
        return fruit;
      },
      get getSpecies() {
        return species;
      },
    };
    return obj;
  } else {
    return null;
  }
}
