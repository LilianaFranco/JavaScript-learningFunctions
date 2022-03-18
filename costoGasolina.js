function litrosConsumidos(litros){
    /**
    * devuelve el sobrecosto por litro de gasolina comprados
    * @param  litros {int} el número de litros comprados
    * @return {int} sobrevosto pro litros de gasolina comprados
    */
    if (litros >=0 && litros <=25){
        return 50
    }
    else{
        return 25
    }
}


function totalAPagar(vehiculo, litrosCons){
    /**
    * devuelve el costo de gasolina
    * @param  vehiculo {string} el tipo de vehiculo que compra la gasolina
    * @param  vehiculo litrosCons{int} numero de litros que se van a comprar
    * @return  {int} precio total de la gasolina
    */
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