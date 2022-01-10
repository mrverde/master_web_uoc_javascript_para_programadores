const car = {
  brand: 'Ford',
  getBrand() {
    console.log(this.brand);
  },
};

car.getBrand(); // Ford
const cardBrandFunction = car.getBrand;

cardBrandFunction(); // undefined

/* En este caso ocurre que al hacer la ejecución de car.getBrand(),
lo estamos haciendo sobre el método getBrand definido dentro del objeto car,
por ello al utilizar el this aparece Ford, porque el scope donde se ejecuta
el this tiene definido en su interior brand.

Cuando asignamos la función getBrand a la constante cardBrandFunction y la
ejecutamos en las dos últimas líneas, se está ejecutando sobre el scope global,
en el que no está definido el objeto brand, por lo que el resultado de su
ejecución es undefined.

Para que la ejecución de cardBrandFunction(); devuelva Ford podemos hacer varias
cosas:

1) Podríamos declarar la variable brand en el scope global
*/
const car = {
  brand: 'Ford',
  getBrand() {
    console.log(this.brand);
  },
};

car.getBrand(); // Ford

var brand = car.brand;
const cardBrandFunction = car.getBrand;
cardBrandFunction(); // Ford

/* 2) Podríamos asignar la función cardBrandFunction dentro del objeto car
 */
const car = {
  brand: 'Ford',
  getBrand() {
    console.log(this.brand);
  },
};

car.getBrand(); // Ford
car.cardBrandFunction = car.getBrand;
car.cardBrandFunction(); // Ford
