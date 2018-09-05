//practicing jQuery Methods in js file and console
/*-------text()--------*/
$("h1").text();
/// pass a new value
$("h1").text("New h1 text"); 
/// get all ils and change it to another string
$("li").text("My cat's name is Mefistófeles");

/*-------HTML()--------*/
///pass a new value
$("ul").html("<li>smarties</li><li>cacahuete</li>");
///or
$("ul").html("<li>smarties</li><li>cacahuete</li><li><a href='google.com'</a>Go to google</li>");


/*-------attr()--------*/
///the actual width of the images are too big, let's make them smaller
$("img").css("width","350px");
///we want to change the image source
$("img").attr("src","https://i.imgur.com/501wVNK.jpg");
/// //we can change the value in the input from text to color
/// $("input").attr("type","checkbox");

///the point is to change multiple or unique attributes
///the first one
$("img:first-of-type").attr("src", "https://i.imgur.com/LmJW1A9.jpg");
///the last
$("img").last().attr("src","https://i.imgur.com/LmJW1A9.jpg"); 

///if we want to change one element (not the first or the last)
$("img").eq(1).attr("src","https://i.imgur.com/LmJW1A9.jpg");




/*-------button--------*/
$("button").click(function() {
    $("img").eq(2). attr("src","https://i.imgur.com/FGTBdZy.jpg");
    });


/*-------val()--------*/
$("input").val(); // give us an empty string

///pass a value
$("input").val("Mefistófeles"); //inside the box, the new value

///val also extract value from an input or dropdown menus
$("select").val(); // regaliz


/*-------addClass()--------*/
///This doesn't replace a class, adds classes
//we add to the h1 the class correct that we have in our style
$("h1").addClass("correct");

//removing class
$("h1").removeClass("correct");

//select li and add class wrong
$("li").addClass("wrong");
$("li").removeClass("wrong");

//toggle: add the class and if they have the class, it will remove it
$("li").toggleClass("correct");

//toggle only the first
$("li").first().toggleClass("done"); // line through the first
$("li").toggleClass("done"); // take the line through the first and adds to the rest