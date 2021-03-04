let wordList = [];
let word = wordList[Math.floor(Math.random() * wordList.length)];
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let gameRunning = true;
while (gameRunning) {
  let input = prompt('Input a letter: ');
  
