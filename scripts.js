const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
const result = document.querySelector(".result")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choice = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choice[randomNumber]
}

const playTheGame = (human, machine) => {
    
    if (human === machine) {
        result.innerHTML = "Deu Empatou 😬"
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou 🥳"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você Perdeu para a Alexia 😭'

    }
}