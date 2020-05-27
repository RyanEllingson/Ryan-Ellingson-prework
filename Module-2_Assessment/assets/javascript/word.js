class Word {
    constructor(word) {
        this.question = word.question;
        this.answer = word.answer;
        this.letterList = [];
        this.populateLetterList();
    }
    populateLetterList() {
        // Initialize letter objects that make up the word
        for (let i=0; i<this.answer.length; i++) {
            const letter = new Letter(this.answer[i].toUpperCase());
            this.letterList.push(letter);
        }
    }
}