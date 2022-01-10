/*
Tenemos una funcion denominada test en cuyo interior podemos
encontrar:

1 -> console.log(a); -> Esta linea imprime en consola el valor
de la variable a. En este caso como la variable a esta definida
posteriormente a su uso en el console.log su valor es undefined
que es lo que se nos muestra en consola

2 -> console.log(foo()); -> En este caso tenemos una llamada a
la funcion foo, que es una funcion definida dentro de la funcion
test. Si estan dentro del mismo scope, las funciones pueden ser
declaradas posteriormente en el codigo a su llamada, por lo que
en este caso como la funcion foo devuelve 2 si que se nos muestra
en la consola el valor 2.

3 -> var = a; -> Aqui tenemos la declaración de la variable a con
valor 1

4 -> function foo() {return 2;} -> Aquí se declara la función foo
que es una función que devuelve el valor 2

5 -> test(); -> Con esta línea ejecutamos la función test.

*/

function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
