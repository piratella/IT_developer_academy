//var age = prompt ("what is your age"); That will be the normal question.

/* It will return us a string, so we want to convert it to a number. 
To do that we do de Number constructor. 
age = Number(age). We can do that together with the prompt.*/


var age = Number(prompt("what is your age"));


// If age is negative

if (age<0) {
    console.log("you are a baby! Come back in 18 years!");

    // If age is 21  
}else if ( age === 21) {
    console.log("Happy birthday! Have a shot!");

}else if (age % 2 !==0){
    console.log ("your age is odd!");

/*/ Math is a kind of method that gives us the number whom you can multiply for itself to do it square (like 3*3 = 9 or 4*4)
so we want to know if the age is a perfect square, that is a int number, so we have to do a % */

} else if (age % Math.sqrt(age) === 0) {
    console.log ("your age is a perfect square");
} else if (age <21 ) {
    console.log ("you can come in, but not drink");
} else {
    console.log ("come on in, have a drink!");
}





