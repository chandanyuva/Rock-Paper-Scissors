
let playerSelection = prompt('enter choice');

function getComputerChoice() {
  const choices = [ 'ROCK', 'PAPER','SCISSSORS'];
  return choices[Math.floor(Math.random() * 3)];
}
