var tree = {
  species: 'appleTree',
  fruit: 'apple',
  getFruit() {
    if (this.hasOwnProperty('fruit') === true) {
      return this.fruit;
    } else {
      return 'No fruit';
    }
  },
};

export { tree };
