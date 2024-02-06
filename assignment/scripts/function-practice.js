console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
//console.log('Test - should say "Hello World!"', hello());

console.log(hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
 function helloName(name) {
 return `Hello, ${name}!`;
}
// Remember to call the function to test
 console.log(helloName('Michael'));

/* I tried using a template literal instead of "'Hello, ' + name + '!'" */


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log(addNumbers(5, 7));
console.log(addNumbers(3, 8));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}

console.log(multiplyThree(5, 8, 9));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

console.log(isPositive(3));
console.log(isPositive(-1));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let arr = [7, 5, 2, 9];
let arr2 =[];

function getLast(array) {
 if (array[array.length-1] > -1){
  return array[array.length-1];
 }
}

console.log(getLast(arr));
console.log(getLast(arr2));




// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let newArr = ['video-games', 'movies', 'Duolingo', 'drawing'];

function find(value, array) {
   for (newArrSpec of newArr){
    if (newArrSpec === value){
      return true;
    } 
   }
   return false;
}

console.log(find('Duolingo', newArr));
console.log(find('dog', newArr));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
   let jumble = string.split('');
   if (jumble[0] === letter){
    return true;
   }
   return false;
}

console.log(isFirstLetter('I', "I'm going to eat this apple"));

let giantArr = [5, 8, 7, 9, 10, 13, 526, 89, 2, 7, 64];

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
  // TODO: return the sum
}
/* is there any benefit to using a for loop here versus a for of loop? */

console.log(sumAll(giantArr));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
