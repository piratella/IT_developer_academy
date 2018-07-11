
/*

My solution:
var answer = prompt ("are we there yet?");

we use a while to say that while the answer is not equal to yes, just repeat the same question 
again and again

while (answer !== "yes") {
    var answer = prompt ("are we there yet?");
    }

// but, what happens if the user answer yes? That has to be inside of the while loop

if (answer == "yes") {
    var answer = prompt ("we made it!");
}
*/

/* Teacher's solution. Yep, easier than mine.

var answer = prompt ("are we there yet?");

while (answer !== "yes") {
    var answer = prompt ("are we there yet?");
    }

alert("yes, we made it!"); */

/*we want to do is check if the string contains Yes anywhere in the answer
if part of it, matches yes but not all of it necessarrily. 
there's a method called Index Of. If it doesn't exist in the string
it returns -1

var str ="Hello kitty";
str.indexOf("H") // 0
str.indexOF("u") // -1
*/



var answer = prompt ("are we there yet?");

while (answer.indexOf("yes") === -1) {
// that means that the word yes doesnt exist inside of our answer
    var answer = prompt ("are we there yet?");
    }

alert("yes, we made it!");