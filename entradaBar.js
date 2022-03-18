const prompt = require("prompt-sync")({ sigint: true });

let edad = 53 // crear la edad
if(edad > 0 && edad < 18) {// menor de edad
    console.log("No puede pasar al bar.")
    } 
    else if (edad <= 0) {// invalido
        console.log("Error, edad inválida. Por favor ingrese un número válido.")
        } 
        else if (edad >= 18 && edad < 21 ){ // entrada y no bebida de alcohol
            console.log("Puede pasar al bar, pero no puede tomar alcohol.")
            esImpar (edad)
        }
            else if (edad == 21){//bienvenida 21 anos
                console.log("bienvenido, felicitaciones por haber llegado a la mayoría de edad.")   
                esImpar (edad)
            }
                else{
                    console.log("Puede pasar al bar y tomar alcohol.")
                    esImpar (edad)
                }

function esImpar (edad) { 
    if (edad % 2 != 0) {
        console.log("sabias que tu edad es Impar")
        }   
}


