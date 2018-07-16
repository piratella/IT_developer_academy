/* Exercise 1 

Write a function isEven() which takes a single numeric argument
and returns true if the number is even, and false otherwise

isEven (2); // true
*/


// Solution 1 by Cris 
function isEven (num) {
    if (num % 2 === 0) {
         return true;
     } else {
         return false;
     }
 }
 
 isEven(2); // True

// Solution 2 by Cris
function isEven(num) {
    return num % 2 === 0;
}

isEven(3); // False



/* Exercise 2 

write a function factorial () which takes a single numeric argument
and returns the factorial of that number 
4! is 4x3x2x1 
6! is 6x5x4x3x2x1
0! is 1 

factorial (5); // 120 

write a function that takes a number and multiply that number by every integer below 
that between that number and 1 */
function factorial (num) { 
// define a result variable 
var result = 1; 
// we need to do is multiply that result by every number between 1 and that number. We need a loop.
for (var i = 1; i <= num; i++) {
    result = result *i; 
} 

// return the result variable
return result;
   
}
factorial(5);









/* Exercise 3 

write a function kebabToSnake() which takes a single kebab-cased string argument
and returns the snake_cased version. So, replace "-"s with "_"s 

kebabToSnake ("Hello-world"); // "hello_world" */



