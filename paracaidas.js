function openParachute(speed, height){
     /**
    * Ayuda a decidir si se debe o no abrirse un paracaidas
    * @param  speed {int} velocidad de caida
    * @param  height {int} altura a la que se encuentra el paracaidista
    * @return  {string} imprime en pantalla si debe o no abrirse el paracaidas
    */
    if (speed <1000){
        if (height>= 2000 && speed <3000){
            console.log("Puedes abrir el paracaidas")
        }
        else{
        console.log("No puedes abrir el paracaidas")
        }
    } 
    else{
        console.log("No puedes abrir el paracaidas")
        }  
}
    
let deboAbrir = openParachute(1001, 00);
console.log(deboAbrir);

