const prompt = require("prompt-sync")({sigint: true});

function addition(number1, number2){
    /**
    * Add two numbers
    * @param  number1 {int} a number 
    * @param  number2 {int} a number 
    * @return add {float} the addition of number1 and number2
    */
    let add = number1 + number2;
    return add;
}
console.log(addition(3, 5))


function substraction(number1, number2){
    /**
    * Add two numbers
    * @param  number1 {int} a number 
    * @param  number2 {int} a number 
    * @return substract {float} the substraction of number1 minus number2
    */
    let substract = number1 - number2;
    return substract;
}
console.log(substraction(3, 5))

function multiplication(number1, number2){
    /**
    * Add two numbers
    * @param  number1 {int} a number 
    * @param  number2 {int} a number 
    * @return multiply {float} the multiplication of number1 and number2
    */
    let multiply = number1 * number2;
    return multiply;
}
console.log(multiplication(3, 5))

function division(number1, number2){
    /**
    * Add two numbers
    * @param  number1 {int} a number 
    * @param  number2 {int} a number 
    * @return divide {float} the division of number1 and number2
    */
    let divide = number1 / number2;
    return divide;
}
console.log(division(15, 5))


console.log("____________________Testing the operations/calculator____________________")

//Testing addition
console.log("Probemos la suma") 
let number1 = parseInt(prompt("ingrese el primer número: "))
let number2 = parseInt(prompt("ingrese el segundo número: "))
console.log("La suma de " + number1 + " y " + number2 + " es: " + addition(number1, number2)) 

//Testing substraction
console.log("Probemos la resta") 
number1 = parseInt(prompt("ingrese el primer número: "))
number2 = parseInt(prompt("ingrese el segundo número: "))
console.log("La resta de " + number1 + " menos " + number2 + " es: " + substraction(number1, number2))

//Testing multiplication
console.log("Probemos la multiplicación") 
number1 = parseInt(prompt("ingrese el primer número: "))
number2 = parseInt(prompt("ingrese el segundo número: "))
console.log("La multiplicación de " + number1 + " por " + number2 + " es: " + multiplication(number1, number2))

//Testing division
console.log("Probemos la división") 
number1 = parseInt(prompt("ingrese el primer número: "))
number2 = parseInt(prompt("ingrese el segundo número: "))
console.log("La división de " + number1 + " en " + number2 + " es: " + division(number1, number2))