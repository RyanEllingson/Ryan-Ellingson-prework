let gameStarted = false;

const initializeGame = function() {
    console.log("Game initialized");
    gameStarted = true;
    const openingMessageEl = document.getElementById("opening-message");
    openingMessageEl.className = "d-none";
    const word = new Word({question: "why?", answer: "Hello"});
    console.log(word);
}

class Letter {
    constructor(value) {
        this.value = value;
        this.guessed = false;
    }
}

class Word {
    constructor(word) {
        this.question = word.question;
        this.answer = word.answer;
        this.letterList = [];
        this.populateLetterList();
    }
    populateLetterList() {
        for (let i=0; i<this.answer.length; i++) {
            const letter = new Letter(this.answer[i].toUpperCase());
            this.letterList.push(letter);
        }
    }
}

// Display intro screen, listen for keyboard entry - on keyboard entry, remove intro screen and start game
document.addEventListener("keydown", () => {
    if (!gameStarted) {
        initializeGame();
    }
});
// Initialize list of questions
// Randomly choose a question
// Display question, number of remaining guesses, and incorrect guesses
// Initialize letter objects that make up the word, display word on the screen as all blanks
// Each time a letter is guessed, check whether letter exists in word - if yes, reveal letter in the word; if no, add word to incorrect guesses and deduct from remaining guesses
// When word is complete, display Game Win message, choose new word, and start game again