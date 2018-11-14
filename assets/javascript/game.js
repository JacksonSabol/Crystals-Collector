// IDs (#) to reference for pushing to HTML elements
// Spans:
// game-over
// number-to-guess
// user-total
// wins
// losses
// Div:
// crystals

// Create array of crystal button images
// Numbered out of order because I want the images with dual crystals on the outside edges
var crystalImages = ["assets/images/crystalButton2.png", "assets/images/crystalButton1.png", "assets/images/crystalButton3.png", "assets/images/crystalButton4.png"];

// Set initial variables
var wins = 0;
var losses = 0;
var numberToGuess = 0;
var userTotal = 0;

// Call function to begin the game
beginGame();

// Define function to begin the game
function beginGame() {
    // Generate the random number to guess - per the Homework Instructions: 'The random number shown at the start of the game should be between 19 - 120.'
    numberToGuess = Math.round(Math.random() * 101) + 19;
    // Display the random number on the page in the #number-to-guess span
    $("#number-to-guess").text(numberToGuess);
    // Reset the player's total even after a game has been played through
    userTotal = 0;
    // Display the player's reset total on the page in the #total-score span
    $("#total-score").text(userTotal);

    // Iterate through the length of the crystal images array to generate img tags for each crystal, add source attributes, add classes, and assign random number values
    for (i = 0; i < crystalImages.length; i++) {
        // Create an HTML img tag for each crystal button
        var crystalBtn = $("<img>");
        // Add class crystal-image to each new img tag so we can style and size them
        crystalBtn.addClass("crystal-image");
        // Add src attribute to each img tag equal to the 'URL' we assigned in the crystalImages array
        crystalBtn.attr("src", crystalImages[i]);
        // Add 'data-' attribute to each img tag equal to a random number so we can reference that value when a player clicks on a crystal - per the Homework Instructions: 'Each crystal should have a random hidden value between 1 - 12.'
        crystalBtn.attr("data-crystalvalue", Math.round(Math.random() * 11) + 1);
        // Append all of the img tags we just made and their attributes/classes to the div with ID #crystals on the HTML
        $("#crystals").append(crystalBtn);
    };
    // Testing the randomly generated data value for each crystal
    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        console.log(crystalValue);
    });
    // Notes to self:
    // Figure out a way to prevent Math.random from assigning the same data value to more than 1 crystal
    // Figure out a way to ensure that at least one of the crystals always has a value of 1, just as a win 'fail-safe'
    // Figure out how to move the right two crystal images to the right side of the container so it looks better
};
