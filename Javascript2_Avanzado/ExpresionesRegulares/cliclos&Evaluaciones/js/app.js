"use strict"

var mensaje = 'Entro por la puerta 2, luego fue a la numero 6, paso por la 100, descanso hasta continuar con la 1000';

var patronExpresion = /\b(\d+)\b/g;
//se limita para forzar que el patron se encuentre siempre y limitar a econtrar un numero expecificamente

var match;

while (match = patronExpresion.exec(mensaje)) {
    console.log(match);
    console.log('Se concontro', match[1], 'en la posicion: ', match.index);
}