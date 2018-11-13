# Welcome to Crystal Collector!

## The following project is Assignment 4 of the UCB Full Stack Coding Bootcamp

### Overview

I employed HTML, CSS, JavaScript, and jQuery to make a points-based puzzle game called Crystal Collector. The point of this exercise was to use jQuery logic to assign random number values to buttons at the start of each new game, generate a random number to strive towards, and compare the user's input to the randomly generated 'goal' number. It's like Blackjack, except the values of the player's cards change every game, and the number to win changes every game.

### Gameplay:

* Four crystals will be displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a randomly assigned, but game-specific amount of points to the player's total score. 

     * The game will hide this amount until the player clicks a crystal.
     * When they do click one, the player's score counter will update.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player will see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app will show the number of games the player wins and loses. 

 I employed the use of jQuery's 'attr' and 'addClass' methods, as well as a random number generator, to apply new number values to "crystal" buttons at the start of each game. I then outputted the response to a Bootstrap Jumbotron to act as the User Interface for the game. The code snippet below exemplifies how to assign a random number as a 'value' then append it to an HTML element with a given class:

 ``` javascript

 ```
### Feel free to play around with the game by clicking on a crystal to start a new game!

[Link to my Game](https://jacksonsabol.github.io/unit-4-game/)

Thank you for reading!

### Built With:
* HTML
* CSS
* JavaScript
* jQuery Library
* Bootstrap CSS Library

