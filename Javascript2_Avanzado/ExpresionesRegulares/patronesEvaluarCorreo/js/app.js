//"use strict"

$(function (){
    var contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function(e){
        e.preventDefault();//cancela el comportamiento por default de mandar a otra pagina

        console.log('Acciono el boton de enviar y el resultado es:',isValidEmail());
    }

    var isValidEmail = function(){
        var email = document.getElementById('email');//asignando todo el imput de email a variable 
        console.log(email.value);
        var validation = /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value);
        console.log(validation);
        return validation;
    //retorna y evalua la variable email
    //^\w+([\.\+\-\_]?w+) ^\w+ inicio para cualquier  tipo de letra o numero, una o mas repeticiones
    //([\.\+\-\_]) un agrupado para establecer si permite algun tipo de caracter, 
    //dentro de ese conjunto y ? para indicar que estos signos pueden o no estar dentro de la 
    //cadena de texto
    //\w+ con esto decimos que podemos tener cualquier tipo de caracteres 1 o mas veces
    //^\w+([\.\+\-\_]?\w+)* ->* como esta agrupada en una subexpresio
    //se le indica q puede o no estar, es decir q puede aplicar 0 o mas veces esta parte 

    //@ indica la mitad del correo
    //([\.-])?w+*/ indica el dominio, puede tener o no uno o mas de esos caracteres
    
    //(\.\w{2-4}+$) inidca el final del correo, se conola un rago de 2 a 4 letras
    //$ indica que este dominio va existir al final de toda la cadena
}
});