const btns = document.querySelectorAll('.button');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        startGame(btn.innerText,computerPlay());
    });
});
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
        function startGame(playerSelection, computerSelection){
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();
            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                if (playerSelection === computerSelection) {
                    result = "It's a Draw!";
                } else if (playerSelection === "rock") {
                    if (computerSelection === "paper") {
                        result = "You Lose! Paper beats Rock.";
                    }else result = "You Win! Rock beats Scissors.";
                } else if (playerSelection === "paper") {
                    if (computerSelection === "scissors") {
                        result = "You Lose! Scissors beats Paper.";
                    }else result = "You Win! Paper beats Rock.";
                } else if (playerSelection === "Scissors") {
                    if (computerSelection === "Rock") {
                        result = "You Lose! Rock beats Scissors.";
                    }else result = "You Win! Scissors beats Paper.";
                } 
            }else result = "Please choose either Rock, Paper, or Scissors.";
            alert(result);
            return result;
        }

        function computerPlay(){ /*randomly returns rock, paper, or scissors*/
            return Math.floor(Math.random()*3)+1 === 1 ? "rock" : Math.floor(Math.random()*3)+1 === 2 ? "paper" : "scissors";
        }