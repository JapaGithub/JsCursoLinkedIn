"use strict";

var expresion1 = /[0123456789]/; 
// de esta manera busca en el universo de datos para hacer una evaluaion

console.log(expresion1.test('Sucedio en 1996'));

var expresion2 = /[0-9a-zA-Z]/; 
//evaluar rango por numeros 0-9, letras en minusculas y mayusculas
console.log(expresion2.test('Sucedio en 1996'));