"use strict"
$(function(){

    var contacForm = document.getElementById('contactForm');

    contacForm.onsubmit = function(e){
        e.preventDefault();

        console.log('Su cuenta de Twitter es:', isValidTwitter());

    }

    var isValidTwitter = function(){
        var twitter = document.getElementById('twitter');
        console.log(twitter.value);
        var validation = /^@?(\w+)$/.test(twitter.value);
        console.log(validation);
        var validation = validation ? 'Aprobada' :'Erronea';
        return validation;
    }

})