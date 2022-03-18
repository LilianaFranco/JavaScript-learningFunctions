// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function guessTheNumber(number) {
    /**
    * Compara un numero entregado con un número aleatorio de 1 a 10
    * @param  number{int} el número entregado por el usuario
    * @return esNumeroSecretro {string} felicitaciones si adivíno. Incorrecto si se equivocó
    */
    let numeroSecreto = getRandomInt(0, 10)
    if (number == numeroSecreto){
        console.log(numeroSecreto)
        console.log("Felicitaciones, has adivinado el número secreto")
    }
    else{
        console.log("Incorrecto, el número secreto era: " + numeroSecreto )
    }
}

console.log (guessTheNumber(3))

