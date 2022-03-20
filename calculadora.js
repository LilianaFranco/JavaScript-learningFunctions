const prompt = require("prompt-sync")({sigint: true});

// CALCULADORA NIVEL I

// Ejercicio 1
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

// // Ejercicio 2
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

// Ejercicio 3
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

// Ejercicio 4
function division(number1, number2){
    /**
    * Add two numbers
    * @param  number1 {float} a number 
    * @param  number2 {float} a number 
    * @return divide {float} the division of number1 and number2
    */
    let divide = number1 / number2;
    return divide;
}
console.log(division(15, 5))

// // CALCULADORA NIVEL II
// console.log("____________________Testing the operations/calculator____________________")

// //Testing addition
console.log("Probemos la suma") 
let number1 = parseInt(prompt("ingrese el primer número: "))
let number2 = parseInt(prompt("ingrese el segundo número: "))
console.log("La suma de " + number1 + " y " + number2 + " es: " + addition(number1, number2)) 

// //Testing substraction
console.log("Probemos la resta") 
number1 = parseInt(prompt("ingrese el primer número: "))
number2 = parseInt(prompt("ingrese el segundo número: "))
console.log("La resta de " + number1 + " menos " + number2 + " es: " + substraction(number1, number2))

// //Testing multiplication
console.log("Probemos la multiplicación") 
number1 = parseInt(prompt("ingrese el primer número: "))
number2 = parseInt(prompt("ingrese el segundo número: "))
console.log("La multiplicación de " + number1 + " por " + number2 + " es: " + multiplication(number1, number2))

// //Testing division
console.log("Probemos la división") 
number1 = parseInt(prompt("ingrese el primer número: "))
number2 = parseInt(prompt("ingrese el segundo número: "))
console.log("La división de " + number1 + " en " + number2 + " es: " + division(number1, number2))

// CALCULADORA NIVEL III

//Ejercicio 1
function squareRoot(number){
/**
    * Provide square root of a given number
    * @param  numberToSquare {int} a number to find the square root
    * @return squareRoot {float} the square root
    */
    let squareRoot = multiplication(number, number)
    return squareRoot
}
console.log(squareRoot(5))

//Ejercicio 2
function average(number1, number2, number3){
    /**
    * Provide the average of three numbers
    * @param  number1, number2, number3 {int} numbers to find the average
    * @return result {float} average of the given three numbers
    */
    let suma = addition(number1, number2)
    suma = addition(suma, number3)
    let result = division(suma, 3)
    return result
}
console.log(average(3,7,8))

//Ejercicio 3
function percentage(number1, number2){
    /**
    * Calculate the percentage of one number
    * @param  number1 {int} a given number
    * @return result {float} the percentage number2 of a given number1.
    */
    let result = division(multiplication(number1,number2),100)
    return result
}
console.log(percentage(300,15))

//Ejercicio 4
function findPercentage(number1, number2){
    /**
    * Convert a value in percentage when the value representing 100% is already known.
    * @param  number1 {int} quantity that we want to convert into percentage
    * @param  number1 {int} quantity representing 100%
    * @return result {float} number1 converted into percentage of number2
    */
    let result = division(multiplication(number1,100),number2)
    return result
}
console.log(findPercentage(230000,1000000))