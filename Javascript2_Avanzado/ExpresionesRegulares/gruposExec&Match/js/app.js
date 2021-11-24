"use strict"

var expresion1  = /\d+/.exec('Del año 1994'); 
//exec recibe como parametro la expresion que se va evaluar y da el objeto, indice y 
//el input(entrada que recibiste)
console.log(expresion1);

console.log('Hasta 1994'.match(/\d+/));
//match se encuentra incluido el metodo llamado match,
// se coloca la evalucaion dentro del parametro de match
//se puede pasar un match a una cadena de texto sin necesidad de pasarlo en una variable