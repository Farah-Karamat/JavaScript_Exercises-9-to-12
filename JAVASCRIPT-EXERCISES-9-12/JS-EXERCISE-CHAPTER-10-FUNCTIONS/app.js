/*Q.1. Sum of Two Numbers:
Write a function that takes two numbers as arguments and returns their sum.*/
//Answer:
// function sum(num1, num2){
// return num1 + num2;
// }
// console.log(10 + 5);

//=========================================================================================================================================

/*Q.2.Convert Celsius to Fahrenheit:
Create a function that converts a temperature from Celsius to Fahrenheit using the formula F = C * 9/5 + 32.*/
//Answer:
// function celsiusToFahrenheit(celsius){
// var fahrenheit = (celsius * 9/5) + 32;
// return fahrenheit;
// }
// var celsiusTemp = prompt("Enter the temperature in celsius");
// var fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
// console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp.toFixed(2)}°F`);

//=========================================================================================================================================

/*Q.3.Check for Prime Number:
Write a function that takes a number as input and returns true if the number is prime, and false otherwise.*/
//Answer:
// function isPrime(num) {
// if (num <= 1) {
// return false; // Numbers less than or equal to 1 are not prime
// }
// for (let i = 2; i < num; i++) {
// if (num % i === 0) {
// return false; // If divisible, it's not prime
// }
// }
// return true; // If no divisors, it's prime
// }

// let number = prompt("Enter a number:");

// if (isPrime(number)) {
//     console.log(`${number} is a prime number.`);
// } else {
//     console.log(`${number} is not a prime number.`);
// }

//=========================================================================================================================================

/*Q.4.Reverse a String:
Create a function that takes a string as input and returns the string reversed.*/
//Answer:
// function abc (){
// return abc;
// }
// console.log("Hello World!");

//=========================================================================================================================================

/*Q.5. Factorial of a Number:
Write a function that calculates the factorial of a given number (e.g., factorial(5) should return 120).*/
//Answer:
//Note: factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.
// function factorial (num){
// let result = 1;
// for(let i = 1; i <= num; i++){
// result *= i;
// }
// return result;
// }
// let number = prompt ("Enter a number:");
// let fact = factorial(number);
// console.log(`The factorial of ${number} is ${fact}`);

//=========================================================================================================================================

/*Q.6.Greet User (No Parameters):
Write a function that prints a generic greeting message like "Hello, welcome!" without taking any parameters.*/
//Answer:
// function greet (){
// console.log("Hello, welcome!")
// }
// greet();

//=========================================================================================================================================

/*Q.7. Greet by Name (With Parameter):
Create a function that takes a name as a parameter and prints a personalized greeting, e.g., "Hello, [name]!".*/
//Answer:
// function greet (name){
// console.log(name);
// }
// greet("Hello Jiya!");

//=========================================================================================================================================

/*Q.8. Sum of Two Numbers (With Parameters):
Write a function that accepts two numbers as parameters and returns their sum.*/
//Answer:
// function sum (num1, num2){
// return num1 + num2;
// }
// console.log(10 + 5);

//=========================================================================================================================================

/*Q.9.Random Number Generator (No Parameters):
Create a function that generates and returns a random number between 0 and 100. This function does not require any parameters.*/
//Answer:
// function generateRandomNumber(){
// return Math.random()*101;
// }
// let randomNumber = generateRandomNumber();
//console.log(`Random number between 0 and 100 is: \n${randomNumber.toFixed(2)}`)

//=========================================================================================================================================

/*Q.10.Check Age for Voting (With Parameter):
Write a function that takes age as a parameter and checks if the person is eligible to vote (18 years or older). It should 
return true or false.*/
//Answer:
// function isEligibleToVote (age){
// if (age >= 18){
// return true;
// }
// else {
// return false;
// }
// }

// let age = prompt ("Enter Your age:");
// if (isEligibleToVote(age)){
// console.log("You are eligible to vote.")
// }
// else{
// console.log("You are not eligible to vote.")
// }

//=========================================================================================================================================



