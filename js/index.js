const restartBtn = document.querySelector("#restart__btn");
const playerBalls = document.querySelector("#player__ball")
const computerBalls = document.querySelector("#computer__ball");
const boxs = document.querySelectorAll(".box__choice");
const modal = document.querySelector(".box__modal");
const modalTitle = document.querySelector(".box__modal-title");
const resultIcon = document.querySelector("#result__icon");
const computerResultChoice = document.querySelector(".computer__choice span");
const overlay = document.querySelector(".box__modal-overlay");
let playerBall = 0;
let computerBall = 0;
boxs.forEach((box, index) => {
    box.addEventListener("click", () => {
        play(box)
        playerBalls.textContent = playerBall;
        computerBalls.textContent = computerBall;
        restartBtn.classList.add("visible");
    })
})
function play(box) {
    getWinner(box.id, getComputerChoice())
}
function getComputerChoice() {
    let randomNumber = (Math.random()).toFixed(2);
    console.log(randomNumber);
    if (randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return "paper"
    } else if (randomNumber > 0.66) {
        return "scissors";
    }
}
function getWinner(player, computer) {
    if (player == "rock") {
        if (computer == "paper") {
            +computerBall++;
            showWinner("computer", "paper")
        } else if (computer == "rock") {
            showWinner("draw", "rock")
        } else if (computer == "scissors") {
            +playerBall++;
            showWinner("player", "scissors")
        }
    } else if (player == "paper") {
        if (computer == "rock") {
            +playerBall++;
            showWinner("player", "rock")
        } else if (computer == "paper") {
            showWinner("draw", "paper")
        } else if (computer == "scissors") {
            +computerBall++;
            showWinner("computer", "scissors")
        }
    } else if (player == "scissors") {
        if (computer == "paper") {
            +playerBall++;
            showWinner("player", "paper")
        } else if (computer == "scissors") {
            showWinner("draw", "scissors")
        } else if (computer == "rock") {
            +computerBall++;
            showWinner("computer", "rock")
        }
    }
}
function showWinner(winner, name) {
    name = name[0].toUpperCase() + name.slice(1)
    modal.classList.add("visible");
    overlay.classList.add("visible");
    changeIcon(name)
    setTimeout(() => {
        modal.classList.remove("visible");
        overlay.classList.remove("visible");
    }, 1300)
    if (winner == "computer") {
        modalTitle.textContent = "You lose !";
        modalTitle.className = "box__modal-title text-danger";
        computerResultChoice.textContent = name;;
    } else if (winner == "player") {
        modalTitle.textContent = "You win !";
        modalTitle.className = "box__modal-title text-success";
        computerResultChoice.textContent = name;;
    } else if (winner == "draw") {
        modalTitle.textContent = "It's a draw !";
        modalTitle.className = "box__modal-title text-dark";
        computerResultChoice.textContent = name;;
    }
}
function changeIcon(name) { 
    name  = name[0].toLowerCase()+name.slice(1);
    if(name == "rock"){
        resultIcon.className = "fas fa-hand-rock fa-10x"
    }else if(name == "paper"){
        resultIcon.className = "fas fa-hand-paper fa-10x"
    }else if(name == "scissors"){
        resultIcon.className = "fas fa-hand-scissors fa-10x"
    }
}
function restart() {
    playerBalls.textContent = 0;
    computerBalls.textContent = 0;
    playerBall = 0 
    computerBall = 0
    restartBtn.classList.remove("visible")
}
restartBtn.addEventListener("click",restart);