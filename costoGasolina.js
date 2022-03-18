
function litrosConsumidos(litros){
    if (litros >=0 && litros <=25){
        return 50
    }
    else{
        return 25
    }
}

function totalAPagar(vehiculo, litrosCons){
    switch(vehiculo){
        case "coche": console.log("El total a pagar es: " + ((86*litrosCons) + litrosConsumidos(litrosCons)))
        break;
        case "moto": console.log("El total a pagar es: " + ((70*litrosCons) + litrosConsumidos(litrosCons)))
        break;
        case "autobús": console.log("El total a pagar es: " + ((55*litrosCons) + litrosConsumidos(litrosCons)))
        break;
    }
}

let total = totalAPagar("moto", 30)
console.log(total)