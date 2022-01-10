export default function plantTree(species, fruit) {
  if (typeof species === 'string' && typeof fruit === 'string') {
    var obj = {
      species: species,
      fruit: fruit,
    };
    return obj;
  } else {
    return null;
  }
}
