// function calculateCost(sandwichType, bread, chesse, tomato, lettuce, onion, mayo, mustard){
//     let cost = 0;
//     switch (sandwichType){
//         case "pollo":
//             cost = 150;
//             break;
//         case "carne":
//             cost = 200;
//             break;
//         case "veggie":
//             cost = 100;
//             break;
//     }
//     switch (bread){
//         case "blanco":
//             cost = cost + 50;
//             break;
//         case "negro":
//             cost = cost + 60;
//             break;
//         case "s/gluten":
//             cost = cost + 75;
//             break;
//     }

//     chesse == true? cost + 20: "";
//     tomato == true? cost + 15: "";
//     lettuce == true? cost + 10: "";
//     onion == true? cost + 15: "";
//     mayo == true? cost + 5: "";
//     mustard == true? cost + 5: "";

//     return cost;
// }

// let sandwichCost = calculateCost("veggie", "negro", true, true, true, true, true, true)

// console.log(sandwichCost)

function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    let i;
    let contador = 0;
    for (i=1; i<=numero; i++){
        if (i%2 !== 0){
            contador++;
            i++;
        }
    }
    return contador; 
}

let contado = noParesDeContarImparesHasta(21);
console.log(contado)