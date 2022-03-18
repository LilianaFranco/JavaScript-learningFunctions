const prompt = require("prompt-sync")({sigint: true});

// FUNCTION DECLARATION

function convertInCm(number){
    /**
    * Convert inches into cm.
    * @param  number {int} a number in inches
    * @return cm {float} number in cm.
    */
    let cm = number * 2.54;
    return cm;
}
console.log(convertInCm(3))

function convertToURL(name){
    /**
    * Convert names into url.
    * @param  name {string} a name
    * @return {string} a url
    */
    return (`https://www.${name}.com`);
}
console.log(convertToURL("lili"));

function exclamation(name){
    /**
    * Convert a phrase into an exclamation
    * @param  name {string} a name
    * @return {string} a url
    */
    return (name + "!");
}
console.log(exclamation("Women who Code"));

function dogAge(years){
    /**
    * Convert human years into dog years
    * @param  years {int} regular dog age in human years
    * @return dogAge {int} age of dog according to dog years
    */
    let dogAge = years * 7;
    return (dogAge);
}
console.log(dogAge(4));

function hourPayment(number){
    /**
    * Calculate hour payment taking into account you work 40 hours per month.
    * @param  number {int} salary provided by the user
    * @return hourPayment {int} hour payment
    */
    let payment = prompt("ingrese su salario: ")
    number = payment
    let hourPayment = number / 40;
    return (hourPayment);
}
console.log(hourPayment(1000000));

function calculateImc(height, weight){
    /**
    * Calculate the IMC (Body Mass Index)
    * @param  height {float} height measured in meters
    * @param  weight {float} weight measured in kg
    * @return imc {float} IMC (Body Mass Index)
    */
    let imc = weight/height;
    return (imc);
}
console.log(calculateImc(1.55, 61));


//FUNCTION EXPRESSIONS
//The same functions converted into arrow functions. 

let cm = number => number * 2.54;
    /**
    * Convert inches into cm.
    * @param  {int} a number in inches
    * @return {float} number in cm.
    */
console.log(convertInCm(3))

let url = name => "https://www." +name + ".com"
    /**
    * Convert names into url.
    * @param  {string} a name
    * @return {string} a url
    */
console.log(convertToURL("lili"));

let exclamationPhrase = name => (name + "!");
    /**
    * Convert a phrase into an exclamation
    * @param  {string} a name
    * @return {string} a url
    */
console.log(exclamationPhrase("Women who Code"));

let myDogAge = years => years * 7;
    /**
    * Convert human years into dog years
    * @param  {int} regular dog age in human years
    * @return {int} age of dog according to dog years
    */
console.log(myDogAge(4));

let imc = (height, weight) => weight/height;
    /**
    * Calculate the IMC (Body Mass Index)
    * @param  {float} height measured in meters
    * @param  {float} weight measured in kg
    * @return {float} IMC (Body Mass Index)
    */
console.log(imc(1.55, 61));

// OTHER EXAMPLES

function goUpperCase(phrase){
    /**
    * Convert lower case phras into upper case
    * @param  {string} phrase to be changed
    * @return {string} the phrase in upper case
    */
    let changeUpper = phrase.toUpperCase();
    return changeUpper;
}
console.log(goUpperCase("esto va en mayúsculas"));
let goUpper = phrase => phrase.toUpperCase(); // array function
console.log(goUpper("esto va en mayúsculas"));

function dataType(data){
    /**
    * Convert lower case phras into upper case
    * @param  {} data included to identified the type
    * @return {} type of data
    */
    return typeof(data);
}
console.log(dataType("esto va en mayúsculas"));

let typeOfData = parameter => typeof(parameter); // array function
console.log(typeOfData("esto va en mayúsculas"));

function findCircumference(radio){
    /**
    * Finds the circuference of a circle
    * @param  {int} radio of the given circle
    * @return {float} circumference of the circle
    */
    let circumference = 2 * Math.PI * radio;
    return circumference;
}
console.log(findCircumference(3));

let findingCircumference = radio => 2 * Math.PI * radio; // array function
console.log(findingCircumference(6));

