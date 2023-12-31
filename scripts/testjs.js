
const choices = ["rock", "paper", "scissors"];
let pwin = 0, cwin = 0;
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function btnChoice(btnID) {
    switch (btnID) {
        case "btn-rock":
            return 1;
        case "btn-paper":
            return 2;
        case "btn-scissors":
            return 3;
    }
}

function getPlayerChoice(btnchoice) {
    const choice = btnchoice;
    return choices[Number(choice - 1)];
}

const btnRock = document.getElementById("btn-rock");
btnRock.addEventListener("click", (event) => {
    playmatch(event);
});
const btnPaper = document.getElementById("btn-paper");
btnPaper.addEventListener("click", (event) => {
    
    playmatch(event);
});
const btnscissors = document.getElementById("btn-scissors");
btnscissors.addEventListener("click", (event) => {
    playmatch(event);
});

// one round play
const rrs=document.getElementById('round-result-content')
function playRound(player, computer) {
    // console.log(`${player} ${computer}`);
    if (player === computer) {
        rrs.textContent = `tie`;
        return "tie";
    } else if (
        (player === choices[0] && computer === choices[2]) ||
        (player === choices[1] && computer === choices[0]) ||
        (player === choices[2] && computer === choices[1])
    ) {
        rrs.textContent = `player`;
        return "player";
    } else {
        rrs.textContent = `computer`;
        return "computer";
    }
}



// to play a 5 round match
function playmatch(event) {

    let whoWon = playRound(
        getPlayerChoice(btnChoice(event.target.id)),
        getComputerChoice()
    );
    const mrs=document.getElementById('match-result-content');
    mrs.textContent=' In-progress'
    const playerScore=document.getElementById("player-result-content")
    if (whoWon === "player") {
        console.log('player');
        pwin += 1;
        console.log(pwin);
    } else if (whoWon === "computer") {
        console.log('computer');
        cwin += 1;
        console.log(cwin);
    } else if (whoWon==="tie"){
        console.log('round tie');
    }
    
    playerScore.textContent=`Player= ${pwin}, Computer= ${cwin}`
    if (pwin ===5 && cwin===5) {
        mrs.textContent=' Match Tie'
        pwin=0,cwin=0;
        console.log("match tie");
        playerScore.textContent=` Player= ${pwin}, Computer= ${cwin}`
    }
    else if (pwin ===5) {
        mrs.textContent=' Player Wins'
        console.log("player wins");
        pwin=0,cwin=0;
        playerScore.textContent=`Player= ${pwin}, Computer= ${cwin}`
    }
    else if (cwin === 5) {
        mrs.textContent=' Computer Wins'
        console.log("computer wins");
        pwin=0,cwin=0;
        playerScore.textContent=`Player= ${pwin}, Computer= ${cwin}`
    }
}
