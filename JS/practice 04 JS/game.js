//create secretNumber
var secretNumber = 5;


/* what happens here if we go on? User give us a string, and we want a number.
If the user guess 5, he won't be right. we have to use the Number method to take the string
and pass it to a number*/


//ask user for guess
var stringUserNumber = prompt("What is the secret number?");
var userNumber = Number(stringUserNumber);

/*In this last variable we're creating a variable where we're saving the string turned
into Number thanks to its method and we called it userNumber, which is the one 
we are using afterwards */


//check if guess is right

if (userNumber === secretNumber) {
    alert ("Hey, you are right!");
}

//check if guess is higher

else if (userNumber > secretNumber) {
    alert ("Hey, that is too high, refresh and try again");
}

//otherwise, check if lower

else {
    alert ("That is too low, refresh and try again");
}