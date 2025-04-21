//Our goal is to move a rectangle (the "dodger") left and right across a game field when the user presses the arrow keys.


// step1: Select the dodger element for manipulation
// Hint: Use document.getElementById to select the element with id "dodger"
const dodger = document.getElementById("dodger")
//dodger.style.left = "180px"; // Match CSS



// step3: Handle Events - Move Left
// Function to move the dodger left
// Hint: Define a function moveDodgerLeft()
// Hint: Convert the current left position from a string to an integer
// Hint: Ensure the dodger doesn't move off-screen
// Hint: Update the left position of the dodger
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10); //converts leftNumbers to an integer.

    //ensures the dodger only moves left if it’s not already at the left edge ( left > 0 ).
    // Prevent moving off-screen
    if (left>0) { 
        dodger.style.left = `${left-1}px`; //decreases the left position by 10 pixels.
    }
}

// Function to move the dodger right
// Hint: Define a function moveDodgerRight()
// Hint: Convert the current left position from a string to an integer
// Hint: Ensure the dodger doesn't move off-screen
// Hint: Update the left position of the dodger
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left<360) {
        dodger.style.left = `${left+10}px`;
    }
}

// step2: Attach event listener to respond to key presses
// Hint: Use document.addEventListener to listen for "keydown" events
// Hint: Inside the event listener, call moveDodgerLeft if the left arrow key is pressed
// Hint: Call moveDodgerRight if the right arrow key is pressed

document.addEventListener("keydown", function(event) {
    //console.log(event.key); // Logs the key pressed

    // step5: Combine Event Handling
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

