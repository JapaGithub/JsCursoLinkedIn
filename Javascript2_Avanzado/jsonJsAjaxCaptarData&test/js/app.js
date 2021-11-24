var contenedor = document.getElementById('contenedor');
var contenedor1 = document.getElementById('contenedor1');
var boton = document.getElementById('boton');
var title = document.getElementById('title');

////////////////////////////////////////////
//uso de caracteres especiales

var expresion1 = /\d\d-\d\d\-\d\d\d\d/
console.log(expresion1.test('29-06-2007'));
//negacion de patrones
var expresion2 = /[01]/; //da positivo xq evalua el numero binario
console.log(expresion2.test('01010110100010110'));

var expresion3 = /[^01]/;// con ^ niego toda la expresion
console.log(expresion3.test('01010110100010110'));

//trabajar con caracteres ezpeciales para repetir patrones
//    +  *
var expresion4 = /\d+/;
console.log(expresion4.test('1990')); //permite 1 o dos expresiones pero debe repetirse al menos una vez

var expresion5 = /\d*/;
console.log(expresion5.test(''));//permite una o mas expresiones hasta 0 expresiones


//conteo de patrones de expresiones regulares
var expresion6 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(expresion6);
console.log(expresion6.test('08-10-1990 10:10'));

//patrones no sensibles a mayusculas y minusculas
var expresion7 = /hola mundo/i; //colocandole la i indica que ya no es case sensitive.
console.log(expresion7.test('Hola mundo')); 

//agrupar patrones en subexpresiones

var expresion8 = /Wooo+(hooo+)+/i;
jarron.banco.blonda
//Wooohoooo EJEMPLO

console.log(expresion8.test('wooohooohohohohooooohooo'));

////////////////////////////////////////////



boton.addEventListener('click', function(){
    //console.log('dentro del boton');
    getTitle()
    .then(data => data.json())
    .then(titlejson =>{
        console.log(titlejson);
        mostrarTitulo(titlejson);        
    })

    getTable()
    .then(data => data.json())
    .then(tabla =>{
        console.log(tabla);
        mostrarDataTable(tabla);
       // mostrarTitle();
        return mostrarData2(tabla);
        
    })


});
try {
    function getTable(){
        return fetch('js/tabla.json');
        
    }    
} catch (error){
    console.log(error);
}


try {
    function getTitle(){
        return fetch('js/titulo.json');
        
    }
} catch (error) {
    console.log(error);
}

function mostrarDataTable(tabla){
    contenedor.innerHTML = '';//deja en blanco el contenedor

    tabla.map((tabla, i) =>{
        let grupo = document.createElement('tr');
        let descripcion = document.createElement('td');

        grupo.innerHTML = tabla.Grupo;
        descripcion.innerHTML = tabla.Descripcion;

        contenedor.appendChild(grupo);
        contenedor.appendChild(descripcion);
    })
}


function mostrarData2(tabla){
    contenedor1.innerHTML = '';

    for (let datosTabla  of tabla) {
        //console.log(datosTabla.Grupo);
        //se coloca un signo + xq es un ciclo
        contenedor1.innerHTML += `
        <tr>
                <th scope="row">${datosTabla.id}</th>
                <th scope="col">\\${datosTabla.Grupo}</th>
                <th scope="col">${datosTabla.Descripcion}</th>
         </tr>
        
        `
    }

}
function mostrarTitulo(titlejson){
    console.log('dentro de mostrarTitulo');

    for (let tituloFor of titlejson) {
     
        title.innerHTML =`
            <h1 style="color : rgb(12, 75, 15)"> ${tituloFor.titulo}</h1>
        
            `   
    }
}
