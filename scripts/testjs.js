const resultDiv= document.createElement('div');
const rp=document.createElement('p');
resultDiv.appendChild(rp);

const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
  }

function btnChoice(btnID){
switch (btnID){
    case 'btn-rock':
    return 1;
    case 'btn-paper':
    return 2;
    case 'btn-scissors':
    return 3;
}
}

function getPlayerChoice(btnchoice) {
const choice = btnchoice;
return choices[Number(choice - 1)];
}

const btnRock = document.getElementById('btn-rock');
btnRock.addEventListener('click',(event)=>{
    playRound(getPlayerChoice(btnChoice(event.target.id)),getComputerChoice());
})
const btnPaper = document.getElementById('btn-paper');
btnPaper.addEventListener('click',(event)=>{
    playRound(getPlayerChoice(btnChoice(event.target.id)),getComputerChoice());
})
const btnscissors = document.getElementById('btn-scissors');
btnscissors.addEventListener('click',(event)=>{
    playRound(getPlayerChoice(btnChoice(event.target.id)),getComputerChoice());
})



// one round play

function playRound(player, computer) {
    // console.log(`${player} ${computer}`);
    if (player === computer) {
        rp.textContent=`tie`;
        console.log("tie");
    } else if (
      (player === choices[0] && computer === choices[2]) ||
      (player === choices[1] && computer === choices[0]) ||
      (player === choices[2] && computer === choices[1])
    ) {
        rp.textContent=`player`;
      console.log("player");
    } else {
        rp.textContent=`computer`;
        console.log("computer");
    }
  }

 document.body.appendChild(resultDiv);


  