const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  prevGuesses:[],
  getBounds : function() {
    alert("Welcome to Guess the Number game. " +
    "Please enter a lower bound and an upper bound.");
    this.smallestNum = parseInt(prompt("Enter the lower bound: "))
    this.biggestNum = parseInt(prompt("Enter the upper bound: "))
  },
  getGuess: function() {
    let guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} 
    and ${this.biggestNum}.`))
    return guess
    },
  play: function() {
    this.getBounds()
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    while(this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum){
      let guess = this.getGuess()
      if (guess >= this.smallestNum && 
        guess <= this.biggestNum){
        this.prevGuesses.push(guess)
        console.log(this.prevGuesses)
        this.render()
    } else{
      alert("Error, input must be a number in the specified range.")
    }
    }
  },
  render: function(){
    if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum){
      alert(`Your guess is too high. Previous guesses: ${this.prevGuesses}`)
      this.biggestNum = this.prevGuesses[this.prevGuesses.length -1]
    } else if (this.prevGuesses[this.prevGuesses.length -1] < this.secretNum){
      alert(`Your guess is too low. Previous guesses: ${this.prevGuesses}`)
      this.smallestNum = this.prevGuesses[this.prevGuesses.length -1]
    } else {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses.`)
    }
  }
}

game.play()

