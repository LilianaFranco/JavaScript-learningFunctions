const prompt = require("prompt-sync")({sigint: true});

function rateMovie(rate){
    /**
    * Recibe la valoracion de una pelicula y entrega feedback
    * @param  vehiculo {string} el tipo de vehiculo que compra la gasolina
    * @param  vehiculo litrosCons{int} numero de litros que se van a comprar
    * @return  {int} precio total de la gasolina
    */
    rate = prompt("Ingresa tu valoración: ")
    switch(rate){
        case "muy mala": console.log("Calificaste la película como: " + rate + ". Lo lamentamos mucho.");
        break;
        case "mala": console.log("Calificaste la película como: " + rate + ". Lo lamentamos mucho.");
        break;
        case "mediocre": console.log("Calificaste la película como: " + rate + ". Lo lamentamos mucho.");
        break;
        case "buena": console.log("Calificaste la película como: " + rate + ". ¡Nos alegra mucho!");
        break;
        case "muy buena": console.log("Calificaste la película como: " + rate + ". ¡Nos alegra mucho!");
        break;
        default: console.log("Ingresaste un valor inválido");
        break;
    }
}

console.log(rateMovie("Muy mala"));