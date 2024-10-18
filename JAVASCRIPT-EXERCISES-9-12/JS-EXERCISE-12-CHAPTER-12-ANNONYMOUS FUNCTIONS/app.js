/*Q.1.Print "Hello" (No Parameters):
Create an anonymous function that prints "Hello" to the console. Immediately invoke the function.*/
//Answer:
// (function() {
// console.log("Hello");
// })();

//=========================================================================================================================================

/*Q.2.Sum of Two Numbers (With Parameters):
Write an anonymous function that takes two numbers as arguments and returns their sum. Assign it to a variable and call the function.*/
//Answer:
// var sum = function(num1, num2){
// return num1 + num2;
// };
// var number1 = prompt("Enter the first number:");
// var number2 = prompt("Enter the second number:");

// var result = sum(Number(number1), Number(number2));
// console.log(`The sum of ${number1} and ${number2} is: ${result}`);

//=========================================================================================================================================

/*Q.3.Array Sorting (With Parameters):
Use an anonymous function as a callback in Array.sort() to sort an array of numbers in ascending order.*/
//Answer:
// var numbers =[18, 30, 60, 65, 40, 25, 80, 55, 43];
// numbers.sort(function(a, b){
// return a - b;
// });
// console.log("Sorted array in ascending order", numbers);

//=========================================================================================================================================

/*Q.4.Greeting Message (With Parameter):
Create an anonymous function that takes a name as a parameter and logs a greeting message like "Hello, [name]!". Immediately invoke the function.*/
//Answer:
// (function(name){
// console.log(`Hello, ${name}`);
// })
// ("Farah");

//=========================================================================================================================================

/*Q.5.Check if Number is Even or Odd (With Parameter):
Write an anonymous function that takes a number as a parameter and logs whether the number is even or odd. Store it in a variable and then invoke it.*/
//Answer:
// var evenOddNumber = function(num){
// if (num % 2 === 0){
// console.log(`${num} is an even number`);
// }
// else{
// console.log(`${num} is an odd number.`);
// }
// };
// var number = prompt("Enter a number.");
// evenOddNumber(Number(number));

//=========================================================================================================================================
/*Q.6.Filter Odd Numbers from an Array (With Parameters):
Use an anonymous function as a callback in Array.filter() to return only the odd numbers from an array of integers.*/
//Answer:
// var numbers =[18, 25, 33,16, 83, 26, 19, 10, 8, 11, 17];
// var oddNumbers = numbers.filter(function(num){
// return num % 2 !== 0;
// });
// console.log("Odd numbers:", oddNumbers);

//=========================================================================================================================================

/*Q.7.Factorial Calculation (With Parameter):
Create an anonymous function that takes a number as input and returns its factorial. Assign the function to a variable and call it with different inputs.*/
//Answer:
// Anonymous function to calculate factorial
// var factorialCal = function(num) {
// var result = 1;
// for (let i = 1; i <= num; i++) {
// result *= i; 
// }
// return result;
// };
// var number1 = 4;
// var number2 = 3;
// console.log(`Factorial of ${number1} is: ${factorialCal(number1)}`);
// console.log(`Factorial of ${number2} is: ${factorialCal(number2)}`);

//=========================================================================================================================================

/*Q.8. Anonymous Function in Timeout (No Parameters):
Use an anonymous function inside setTimeout() to print a message like "Time's up!" after 2 seconds.*/
//Answer:





//=========================================================================================================================================

/*Q.9.Sum of All Elements in an Array (With Parameter):
Write an anonymous function as a callback in Array.reduce() to sum all the elements in an array.*/
// var numbers = [15, 30, 8, 50, 25, 63, 31];
// var sum = numbers.reduce(function(total, num){
// return total + num;
// });
// console.log("Sum of all elements in the array:", sum);

//=========================================================================================================================================

/*Q.10.Check Voting Eligibility (With Parameter):
Create an anonymous function that takes an age as input and logs whether the person is eligible to vote (age >= 18). Immediately invoke the 
function with different ages.*/
//Answer:
// (function(age){
// if(age >= 18){
// console.log(`Age ${age}: Eligible to vote`);
// }
// else{
// console.log(`Age ${age}: Not Eligible for vote`);
// }
// })(19);

// (function(age){
// if(age >= 18){
// console.log(`Age ${age}: Eligible to vote`);
// }
// else{
// console.log(`Age ${age}: Not Eligible for vote`);
// }
// })(20);

//=========================================================================================================================================
