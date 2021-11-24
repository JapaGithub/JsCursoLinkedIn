"use strict"

var expresion1 = /\bcat\b/;//con \b hasta \b limita de un punto a otro para forzar que se cumpla ese patron.
//cuando yo requiera forzar que ingresen justo esa respuesta
console.log(expresion1.test('cat'));