// jQuery Events
$("h1").click(function(){
alert("h1 clicked!");

});
 
//how to add an event listener to a collection of elements

$("button").click(function(){
   $(this).css("background", "pink")
});

//let's play:
$("button").click(function(){
var text = $(this).text();
alert("you clicked " + text);

});