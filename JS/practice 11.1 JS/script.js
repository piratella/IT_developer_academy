

// use an array to model our To do list
var todos = ["sleep"];


// ask the user for imput
var input = prompt("What would you like to do?");



// if we end here, we don't know if it will work, there's no more prompt
// so we want to keep asking till the user quits, so we have to add a loop

while (input !== "quit") {
    // handle input
    if (input === "list") {
        //we want to list all the indexes in the array
        //remember that the name of the argument in the function is just
        //something that we make up to use it within. We'll name it todo. 
        //Is a placeholder for each index.

        /* To add a number we have to add a second argument to todo, named i for index.
        and that's going to refer to the index. the first one will be the item todo, 
        and this will be the index of this particular todo. Each time through we get
        both of them.
         */

        /* We have to add some asterisks too */
        console.log("*******")
        todos.forEach(function (todo, i) {
            // we call the argument here
            console.log(i + ": " + todo);
        });
        console.log("*******")
        // add another condition
    } else if (input === "new") {
        // ask the user another input and add it to the array
        var newTodo = prompt("Enter new todo");

        // add to todos array
        todos.push(newTodo);
        console.log ("Added Todo");
         // how do we delete
    } else if (input === "delete") {
        // ask for index of todo to be deleted
        var index  = prompt ("index of to do to delete");
    //delete that to do
    /* we have to do SPLICE method. The first argument will be the index the user
    provides and then how many items you want to delete following that item.  */
    todos.splice(index,1);
    console.log ("Deleted Todo");
    }




    // ask again for new input and will start the loop again
    var input = prompt("What would you like to do?");

}

console.log("Ok, you quit the app!")
