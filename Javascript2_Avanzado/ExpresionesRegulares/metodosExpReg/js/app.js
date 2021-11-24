"use strict"
/////////////////////////////////////////////////////////////////////////////////////////

                //METODO REPLACE()

var mensaje = 'El cliente pidio comer pan relleno,pan relleno,pan relleno';
console.log(mensaje.replace(/pan relleno/g,'Perro Caliente'));
//el metodo replace esta incluido para todas las cadenas de texto
// al colocarl pan/g indica que para todas (global  ) las plabras que tenga pan remplazarla 
//se pueden usar todas las tecnicas, universos, limites, etc.

/////////////////////////////////////////////////////////////////////////////////////////

                //METODO SEARCH()

var mensaje2 = 'Esta historia continuara';

//          EJEMPLOS con variantes de busqueda de patrones
// \W cualquier caracter que no sea alfanumerico
// \S cualquier caracater que no tenga un espacio en blanco

console.log(mensaje2.search(/\W/));// busca el espacio el primer espacio en blanco
//search busca solo la primera coincidencia.

