const game = {
    title: 'Guess the Number!',
    biggestNum: " ",
    smallestNum: null,
    secretNum: null,
    prevGuesses: [],
    play: function() {
     this.getBigNum();   
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum; 
      let guess = null;
      while (guess !== this.secretNum && (!(isNaN(guess)))) {
        guess = this.getGuess();
        this.prevGuesses.push(guess);
        this.render(guess);
      } 
       if (guess === this.secretNum || (isNaN(guess))) {
       return;
       }
    },   
  
  //Asks player for number, checks for NaN
  getBigNum: function() {
    this.biggestNum = prompt('Enter a number');
    this.biggestNum = parseInt(this.biggestNum);   
    while (isNaN(this.biggestNum)) {
     alert(`That's not a number! Try again.`);
     return this.getBigNum();   
    } this.getSmallNum();
  },
  
  //Asks player for smaller number, checks for NaN
  getSmallNum: function() {
    this.smallestNum = prompt('Enter a smaller number');
    this.smallestNum = parseInt(this.smallestNum);
      while (isNaN(this.smallestNum)) {
        alert(`That's not a number! Try again.`);
        return this.getSmallNum();
      } this.checkNums();
  },
    
  //Checks players entry to make sure they fit parameters of game
  checkNums: function () {
    if (this.biggestNum === this.smallestNum) {
      alert(`Can't fool me by picking the same numbers! Try again!`);
      this.getBigNum();
      } else if (this.biggestNum < this.smallestNum) {
        alert(`Do you know what SMALLER means? Try again!`);
        return this.getBigNum();
      } else return;
  },
  
  //Initiates guessing game, if NaN will quit game
  getGuess: function() {
    let guess = null;
    while (guess !== this.secretNum) {
      guess = prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}. Type any letter to quit.`);
      guess = parseInt(guess);
      if (isNaN(guess)) {
        alert(`Thanks for playing!`);
        return guess;
      } else if (!(guess >= this.smallestNum && guess <= this.biggestNum)) {
          alert(`Hey, you guessed ${guess} which is not between ${this.smallestNum} and ${this.biggestNum}. Please try again.`);
        } else {
          return guess;
        } 
       } 
    },
  
   //Checks for winner, alerts player if higer or lower
    render: function(guess) {
      if (guess === this.secretNum) {
        alert (`Congrats! You guessed the correct number of ${this.secretNum} in ${this.prevGuesses.length} guesses!`); 
      } else if (guess > this.secretNum) {
        alert(`Your guess is too high! 
        Previous guesses: ${this.prevGuesses.join(', ')}`)
      } else if (guess < this.secretNum) {
        alert (`Your guess is too low! 
        Previous guesses: ${this.prevGuesses.join(', ')}`)
      } 
    }
  }
    
game.play();
    