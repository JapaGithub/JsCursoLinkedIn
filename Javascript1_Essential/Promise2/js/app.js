"use strict";

//Trabajando con Promesas 

var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');
//var nombre = document.getElementById('name');

boton.addEventListener('click', function(){

    getPosts()
    .then(data => data.json())
    .then(posts => {
        mostrarDatos(posts);
        return getCountries(); 
    })
    .then(data => data.json())
    .then(countries => {
        //console.log(countries);
        mostrarBanderas(countries);
    })

    }
);

function getPosts(){
    return fetch('http://jsonplaceholder.typicode.com/posts');
}

function getCountries(){
    return fetch('https://restcountries.com/v3.1/all');
}


function mostrarBanderas(countries){
    contBanderas.innerHTML = ' ';
    console.log(countries);
    countries.map((country, i) =>{
        
        let bandera = document.createElement('img');
        let nombre = document.createElement('p');
        let lenguaje = document.createElement('h4');
        bandera.src = country.flags.svg;
        nombre.name = country.common;
        lenguaje.capital = country.capital;
        
        //bandera.src = country.name.common;
    
        bandera.width = '40';
        bandera.height = '30';
        nombre.innerHTML = country.name.common;
       

        contBanderas.appendChild(bandera);
        contBanderas.appendChild(nombre);
        contBanderas.appendChild(lenguaje);
        //console.log((name));
    })
}

function mostrarDatos(posts){
     posts.map((post, i) =>{
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);    
    })
}