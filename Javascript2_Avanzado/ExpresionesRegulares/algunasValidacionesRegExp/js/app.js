"use strict"
$(function () {

    var contacForm = document.getElementById('contactForm');

    contacForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('La URL es:', isValidUrl());
        console.log('La contraseña es segura?:', isValidPass());
        console.log('El numero esta correcto?:', isValidPhone());
        console.log('El numero de tarjeta que introdujo es:', isValidCreditCard());
        console.log('El codigo postal ingresado es:', isValidPostalCode());
        console.log('El usuario es;', isValidUserName());
    }
    var isValidUrl = function(){
        var url = document.getElementById('url');
        var validationUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/.test(url.value);
        return validationUrl;
    }

    var isValidPass = function(){
        var pass = document.getElementById('pwd');
        var validationPass =/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(pwd.value);
        return validationPass;
    }

    var isValidPhone = function(){
        var phone = document.getElementById('phone');
        var validationPhone = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(phone.value)
        return validationPhone;
    }
    /** 
    * Tarjetas de credito
    */
   var isValidCreditCard = function () {
       var phone = document.getElementById('tcredito');
       return /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\ d{2}-?\s?\d{6}-?\s?\d{5}$/.test(tcredito.value)
   }

   /**
    * Código postal
    */
   var isValidPostalCode = function () {
       var phone = document.getElementById('codPost');
       return /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(codPost.value)
   }


   var isValidUserName = function () {
       var user = document.getElementById('user');
       return /^[a-z\d_]{6,30}$/i.test(user.value)
   }



})