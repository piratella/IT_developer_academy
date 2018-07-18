

    // use an array to model our To do list
    var todos = ["sleep"];


    // ask the user for imput
    var input = prompt("What would you like to do?");



    // if we end here, we don't know if it will work, there's no more prompt
    // so we want to keep asking till the user quits, so we have to add a loop

    while (input !== "quit") {
        // handle input
        if (input === "list") {
            console.log(todos);
        }

        // add another condition

        else if (input === "new") {
            // ask the user another input and add it to the array
            var newTodo = prompt("Enter new todo");

            // add to todos array
            todos.push(newTodo);
        }

        // ask again for new input and will start the loop again
        var input = prompt("What would you like to do?");

    }

    console.log("Ok, you quit the app!")
