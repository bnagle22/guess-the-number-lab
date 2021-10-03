const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses:[],
  getGuess: function() {
    let guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} 
    and ${this.biggestNum}.`))
    console.log(guess)
    return guess
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    while(this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum){
      this.prevGuesses.push(this.getGuess())
      this.render()
    }
  },
  render: function(){
    if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum){
      alert(`Your guess is too high. Previous guesses: ${this.prevGuesses}`)
    } else if (this.prevGuesses[this.prevGuesses.length -1] < this.secretNum){
      alert(`Your guess is too low. Previous guesses: ${this.prevGuesses}`)
    } else {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses.`)
    }
  }


}

game.play()

