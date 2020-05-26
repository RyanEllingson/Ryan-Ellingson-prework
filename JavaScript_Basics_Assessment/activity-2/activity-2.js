const initialize = function() {
    const userInput = prompt("Enter your name!");

    if (userInput.length > 4) {
        alert("The length of your name is greater than 4 characters");
    } else {
        alert("The length of your name is less than or equal to 4 characters");
    }
}

initialize();