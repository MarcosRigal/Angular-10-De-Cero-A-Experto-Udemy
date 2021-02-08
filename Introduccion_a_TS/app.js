"use strict";
//Función anonima autoinvocada
//Para que se auto compile poner en una terminal marcos-pc$tsc -w
(function () {
    // Tipos de variables:
    var NOMBRE = 'Marcos'; //Nos permiten definir una constante que no se puede modificar. Ocupa menos en memoria que los otros tipos de variables se definen en mayusculas
    var apellido = 'Rivera'; //Son variables que existen solo dentro de un Scope (el espacio entre dos {}) fuera de el no existen 
    var edad = 19; //Nos permite definir una variable "global"
    if (true) {
        var apellido_1 = 'Gavilan'; //No redefine el valor del primer apellido crea un nuevo espacio en memoria para esta variable mientras estemos en este scope
    }
    if (true) {
        var edad = 6; //Redefine el valor origina de edad         
    }
    /*
    Tipos de datos:
     - string: cadena de caracteres
     let mensaje: string = 'hola';
     - number: numero
     let numero: number = 123;
     - boolean: puede ser true o false
     let booleano: boolean = true; //false
     - Date:
     
     - any: este tipo de dato acepta cualquier tipo de dato (no debe usarse) se le asigna por defecto a las variables no inicializadas
    */
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
})();
