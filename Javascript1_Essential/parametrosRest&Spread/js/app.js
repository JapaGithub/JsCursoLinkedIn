//"use strict"

// Paramtros Rest and Spread

function cocinar(ingredientes1, ingredientes2, ingredientes3, ...other) {
    //  console.log("Ingredientes: " + ingredientes1);
    //  console.log("Ingredientes: " + ingredientes2);
    //  console.log("Ingredientes: " + ingredientes3);
    //  console.log("Ingredientes: " + other);
    //  console.log(cocinar.length + other.length);
    
     let listaCompletaIngredientes = (cocinar.length + other.length);
    console.log("Numero total de ingredientes: " +listaCompletaIngredientes);

     for (let i = 0; i < listaCompletaIngredientes; i++){
         console.log("Nº" + [i+1] + " - "+(cocinar.arguments[i]));
         //debugger;
     }

    // for (let j = 0; j < cocinar.length; j++) {
    //     console.log("adentro")
    //     console.log(nuevaLista[j]);
        
    // }
    //debugger;
    return listaCompletaIngredientes;
     
}
var ingredientesPrincipales = ["Pollo", "Tomate"];

var nuevaLista = cocinar(...ingredientesPrincipales , "Carne Molida", "Pan de Hamburguesa",
 "Cebolla", "Mayonesa", "Mostaza", "Salsa de Tomate", "BBQ","Tocineta");
//console.log(nuevaLista.length);
//let prueba = cocinar.length;
    //console.log("El numero total de ingredientes "+prueba + );