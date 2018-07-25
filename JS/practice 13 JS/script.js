/* Create an array of movie objects.
Each movie should have a title, rating, and hasWatched properties.
Iterate through the array and print out something like:

You have watched "In Bruges" - 5 stars
You have not seen "Frozen" - 4,5 stars
You have seen "Mad Max Fury Road" - 5 stars
You have not seen "Les miserables" - 3,5 stars

movie > title > string
rating > number
watched > boolean

Define an array with 4 movies


*/

var movie = [
    {
        title: "In Bruges",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Mad Max",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Les Miserables",
        hasWatched: false,
        rating: 1.5
    }

]

for (var i = 0; i < movie.length; i++) {

    // we have to concatenate the sentence 
    var result = "You have ";
    // here you access to the boolean
    if (movie[i].hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    //we have to add the movie with quotes, so we have to add them too with scape
    // 
    result += "\"" + movie[i].title + "\" - ";
    result += movie[i].rating + " stars";
    console.log(result);
}


