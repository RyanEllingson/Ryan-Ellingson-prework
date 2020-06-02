# Ryan-Ellingson-prework

This repo contains all assessments for the Dev10 Program Web Development prework.  All assessments are deployed live on Heroku using an Express server, and links to each of them can be found at the following home page: https://ryan-ellingson-prework.herokuapp.com/

## HTML and Basic CSS Assessment

A screenshot of my submission is shown below, and the deployed project can be found at: https://ryan-ellingson-prework.herokuapp.com/HTML_BasicCSS_Assessment/
![HTML screenshot](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/HTML-screenshot.JPG)

## CSS Assessment

A screenshot of my submission is shown below, and the deployed project can be found at: https://ryan-ellingson-prework.herokuapp.com/CSS_Assessment/
![CSS screenshot](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/CSS-screenshot.JPG)

## Bootstrap Assessment

A screenshot of my submission is shown below, and the deployed project can be found at: https://ryan-ellingson-prework.herokuapp.com/Bootstrap_Assessment/
![Bootstrap screenshot](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/Bootstrap-screenshot.JPG)

## Module 1 Assessment

The deployed project can be found at: https://ryan-ellingson-prework.herokuapp.com/Module-1_Assessment/

Below is a screenshot of the "About Me" page:
![About Me screenshot](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/Module1-screenshot.JPG)

Below is a screenshot of the "Portfolio" page:
![Portfolio screenshot](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/Module1-screenshot2.JPG)

Below is a screenshot of the "Contact" page:
![Contact screenshot](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/Module1-screenshot3.JPG)

## JavaScript Basics Assessment - Activity 1

The deployed project can be found at: https://ryan-ellingson-prework.herokuapp.com/JavaScript_Basics_Assessment/activity_1/

Upon loading the page, a series of calculations is performed as specified in the assessment instructions.  The results of these calculations is logged to the console as shown in the following screenshot:
![JavaScript activity 1 screenshot](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/JavaScript1-screenshot.JPG)

## JavaScript Basics Assessment - Activity 2

The deployed project can be found at: https://ryan-ellingson-prework.herokuapp.com/JavaScript_Basics_Assessment/activity_2/

Upon loading the page, the user is prompted to enter their name.
![JavaScript activity 2 screenshot 1](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/JavaScript2-screenshot.JPG)

If the name entered is 4 characters or less, an alert pops up displaying this information.
![JavaScript activity 2 screenshot 2](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/JavaScript2-screenshot2.JPG)

If instead the user enters a name that is greater than 4 characters, an alert displaying that information is displayed instead.

![JavaScript activity 2 screenshot 3](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/JavaScript2-screenshot3.JPG)

![JavaScript activity 2 screenshot 4](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/JavaScript2-screenshot4.JPG)

## JavaScript Basics Assessment - Activity 3

The deployed project can be found at: https://ryan-ellingson-prework.herokuapp.com/JavaScript_Basics_Assessment/activity_3/

Upon loading the page, the user is prompted with a series of 3 prompts, each of which ask the user to enter a name.  Once all 3 prompts are answered, these names, along with 3 pre-programmed names are printed to the console as shown in the following screenshot:
![JavaScript activity 3 screenshot 1](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/JavaScript3-screenshot.JPG)

![JavaScript activity 3 screenshot 2](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/JavaScript3-screenshot2.JPG)

## Module 2 Assessment

The deployed project can be found at: https://ryan-ellingson-prework.herokuapp.com/Module-2_Assessment/

This project is a word-guessing game in the same vein as the classic Hangman game.  This particular game has a Magic: the Gathering theme, and the questions all relate to rules and game basics of MTG.

Upon loading the page, the user is greeted with a welcome screen.
![Module 2 screenshot 1](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/Module2-screenshot.JPG)

After hitting any key on the keyboard, the welcome screen disappears and the game begins.  The user is given a question related to Magic: the Gathering and asked to complete the answer by guessing one letter at a time by typing letters on the keyboard.
![Module 2 screenshot 2](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/Module2-screenshot2.JPG)

As the user guesses various letters, the correct guesses are filled in on the answer placeholder, and incorrect guesses are displayed in the bottom right of the game area.  Additionally, the number of remaining allowed incorrect guesses is displayed on the bottom left.  If a user types an incorrect letter they have already guessed, this letter is not added to the list of incorrect guesses any additional times, but a guess is still deducted from the remaining guesses.
![Module 2 screenshot 3](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/Module2-screenshot3.JPG)

Once the user successfully completes the answer, they are shown a "success" message and a victory fanfare is played (the victory song from Final Fantasy 7!).  After a few seconds a new question is loaded, and the list of incorrect guesses along with the number of remaining guesses is reset, while the count of correctly answered questions is incremented by 1.
![Module 2 screenshot 4](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/Module2-screenshot4.JPG)

If the user runs out of guesses on a word, a game over screen is displayed showing how many questions the user successfully answered.  The game also plays "One-Winged Angel," Sephiroth's theme song from Final Fantasy 7!  The user may then hit any key to start the game over again.
![Module 2 screenshot 5](https://github.com/RyanEllingson/Ryan-Ellingson-prework/blob/master/screenshots/Module2-screenshot5.JPG)

The logic of this game is organized almost entirely into objects: single letters in the word, the word itself, as well as the overall game are each defined as objects, with functions defined as methods.  In order to ensure that only keyboard strokes that represent letters are counted in the game, a regular expression is used.