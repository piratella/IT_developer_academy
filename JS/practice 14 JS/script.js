// create a button that once click you change the background from a color to white everytime

// my solution
var back = document.querySelector("body");
var but = document.querySelector("button");
var isPink = false;

but.addEventListener("click", function () {

    if (isPink) {
        back.style.background = "white";

    } else {
        back.style.background = "pink";
    }
    isPink = !isPink;

});

/* colt's solution
var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){
if(isPurple){
    document.body.style.background = "white";
    
}else{
    document.body.style.background = "purple";
    }
     isPurple = !isPurple;
});

*/

/* Second Colt solution. Add a class in css and toggle it 
If the body doesn't have the class we will add it, if it has it, it will remove it

var button = document.querySelector("button");
button.addEventListener("click", function(){
document.body.classList.toggle("pink")
});


*/