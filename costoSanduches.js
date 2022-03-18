function calculateCost(sandwichType, bread, cheese, tomato, lettuce, onion, mayo, mustard){
    /**
    * devuelve el precio de un sanduche según sus ingredientes
    * @param  sandwichType {string} el tipo de sandwich, es de tres tipos
    * @param  bread {string} el tipo de pan, es de tres tipos
    * @param  cheese {boolean} true si agergó, false sino agregó queso
    * @param  tomato {boolean} true si agergó, false sino agregó tomate
    * @param  lettuce {boolean} true si agergó, false sino agregó lechuga
    * @param  onion {boolean} true si agergó, false sino agregó cebolla
    * @param  mayo {boolean} true si agergó, false sino agregó mayonesa
    * @param  mustard {boolean} true si agergó, false sino agregó mostaza
    * @return cost {int} costo del sanduche
    */
    let cost = 0;
    switch (sandwichType){
        case "pollo":
            cost = 150;
            break;
        case "carne":
            cost = 200;
            break;
        case "veggie":
            cost = 100;
            break;
    }
    switch (bread){
        case "blanco":
            cost = cost + 50;
            break;
        case "negro":
            cost = cost + 60;
            break;
        case "s/gluten":
            cost = cost + 75;
            break;
    }

    cheese == true? cost + 20: "";
    tomato == true? cost + 15: "";
    lettuce == true? cost + 10: "";
    onion == true? cost + 15: "";
    mayo == true? cost + 5: "";
    mustard == true? cost + 5: "";

    return cost;
}

let sandwichCost = calculateCost("veggie", "negro", true, true, true, true, true, true)

console.log(sandwichCost)


