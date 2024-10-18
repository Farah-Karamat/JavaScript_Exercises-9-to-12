/*Q.1.Prompt and If Statement:Write a script that asks the user "What is the capital of France?" If
the user answers "Paris", display an alert with "Correct!" Otherwise, display an alert with "Try
again!".*/
//Answer:
// var answer = prompt("What is the capital of France?");
// if(answer === "Paris"){
// alert("Correct!")
// }
// else{
// alert("Try again!");
// }

//====================================================================================================

/*Q.2.If-Else Statement: Modify the previous script to use an else statement. If the user's answer is
correct, display "Correct!", otherwise display "Incorrect, the correct answer is Paris."*/
//Answer:
// var answer = prompt("What is the capital of France?");
// if(answer === "Paris"){
// alert("Correct!")
// }
// else{
// alert("Incorrect, the correct answer is Paris");
// }

//=====================================================================================================

/*Q.3. Multiple Correct Answers: Write a program that asks the user, "What is the capital of the
United Kingdom?" If they answer "London" or "The United Kingdom", display "Correct!". Use an
if-else condition to check both possible answers.*/
//Answer:
// var answer = prompt("What is the capital of United Kingdom?");
// if(answer === "London" || answer === "United Kingdom"){
// alert("Correct!")
// }
// else if(answer === "Badeen"){
// alert("Incorrect but close")
// }
// else{
// alert("Incorrect")
// }

//=======================================================================================================

/*Q.4. Incrementing a Score: Modify a script to keep track of a score. Start with a score of 0. Every
time the user answers a question correctly, increment the score by 1 and display the updated score.*/
//Answer:
// var score = 0;
// var score = prompt("What is the score of 10 + 10?");  
// score = parseInt(score);
// if (score === 20) {
// score++;
// alert("Correct! Your score is now: " + " " + score);
// } 
// else {
// alert("Incorrect. Your score remains: " + score);
// }

//=========================================================================================================

/*Q.5.Testing Multiple Variables: Write a script that asks the user two questions: "What is the capital
of Germany?" and "What is 10 + 10?" If both answers are correct ("Berlin" and 20), display "You
got both right!". If only one answer is correct, display "You got one correct!"*/
//Answer:
// var capitalAnswer = prompt("What is the capital of Germany?");
// var mathAnswer = prompt("What is 10 + 10?");
// var capitalCorrect = (capitalAnswer === "Berlin");
// var mathCorrect = mathAnswer === 20;

// if (capitalCorrect && mathCorrect) {
//     alert("You got both right!");
// } else if (capitalCorrect || mathCorrect) {
//     alert("You got one correct!");
// } else {
//     alert("You got both wrong.");
// }

//=========================================================================================================

/*Q.6.Odd or Even Checker:
Write a program that checks if a given number is odd or even using an if-else statement.*/
//Answer:
// var num = prompt("Enter a number");
// if (num % 2 === 0){
//     console.log("It is an even number.")
// }
// else{
//     console.log("It is an odd number.")
// };

//=========================================================================================================

/*Q.7.Grade Calculator:
Create a program that takes a score as input and assigns a grade (A, B, C, D, or F) based on the score 
using if-else if conditions.*/
//Answer:
// let score = prompt("Enter your score (0 - 100):");

// if(score >= 90 && score <= 100){
// grade = "A";
// }
// else if(score >= 80){
// grade = "B";
// }
// else if(score >= 70){
//     grade = "C";
// }
// else if(score >= 75){
// grade = "D";
// }
// else if(score >= 0 && score < 60){
// grade = "F";
// }
// else{
// grade = "Invalid score";
// }
// console.log(`Your grade is: ${grade}`);

//=========================================================================================================

/*Q.8. Leap Year Checker:
Write a function to determine if a given year is a leap year or not. Use if-else logic to handle the 
different conditions for leap years.*/
//Answer:
// let year = prompt("Enter a Year");

// if (year % 4 === 0){
// if(year % 100 === 0){
// if (year % 400 === 0){
// console.log(`${year} is a leap year.`);
// }
// else {
// console.log(`${year} is not a leap year`);
// }
// }
// else{
// console.log(`${year} this is a leap year`)
// }
// }
//  else {
// console.log(`${year} No, this is not a leap year`)
// };
   
//=========================================================================================================

/*Q.9.Number Comparison:
Create a program that takes three numbers as input and prints the largest number using if-else if statements.*/
//Answer:
// var num1 = prompt("Enter the first number");
// var num2 = prompt("Enter the second number");
// var num3 = prompt("Enter the third number");

// if(num1 >= num2 && num1 >= num3){
// console.log(`${num1} is the largest number`);
// }
// else if (num2 >= num1 && num2 >= num3){
// console.log(`${num2} is the largest number`);
// }
// else{
// console.log(`${num3} is the largest number`)
// };

//=========================================================================================================

/*Q.10.Discount Calculator:
Write a program that calculates the final price of an item based on the original price and a discount rate. 
Apply different discount rates based on the amount (e.g., no discount if less than $50, 10% if between $50-$100, 
and 20% if greater than $100).*/
//Answer:
// var originalPrice = prompt("Enter the original price of the item");

// if(originalPrice < 50){
// discount = 0;
// }
// else if (originalPrice >= 50 && originalPrice <=100){
// discount = 0.10;
// }
// else{
// discount = 0.20;
// }
// finalPrice = originalPrice - (originalPrice * discount);

// console.log(`${originalPrice} this is original price`);
// console.log(`${(discount *100)}% is discount`);
// console.log(`$${finalPrice.toFixed(2)} is the final price`);

//==================================END OF EXERCISE - 9 CHAPTER-9===============================================
