"use strict"

//OJO cada vez que invocamos el exec el lastIndex va cambiando de manera global
var expresion1 = /y/g;

console.log(expresion1.lastIndex);//antes

expresion1.lastIndex = 6; //forza para que arranque a partir de esta modificacion
var coincidencia = expresion1.exec('sibr yfx sibr yfx');//da la posicion 5 

console.log(coincidencia); 
console.log(expresion1.lastIndex);//lo suma a lo evaluado antes = 6 
//luego de modificar el arracnque termina en la posicion 15 que es la siguiente evaluacion que corresponde

var expresion2 = /\d/g;

console.log(expresion2.exec('Pedi 4 tacos y 1 agua'));
console.log(expresion2.exec('Pedi 4 tacos y 1 agua'));
expresion2.lastIndex = 0;//esto hace que pueda reiniciar d 0
console.log(expresion2.exec('Pedi 4 tacos y 1 agua'));//da como resultado null
//xq ya no hay un tercero y da nulo, xq se esta ejecutando en la misma cadena de texto
//se puede resetear el lastIndex (linea 8) o guardandolo en una variable 