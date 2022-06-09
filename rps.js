
document.getElementsByClassName('mainContainer')[0].style.display = 'none';

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

let gameCount;
let winCount;
let tieCount;
let lossCount;

function startGame(){
    document.getElementsByClassName('play')[0].style.display = 'none';
    document.getElementsByClassName('mainContainer')[0].style.display = 'block';
    gameCount = 0;
    winCount = 0;
    drawCount = 0;
    lossCount = 0;
};

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
        //let result;

//        function game(){
//            let userScore = 0;
//            let comScore = 0;
//            let bestOutOf = parseInt(prompt("How many games would you like to play? Best out of:"));
//            if (!bestOutOf) {
//                //alert("Please enter an Integer");
//                return;
//            }
/*            for (let i = 0; i < bestOutOf; i++){
                let userInput = prompt("Please enter Rock, Paper, or Scissors.");
                startGame(userInput, computerPlay());
                if (result === "Please choose either Rock, Paper, or Scissors.") {
                    i--;
                } else if (result.charAt(4) === "W"){
                    userScore++;
                } else if (result.charAt(4) === "L") {
                    comScore++;
                }
                if (userScore === (Math.floor(bestOutOf / 2)+1) || (comScore === (Math.floor(bestOutOf / 2)+1))) {
                    i = bestOutOf;
                    if (userScore > comScore){
                        //alert("You won " + userScore + "/" + bestOutOf);
                    } else //alert("You lost " + userScore + "/" + bestOutOf);
                } else if ((i + 1) === bestOutOf) {
                    if (userScore > comScore){
                        //alert("You won " + userScore + "/" + bestOutOf);
                    } else if (userScore < comScore ) {
                        //alert("You lost " + userScore + "/" + bestOutOf);
                    } else //alert("Draw! You tied the computer player.");
                }
            }
            return;
        }
*/
        function playRound(playerSelection, computerSelection){
            let result = ""
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();
            //if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                if (playerSelection === computerSelection) {
                    drawCount ++;
                    result = 'draw';
                    //result = "It's a Draw!";
                } else if (playerSelection === "rock") {
                    if (computerSelection === "paper") {
                        lossCount ++;
                        result = 'loss';
                        //result = "You Lose! Paper beats Rock.";
                    }else {
                        winCount ++;
                        result = 'win';
                    } //result = "You Win! Rock beats Scissors.";
                } else if (playerSelection === "paper") {
                    if (computerSelection === "scissors") {
                        lossCount ++;
                        result = 'loss';
                        //result = "You Lose! Scissors beats Paper.";
                    }else {
                        winCount ++;
                        result = 'win';
                    } //result = "You Win! Paper beats Rock.";
                } else if (playerSelection === "scissors") {
                    if (computerSelection === "rock") {
                        lossCount ++;
                        result = 'loss';
                        //result = "You Lose! Rock beats Scissors.";
                    }else {winCount ++;
                        result = 'win';
                    } //result = "You Win! Scissors beats Paper.";
                } 
            //}else result = "Please choose either Rock, Paper, or Scissors.";
            gameCount ++;
            writeScore(result);
            writeHistory(playerSelection, computerSelection, result);
            //alert(result);
            //return result;
        }

        function computerPlay(){ /*randomly returns rock, paper, or scissors*/
            return Math.floor(Math.random()*3)+1 === 1 ? "rock" : Math.floor(Math.random()*3)+1 === 2 ? "paper" : "scissors";
        }