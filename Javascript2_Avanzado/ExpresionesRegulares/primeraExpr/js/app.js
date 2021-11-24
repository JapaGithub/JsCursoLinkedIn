//"use strict";
try {
 
var expresion1 = new RegExp('abc'); //objeto
console.log(expresion1.test('abc')); //metodo test

var expresion2 = /hola mundo/; //expresion literal

//var parrafom = /tex1 \/n tex2/;

console.log(expresion2.test('El primer programa es el hola mundo'));   
} catch (error) {
    console.log(error);
}