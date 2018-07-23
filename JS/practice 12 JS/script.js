/* EXERCISE 1
Write a function printReverse() that takes an array as an argument 
and prints out the elements in the array in revers order (don't actually
reverse the array itself)*/


/*--- My solution: it's not correct because I do not take an array as an argument
var guy;
guy = ["Peter", "Lois", "Chris", "Stewie", "Meg"];
var printReverse = guy.reverse();
console.log(printReverse);
---*/


/* Colt Steele solution */

// define the function which takes a single argument, an array.

function printReverse(arr) {
    // We loop the array, but backwards. So we call it from the end to the beginning
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
// we call the function with the array
printReverse([3, 6, 2, 6])





/* EXERCISE 2

Write a function isUniform() which takes an array as an argument
and returns true if all elements in the array are identical
isUniform ([1,1,1,1]); //true
isUniform ([1,1,1,3]); //false

you need a loop and a variable that keeps tracking of the very first
item in the index and then you'll compare that in the loop to the next item.
If they are equal to compared to the next one into the next one
and if an any point they aren't, then return false */


/* ---- My solution (doesn't work) ---- 
function isUniform(arr) {
for (var i=0; i < isUniform.length -1; i++) {
    if (isUniform[i] != isUniform [i+1]) {
        return false;
    }
}

}

isUniform([1,1,1,1])

*/

/* Ruben's solution */

function isUniform(arr) {
    // my first variable is equal to the first item
    var uniform = true;
    var first = arr[0];
    // use a loop
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            uniform = false;
        }
    }

    return uniform;

}

/* Colt Steele Solution */

function isUniform(arr) {
    // my first variable is equal to the first item
    var first = arr[0];
    // use a loop
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }

    return true;

}


/*write a function sumArray() that accepts an array of numbers and 
returns the sum of all numbers in the array 
sumArray ([1,2,3]); // 6 you'll need a loop and a variable result */


/* --- My solution . It doesn't run. Obviously, because I didn't initialized
the result variable. 

function sumArray(arr){
// variable result to save the result of the loop
result = 0
for (var i=0;i<arr.length;i++) {
    var result = result + arr[i];  
    }
    console.log(result);
}

sumArray([1,2,3]); --- */

/* colt's solution 

function sumArray (arr) {
// we initialize a variable where save the total
    var total = 0;
// we do a loop with foreach 
arr.forEach(function(element) {
    total = total + element;
});
return total;
}
*/



/* write a function max() that accepts an array of numbers and 
returns the maximum number in the array.
You'll need a loop a variable to store the max num and every time through the loop
you'll need to update that variable if the current number in the loop is 
greater than the old maximum */

/* ---- my solution. Doesn't work.----
function max (arr) {
var maxNum =1;
for (var i = 1; i<arr.length; i++) {
    if  (arr[i] > maxNum)
    {
        return maxNum;
    }
    }
} */

/* Colt solution*/

function max(arr) {
    // we begin for the first value of the array and we save it in a variable

    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            // we save the new value of the array again in the variable
            max = arr[i];
        }
    }


// once we finish the array, return max
return max;
}
