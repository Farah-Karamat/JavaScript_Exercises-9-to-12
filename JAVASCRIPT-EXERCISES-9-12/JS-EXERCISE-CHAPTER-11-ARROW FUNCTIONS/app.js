/*Q.1.Square of a Number:
Write an arrow function that takes a number as input and returns its square.*/
//Answer:
// var square = (num) => num * num;
// let number = prompt("Enter a number");
// let result = square(number);
// console.log(`The square of ${number} is: ${result}`);

//=========================================================================================================================================

/*Q.2.Array of Even Numbers:
Create an arrow function that takes an array of numbers and returns a new array containing only the even numbers.*/
//Answer:
// var getEvenNumbers = (arr) => arr.filter( num => num % 2===0);
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let evenNumbers = getEvenNumbers(numbers);
// console.log(`Even numbers: ${evenNumbers}`);

//=========================================================================================================================================

/*Q.3.Concatenate Strings:
Write an arrow function that takes two strings as arguments and returns them concatenated.*/
//Answer:
// var ConcatenateStrings = (stg1, stg2) => stg1 + stg2;

// var string1 = prompt("Enter the first string:");
// var string2 = prompt("Enter the second string:");

// let result = ConcatenateStrings(string1, string2);
// console.log(`Concatenated string: ${result}`);

//=========================================================================================================================================

/* Q.4.Find Maximum Number in an Array:
Create an arrow function that accepts an array of numbers and returns the maximum value in the array.*/
//Answer:
// var findMaxNum = (arr) => {
// var max = arr[0]; 
// for (var i = 1; i < arr.length; i++) {
// if (arr[i] > max) {
// max = arr[i]; 
// }
// }
// return max;
// };

// var numbers = [10, 5, 50, 71, 32, 86, 100, 120, 18, 65];
// var maxNumber = findMaxNum(numbers);
// console.log(`The maximum number in the array is: ${maxNumber}`);

//=========================================================================================================================================

/*Q.5.Sum of All Numbers in an Array:
Write an arrow function that takes an array of numbers as input and returns the sum of all the numbers.*/
//Answer:
// var sumAllNum = (arr) => {
// var sum = 0;
// for (var i = 0; i< arr.length; i++){
// sum += arr[i];
// }
// return sum;
// };
// var numbers = [10, 5, 2, 9, 8, 15, 60, 25, 40, 33];
// var totalSum = sumAllNum(numbers);
// console.log(`The sum of all numbers in th array is: ${totalSum}`);

//=========================================================================================================================================

/*Q.6.Print "Hello World" (No Parameters):
Write an arrow function that takes no parameters and simply prints "Hello World" to the console.*/
//Answer:
// const print = () => {
// console.log("Hello World");
// }
// print();

//=========================================================================================================================================

/*Q.7. Calculate Square of a Number (With Parameter):
Create an arrow function that takes a number as a parameter and returns its square.*/
//Answer:
// var squareNum = (num) => num * num;
// var number = prompt ("Enter a number:");
// var result = squareNum(number);
// console.log(`The square of ${number} is: ${result}`);

//=========================================================================================================================================

/*Q.8. Check if Number is Positive (With Parameter):
Write an arrow function that accepts a number as a parameter and returns true if the number is positive, and false if it is negative or zero.*/
//Answer:
// var positiveNum = (num) => num > 0;
// var number = prompt("Enter a number:");

// if(positiveNum(number)){
// console.log(`${number} is positive`);
// }
// else{
// console.log(`${number} is negative.`);
// }

//=========================================================================================================================================

/*Q.9.Generate a Random Number (No Parameters):
Create an arrow function that takes no parameters and returns a random number between 1 and 50.*/
//Answer:
// var randomNum = () => Math.random() * 50 +1;
// var number = randomNum ();
// console.log(`Random number between 1 and 50: \n${number.toFixed(2)}`);

//=========================================================================================================================================

/*Q.10.Convert Minutes to Seconds (With Parameter):
Write an arrow function that takes minutes as a parameter and returns the equivalent time in seconds.*/
//Answer:
// var minToSec = (minutes) => minutes * 60;
// var minutes = prompt("Enter the number of minutes:");
// var seconds = minToSec(minutes);
// console.log(`${minutes} minute/es is/are equivalent to ${seconds} seconds.`);

//=========================================================================================================================================


