const prompt = require("prompt-sync")({sigint: true});

function translate(){
    /**
    * Traduce 5 palabras en el diccionario
    * @param  no recibe parametros, se ingresan por consola.
    * @return {string} imprime en pantalla la palabra traducida o por defecto mensaje de error
    */
    word = prompt("Ingresa una palabra: ")
    switch(word){
        case "casa": console.log("house");
        break;
        case "perro": console.log("dog");
        break;
        case "pelota": console.log("ball");
        break;
        case "arbol": console.log("tree");
        break;
        case "genio": console.log("genius");
        break;
        default: console.log("La palabra ingresada es incorrecta");
        break;
    }
}

console.log(translate());
