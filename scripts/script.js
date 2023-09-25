const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  const choice = prompt(
    `Enter your choice:
          1. ROCK
          2. PAPER
          3. SCISSORS`
  );
  return choices[Number(choice - 1)];
}

function playRound(player, computer) {
  player = player.toLowerCase();
  if (player === computer) {
    return "tie";
  } else if (
    (player === choices[0] && computer === choices[2]) ||
    (player === choices[1] && computer === choices[0]) ||
    (player === choices[2] && computer === choices[1])
  ) {
    return "player";
  } else {
    return "computer";
  }
}

let game = () => {
  let pwin = 0,
    cwin = 0;
  for (let i = 0; i < 1; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    let whoWon = playRound(playerSelection, computerSelection);

    if (whoWon === "player") {
      pwin += 1;
    } else if (whoWon === "computer") {
      cwin += 1;
    }
  }
  if (pwin === cwin) console.log("tie");
  else if (pwin > cwin) console.log("player wins");
  else if (cwin > pwin) console.log("computer wins");
};

// game();


// logic with ui below

