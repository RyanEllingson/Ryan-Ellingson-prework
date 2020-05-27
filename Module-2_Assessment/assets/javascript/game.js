class Game {
    constructor() {
        this.wins = 0;
        this.gameStarted = false;
        this.gameOver = false;
        this.keyEnabled = true;
        this.victorySongEl = document.getElementById("victory-song");
        this.openingMessageEl = document.getElementById("opening-message");
        this.gameEl = document.getElementById("game");
        this.questionEl = document.getElementById("question");
        this.answerEl = document.getElementById("answer");
        this.winsEl = document.getElementById("wins");
        this.remainingEl = document.getElementById("remaining");
        this.incorrectEl = document.getElementById("incorrect");
        this.winEl = document.getElementById("win");
        this.loseEl = document.getElementById("lose");
        this.initializeGame();
    }
    resetWord() {
        this.gameOver = false;
        // Randomly choose a question
        this.word = new Word(this.chooseWord());
        this.remainingGuesses = 10;
        this.incorrectGuesses = [];
        this.renderGame();
    }
    renderProgress() {
        let result = "";
        const letters = this.word.letterList;
        for (let i=0; i<letters.length; i++) {
            if (letters[i].guessed) {
                result += letters[i].value;
            } else {
                result += "___";
            }
            if (i < letters.length - 1) {
                result += " ";
            }
        }
        return result;
    }
    renderIncorrect() {
        let result = "Incorrect guesses: ";
        for (let i=0; i<this.incorrectGuesses.length; i++) {
            result += this.incorrectGuesses[i];
            if (i < this.incorrectGuesses.length - 1) {
                result += ", ";
            }
        }
        return result;
    }
    renderGame() {
        this.winsEl.innerHTML = `Total Wins: ${this.wins}`;
        this.questionEl.innerHTML = this.word.question;
        this.answerEl.innerHTML = this.renderProgress();
        this.remainingEl.innerHTML = `Guesses remaining: ${this.remainingGuesses}`;
        this.incorrectEl.innerHTML = this.renderIncorrect();
    }
    chooseWord() {
        const index = Math.floor(Math.random()*questions.length);
        return(questions[index]);
    }
    handleWin() {
        setTimeout(() => {
            this.winEl.className="d-none";
            this.resetWord();
            this.keyEnabled = true;
            this.victorySongEl.pause();
            this.victorySongEl.load();
        }, 5000);
        console.log(this.victorySong);
        this.victorySongEl.play();
        this.keyEnabled = false;
        this.winEl.className="row";
        this.wins += 1;
    }
    handleLose() {
        console.log("game lost");
        this.gameEl.className = "d-none";
        this.loseEl.className = "container mt-5";
        document.getElementById("total-wins").innerHTML = `Sorry, out of guesses!  You successfully completed ${this.wins} words - hit any key to play again!`;
        setTimeout(() => {
            this.gameOver = true;
        }, 500);
        document.addEventListener("keydown", () => {
            if (this.gameOver) {
                this.restartGame();
            }
        });
    }
    restartGame() {
        this.gameEl.className = "container mt-5";
        this.loseEl.className = "d-none";
        this.gameOver = false;
        document.removeEventListener("keydown", () => {
            if (this.gameOver) {
                this.restartGame();
            }
        });
        this.wins = 0;
        this.resetWord();
    }
    makeGuess(event) {
        // Each time a letter is guessed, check whether letter exists in word - if yes, reveal letter in the word; if no, add letter to incorrect guesses and deduct from remaining guesses
        let guess;
        const reg = /[a-zA-Z]/;
        if (reg.test(event.key) && event.key.length === 1) {
            guess = event.key.toUpperCase();
            let correctGuess = false;
            let wordComplete = true;
            const letters = this.word.letterList;
            for (let i=0; i<letters.length; i++) {
                if (letters[i].value === guess) {
                    letters[i].guessed = true;
                    correctGuess = true;
                }
                if (!letters[i].guessed) {
                    wordComplete = false;
                }
            }
            if (!correctGuess) {
                if (!this.incorrectGuesses.includes(guess)) {
                    this.incorrectGuesses.push(guess);
                }
                this.remainingGuesses -= 1;
            }
            // If player runs out of guesses, game over
            if (this.remainingGuesses < 1) {
                this.handleLose();
            }
            // When word is complete, display Game Win message, choose new word, and start game again
            if (wordComplete) {
                this.handleWin();
            }
            this.renderGame();
        }
    }
    initializeGame() {
        // Display intro screen, listen for keyboard entry - on keyboard entry, remove intro screen and start game
        document.addEventListener("keydown", () => {
            if (!this.gameStarted) {
                this.startGame();
            }
        });
    }
    startGame() {
        this.gameStarted = true;
        this.openingMessageEl.className = "d-none";
        this.gameEl.className = "container mt-5";
        this.loseEl.className = "d-none";
        // Display question, number of remaining guesses, and incorrect guesses
        // Display word on the screen as all blanks
        this.resetWord();
        document.addEventListener("keydown", (e) => {
            if (this.keyEnabled && !this.gameOver) {
                this.makeGuess(e);
            }
        });
    }
}









