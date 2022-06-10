
document.getElementsByClassName('mainContainer')[0].style.display = 'none';
document.getElementsByClassName('historyContainer')[0].style.display = 'none';
let gameCount;
let winCount;
let tieCount;
let lossCount;
const bestof = 5;


const btns = document.querySelectorAll('.button');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        playRound(btn.innerText,computerPlay());
    });
});

const playBtn = document.querySelector('.play');
    playBtn.addEventListener('click', () => startGame());

function reset(){
    window.location.reload();
};


function startGame(){
    document.getElementsByClassName('play')[0].style.display = 'none';
    document.getElementsByClassName('mainContainer')[0].style.display = 'block';
    document.getElementsByClassName('gameResult')[0].style.display = 'none';
    document.getElementsByClassName('historyContainer')[0].style.display = 'none';
    if (gameCount > 0) {
        clearHistory();
        resetScore();
    }
    gameCount = 0;
    winCount = 0;
    drawCount = 0;
    lossCount = 0;
};

function endGame(){
    document.getElementsByClassName('play')[0].style.display = 'block';
    document.getElementsByClassName('play')[0].textContent = 'Play Again!';
    document.getElementsByClassName('mainContainer')[0].style.display = 'none';
    document.getElementsByClassName('gameResult')[0].style.display = 'block';
    let gameText;
    if (winCount === lossCount) {
        gameText = "It's a Draw!"
    } else if (winCount < lossCount) {
        gameText = "You lose! Better luck next time!"
    } else if (winCount > lossCount) {
        gameText = "Congratulations! You win!"
    }
    document.getElementsByClassName('gameResult')[0].textContent = gameText;
}
function resetScore(){
    const scores = document.querySelectorAll('.scoreCard');
    scores.forEach((score) => {
        score.textContent = "0";
    });
}

function writeScore(outcome){
    const score = document.getElementsByClassName(outcome)[0];
    if (outcome === "win") {
        score.textContent = winCount;
    } else if (outcome === "loss") {
        score.textContent = lossCount;
    } else {
        score.textContent = drawCount;
    }
}

function writeHistory(userChoice, comChoice, outcome){
    const gameNum = document.getElementsByClassName('game')[0];
    const gameNumContent = document.createElement('p');
    gameNumContent.classList.add('printGame');
    gameNumContent.textContent = gameCount + "/5";
    
    const vs = document.getElementsByClassName('vs')[0];
    const vsContent = document.createElement('p');
    vsContent.classList.add('printGame');
    vsContent.textContent = "vs";
    
    const roundResult = document.getElementsByClassName('result')[0];
    const roundResultContent = document.createElement('p');
    roundResultContent.classList.add('printGame');

const cpuImg = document.getElementsByClassName('cpuChoice')[0];
const cpuImgContent = document.createElement('p');
cpuImgContent.classList.add('image');
cpuImgContent.style.backgroundImage = "url(images/"+comChoice+".png)";

const userImg = document.getElementsByClassName('userChoice')[0];
const userImgContent = document.createElement('p');
userImgContent.classList.add('image');
userImgContent.style.backgroundImage = "url(images/"+userChoice+".png)";

    if (outcome === "win") {
        roundResultContent.textContent = "You Won!";
    } else if (outcome === "loss") {
        roundResultContent.textContent = "You Lost!";
    } else {
        roundResultContent.textContent = "It's a Draw!";
    }
gameNum.appendChild(gameNumContent);
vs.appendChild(vsContent);
roundResult.appendChild(roundResultContent);
userImg.appendChild(userImgContent);
cpuImg.appendChild(cpuImgContent);

}

function clearHistory(){
    let prevGames; // = document.getElementsByClassName('table');
    for (let game = 0 ; game < document.getElementsByClassName('gameContainer')[0].childElementCount; game++){
        prevGames = document.getElementsByClassName('table')[game];
        for (let i = gameCount ; i >= 1 ; i--) {
            prevGames.removeChild(prevGames.lastChild);
        }
    }

}

function playRound(playerSelection, computerSelection){
    if (document.getElementsByClassName('historyContainer')[0].style.display === 'none'){
        document.getElementsByClassName('historyContainer')[0].style.display = 'block';
    }
    let result = ""
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
        if (playerSelection === computerSelection) {
            drawCount ++;
            result = 'draw';
        } else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                lossCount ++;
                result = 'loss';
            }else {
                winCount ++;
                result = 'win';
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                lossCount ++;
                result = 'loss';
            }else {
                winCount ++;
                result = 'win';
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                lossCount ++;
                result = 'loss';
            }else {winCount ++;
                result = 'win';
            }
        } 
    gameCount ++;
    writeScore(result);
    writeHistory(playerSelection, computerSelection, result);
    if (gameCount === 5) {
        endGame();
    }
    //alert(result);
    //return result;
}

function computerPlay(){ /*randomly returns rock, paper, or scissors*/
    return Math.floor(Math.random()*3)+1 === 1 ? "rock" : Math.floor(Math.random()*3)+1 === 2 ? "paper" : "scissors";
}