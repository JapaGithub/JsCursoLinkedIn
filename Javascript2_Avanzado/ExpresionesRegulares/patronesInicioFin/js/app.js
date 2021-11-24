"use strict"
var expresionInicio = /^Any/;
var expresionFin = /Javascript$/;
var expresionInicioFin = /^Any|Javascript$/;

//OJO [^] dentro de un corchete se usa como una negacion
//^ Inicio
//$ FInal
console.log(expresionInicio.test('Any app that can be imagined can be made in Javascript'));
console.log(expresionFin.test('Any app that can be imagined can be made in Javascript'));
console.log(expresionInicioFin.test('Any app that can be imagined can be made in Javascript'));
