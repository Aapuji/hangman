let wordList = [], word = wordList[Math.floor(Math.random() * wordList.length)], lettersChosen = [];
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let numLives = 6, i = 1, gameRunning = true;

while (gameRunning && i <= numLives) {  
  let input = prompt('Enter a letter');
  if (input && input.length === 1 && typeof input != 'number') {
    if (lettersChosen.find(element => element === input)) {
      console.log(`You have already chosen ${input}.`)
      i++;
    } else if (word.split('').find(input)) {
    lettersChosen.push(input);
    console.log('That is correct!');
    }
  }
}
