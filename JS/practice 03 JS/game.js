//create secretNumber
var secretNumber = 5;

//ask user for guess
var userNumber = prompt("What is the secret number?");

/* what happens here if we go on? User give us a string, and we want a number.
If the user guess 5, he won't be right. we have to use the Number method to take the string
and pass it to a number*/

//check if guess is right

if (Number(userNumber) === secretNumber) {
    alert ("Hey, you are right!");
}

//check if guess is higher

else if (Number(userNumber) > secretNumber) {
    alert ("Hey, that is too high, refresh and try again");
}

//otherwise, check if lower

else {
    alert ("That is too low, refresh and try again");
}